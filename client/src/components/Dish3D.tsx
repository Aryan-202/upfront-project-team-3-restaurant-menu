import { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Environment, ContactShadows, Float } from "@react-three/drei";
import * as THREE from "three";
import { AnimatePresence, motion } from "framer-motion";
import { Tag, TagsIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MenuItem } from "@/data/menu";

/* ========================================================================
   REALISTIC PROCEDURAL DISHES
   Each dish builds a recognisable scene from primitives:
   - bowl  → ceramic bowl + sauce surface + chunks + garnish
   - plate → ceramic plate + protein + sides + sauce drops
   - glass → martini glass (stem, bowl, liquid meniscus, garnish)
   - cake  → plate + molten cake + powdered sugar + berries
   ======================================================================== */

/* ---------- Reusable materials ---------- */
const ceramicBlack = new THREE.MeshPhysicalMaterial({
  color: "#0d0d0d",
  metalness: 0.1,
  roughness: 0.25,
  clearcoat: 0.8,
  clearcoatRoughness: 0.15,
});

const ceramicWhite = new THREE.MeshPhysicalMaterial({
  color: "#f3ede0",
  metalness: 0.05,
  roughness: 0.35,
  clearcoat: 0.5,
});

/* ---------- Helpers: deterministic pseudo-random for stable scenes ---------- */
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

/* =====================================================================
   BOWL DISHES (caesar salad, paneer, risotto)
   ===================================================================== */
function Bowl({ item }: { item: MenuItem }) {
  const isCurry = item.id === "paneer";
  const isRisotto = item.id === "risotto";
  const isCaesar = item.id === "caesar";

  const sauceColor = isCurry ? "#c8421f" : isRisotto ? "#e8d9a8" : "#d8c47a";

  // generate stable chunk positions
  const chunks = useMemo(() => {
    const rng = seeded(item.id.length * 13);
    const out: { pos: [number, number, number]; size: number; rot: number }[] = [];
    for (let i = 0; i < 14; i++) {
      const r = 0.25 + rng() * 0.55;
      const a = rng() * Math.PI * 2;
      out.push({
        pos: [Math.cos(a) * r, 0.32 + rng() * 0.05, Math.sin(a) * r],
        size: 0.13 + rng() * 0.07,
        rot: rng() * Math.PI,
      });
    }
    return out;
  }, [item.id]);

  const leaves = useMemo(() => {
    const rng = seeded(item.id.length * 7 + 1);
    const out: { pos: [number, number, number]; rot: [number, number, number]; size: number }[] = [];
    for (let i = 0; i < 8; i++) {
      const r = 0.35 + rng() * 0.5;
      const a = rng() * Math.PI * 2;
      out.push({
        pos: [Math.cos(a) * r, 0.4 + rng() * 0.1, Math.sin(a) * r],
        rot: [rng() * 0.6 - 0.3, a, rng() * 0.6 - 0.3],
        size: 0.18 + rng() * 0.1,
      });
    }
    return out;
  }, [item.id]);

  return (
    <group>
      {/* Outer bowl (lathe profile for elegant curve) */}
      <BowlLathe />

      {/* Sauce / base inside bowl */}
      <mesh position={[0, 0.18, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.92, 64]} />
        <meshPhysicalMaterial
          color={sauceColor}
          roughness={isCurry ? 0.35 : 0.55}
          metalness={0.05}
          clearcoat={isCurry ? 0.6 : 0.2}
          sheen={0.4}
          sheenColor={sauceColor}
        />
      </mesh>

      {/* Chunks of food */}
      {chunks.map((c, i) => (
        <mesh key={i} position={c.pos} rotation={[c.rot, c.rot * 0.5, 0]} castShadow>
          {isRisotto ? (
            <sphereGeometry args={[c.size * 0.45, 12, 12]} />
          ) : (
            <boxGeometry args={[c.size, c.size * 0.7, c.size]} />
          )}
          <meshStandardMaterial
            color={
              isCurry ? "#f0d4a0" :
              isRisotto ? "#f5e6c8" :
              "#e8c47a"
            }
            roughness={0.6}
          />
        </mesh>
      ))}

      {/* Greens / leaves on top */}
      {(isCaesar || isCurry || isRisotto) && leaves.map((l, i) => (
        <group key={`leaf-${i}`} position={l.pos} rotation={l.rot}>
          <mesh castShadow>
            <sphereGeometry args={[l.size, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2.2]} />
            <meshStandardMaterial
              color={isCaesar ? "#3a7a2a" : isCurry ? "#1f6a1f" : "#5a8a4a"}
              roughness={0.6}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>
      ))}

      {/* Cream dollop for curry */}
      {isCurry && (
        <mesh position={[0, 0.42, 0]} castShadow>
          <sphereGeometry args={[0.16, 24, 24]} />
          <meshPhysicalMaterial color="#fbf6e8" roughness={0.4} clearcoat={0.4} />
        </mesh>
      )}

      {/* Parmesan shavings for risotto/caesar */}
      {(isRisotto || isCaesar) && [0, 1, 2].map((i) => (
        <mesh key={i} position={[Math.cos(i * 2) * 0.3, 0.45 + i * 0.02, Math.sin(i * 2) * 0.3]}
              rotation={[0.3, i, 0]} castShadow>
          <boxGeometry args={[0.18, 0.01, 0.08]} />
          <meshStandardMaterial color="#f5e2a0" roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function BowlLathe() {
  // Lathe profile: outside curve from base to rim
  const points = useMemo(() => {
    const pts: THREE.Vector2[] = [];
    pts.push(new THREE.Vector2(0.0, -0.35));
    pts.push(new THREE.Vector2(0.45, -0.32));
    pts.push(new THREE.Vector2(0.78, -0.15));
    pts.push(new THREE.Vector2(1.02, 0.1));
    pts.push(new THREE.Vector2(1.08, 0.22));
    pts.push(new THREE.Vector2(1.02, 0.22));
    pts.push(new THREE.Vector2(0.95, 0.18));
    pts.push(new THREE.Vector2(0.7, -0.05));
    pts.push(new THREE.Vector2(0.4, -0.2));
    pts.push(new THREE.Vector2(0.0, -0.22));
    return pts;
  }, []);

  return (
    <mesh castShadow receiveShadow material={ceramicBlack}>
      <latheGeometry args={[points, 64]} />
    </mesh>
  );
}

/* =====================================================================
   PLATE DISHES (bruschetta, wagyu steak, salmon)
   ===================================================================== */
function Plate({ item }: { item: MenuItem }) {
  return (
    <group>
      {/* Plate */}
      <mesh position={[0, -0.2, 0]} receiveShadow material={ceramicBlack}>
        <cylinderGeometry args={[1.4, 1.35, 0.06, 64]} />
      </mesh>
      <mesh position={[0, -0.165, 0]} receiveShadow>
        <ringGeometry args={[1.15, 1.4, 64]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.4} side={THREE.DoubleSide} />
      </mesh>

      {item.id === "wagyu" && <WagyuSteak />}
      {item.id === "salmon" && <SalmonPlate />}
      {item.id === "bruschetta" && <BruschettaPlate />}
    </group>
  );
}

function WagyuSteak() {
  // Steak with grill marks (stripes), truffle, rosemary, jus drops
  return (
    <group>
      {/* Steak body */}
      <mesh position={[0, -0.05, 0]} rotation={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[1.0, 0.22, 0.7]} />
        <meshStandardMaterial color="#5a2418" roughness={0.55} />
      </mesh>
      {/* Grill marks: dark stripes on top */}
      {[-0.3, -0.1, 0.1, 0.3].map((x) => (
        <mesh key={x} position={[x, 0.07, 0]} rotation={[0, 0.3, 0]}>
          <boxGeometry args={[0.06, 0.01, 0.7]} />
          <meshStandardMaterial color="#1a0a05" roughness={0.9} />
        </mesh>
      ))}
      {/* Truffle on top */}
      <mesh position={[0.0, 0.18, 0.05]} castShadow>
        <icosahedronGeometry args={[0.13, 0]} />
        <meshStandardMaterial color="#2a1a10" roughness={0.95} />
      </mesh>
      {/* Rosemary sprig */}
      <group position={[-0.1, 0.16, 0.05]} rotation={[0, 0.4, 0.2]}>
        <mesh>
          <cylinderGeometry args={[0.012, 0.012, 0.5, 8]} />
          <meshStandardMaterial color="#3a5a2a" />
        </mesh>
        {[0, 1, 2, 3, 4].map((i) => (
          <mesh key={i} position={[0.04 * (i % 2 === 0 ? 1 : -1), -0.18 + i * 0.08, 0]}
                rotation={[0, 0, (i % 2 === 0 ? 1 : -1) * 0.6]}>
            <boxGeometry args={[0.06, 0.012, 0.012]} />
            <meshStandardMaterial color="#4a7a3a" />
          </mesh>
        ))}
      </group>
      {/* Jus drops */}
      {[[0.7, -0.13, 0.2], [0.85, -0.13, -0.1], [-0.7, -0.13, 0.3]].map((p, i) => (
        <mesh key={i} position={p as [number, number, number]}>
          <sphereGeometry args={[0.06 + i * 0.01, 16, 16]} />
          <meshPhysicalMaterial color="#2a0e08" roughness={0.2} clearcoat={1} metalness={0.1} />
        </mesh>
      ))}
    </group>
  );
}

function SalmonPlate() {
  return (
    <group>
      {/* Salmon fillet — segmented for that 'flake' look */}
      <group position={[0.15, -0.05, 0]} rotation={[0, -0.2, 0]}>
        {[-0.3, -0.1, 0.1, 0.3].map((x, i) => (
          <mesh key={i} position={[x, 0, 0]} castShadow>
            <boxGeometry args={[0.18, 0.18, 0.55]} />
            <meshStandardMaterial color={i % 2 === 0 ? "#e07a4a" : "#d8693a"} roughness={0.55} />
          </mesh>
        ))}
        {/* Crust on top */}
        <mesh position={[0, 0.095, 0]}>
          <boxGeometry args={[0.85, 0.02, 0.55]} />
          <meshStandardMaterial color="#3a1a08" roughness={0.95} />
        </mesh>
      </group>

      {/* Asparagus spears */}
      {[-0.55, -0.45, -0.65, -0.35].map((x, i) => (
        <group key={i} position={[x, -0.05, 0.0]} rotation={[0, 0, Math.PI / 2 + (i - 2) * 0.08]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.035, 0.04, 0.6, 12]} />
            <meshStandardMaterial color="#5a8a3a" roughness={0.6} />
          </mesh>
          <mesh position={[0, 0.32, 0]} castShadow>
            <coneGeometry args={[0.05, 0.12, 12]} />
            <meshStandardMaterial color="#4a7a2a" roughness={0.7} />
          </mesh>
        </group>
      ))}

      {/* Lemon slice */}
      <group position={[0.7, -0.1, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.22, 0.22, 0.04, 32]} />
          <meshStandardMaterial color="#f5d340" roughness={0.4} />
        </mesh>
        <mesh position={[0, 0.025, 0]}>
          <cylinderGeometry args={[0.18, 0.18, 0.005, 32]} />
          <meshStandardMaterial color="#fae870" roughness={0.3} />
        </mesh>
      </group>

      {/* Rosemary sprig */}
      <mesh position={[0.1, 0.05, 0.0]} rotation={[0, 0.5, 0.4]}>
        <cylinderGeometry args={[0.015, 0.015, 0.45, 8]} />
        <meshStandardMaterial color="#4a7a3a" />
      </mesh>
    </group>
  );
}

function BruschettaPlate() {
  return (
    <group>
      {/* Bread slice */}
      <mesh position={[0, -0.05, 0]} rotation={[0, 0.2, 0]} castShadow>
        <boxGeometry args={[1.1, 0.18, 0.55]} />
        <meshStandardMaterial color="#d4a45a" roughness={0.85} />
      </mesh>
      {/* Toasted top crust */}
      <mesh position={[0, 0.04, 0]} rotation={[0, 0.2, 0]}>
        <boxGeometry args={[1.1, 0.02, 0.55]} />
        <meshStandardMaterial color="#8a4a1a" roughness={0.95} />
      </mesh>

      {/* Diced tomatoes */}
      {[
        [-0.35, 0.1, -0.1], [-0.1, 0.1, 0.1], [0.15, 0.1, -0.1],
        [0.4, 0.1, 0.1], [-0.25, 0.1, 0.15], [0.3, 0.1, -0.05],
        [0.0, 0.1, 0.0], [-0.4, 0.1, 0.0], [0.45, 0.1, -0.15],
      ].map((p, i) => (
        <mesh key={i} position={p as [number, number, number]} rotation={[0, i, 0]} castShadow>
          <boxGeometry args={[0.13, 0.1, 0.13]} />
          <meshStandardMaterial color={i % 3 === 0 ? "#d83020" : "#c02818"} roughness={0.4} />
        </mesh>
      ))}

      {/* Basil leaves */}
      {[[-0.15, 0.18, 0.05], [0.2, 0.18, -0.1], [0.0, 0.18, 0.15]].map((p, i) => (
        <mesh key={i} position={p as [number, number, number]} rotation={[0.3, i * 1.2, 0]} castShadow>
          <sphereGeometry args={[0.13, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2.5]} />
          <meshStandardMaterial color="#3a8a3a" roughness={0.6} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}

/* =====================================================================
   GLASS DISH (smoked martini cocktail)
   ===================================================================== */
function CocktailGlass({ item }: { item: MenuItem }) {
  // Martini glass profile via lathe
  const glassPoints = useMemo(() => {
    const pts: THREE.Vector2[] = [];
    pts.push(new THREE.Vector2(0.0, -0.7));
    pts.push(new THREE.Vector2(0.4, -0.7));
    pts.push(new THREE.Vector2(0.4, -0.66));
    pts.push(new THREE.Vector2(0.04, -0.6));
    pts.push(new THREE.Vector2(0.04, -0.0));
    pts.push(new THREE.Vector2(0.7, 0.55));
    pts.push(new THREE.Vector2(0.72, 0.6));
    pts.push(new THREE.Vector2(0.66, 0.6));
    pts.push(new THREE.Vector2(0.0, 0.0));
    return pts;
  }, []);

  return (
    <group position={[0, 0.05, 0]}>
      {/* Glass body */}
      <mesh castShadow>
        <latheGeometry args={[glassPoints, 64]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={0.95}
          thickness={0.2}
          roughness={0.02}
          ior={1.5}
          transparent
          opacity={0.55}
          metalness={0}
        />
      </mesh>

      {/* Liquid (cone, slightly inset) */}
      <mesh position={[0, 0.25, 0]}>
        <coneGeometry args={[0.62, 0.55, 48]} />
        <meshPhysicalMaterial
          color={item.modelColor}
          transmission={0.6}
          thickness={0.4}
          roughness={0.15}
          ior={1.35}
          transparent
          opacity={0.85}
          attenuationColor={item.modelColor}
          attenuationDistance={1.5}
        />
      </mesh>

      {/* Liquid surface */}
      <mesh position={[0, 0.52, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.6, 48]} />
        <meshPhysicalMaterial color={item.modelColor} roughness={0.05} clearcoat={1} metalness={0.2} />
      </mesh>

      {/* Gold rim */}
      <mesh position={[0, 0.595, 0]}>
        <torusGeometry args={[0.66, 0.012, 12, 64]} />
        <meshStandardMaterial color="#e0b040" metalness={0.9} roughness={0.2} emissive="#3a2400" />
      </mesh>

      {/* Citrus twist garnish */}
      <mesh position={[0.35, 0.6, 0]} rotation={[0.3, 0.5, 0.6]}>
        <torusGeometry args={[0.08, 0.015, 8, 24, Math.PI * 1.4]} />
        <meshStandardMaterial color="#f0c040" roughness={0.4} />
      </mesh>
    </group>
  );
}

/* =====================================================================
   CAKE DISH (lava cake)
   ===================================================================== */
function LavaCake() {
  return (
    <group>
      {/* Plate */}
      <mesh position={[0, -0.25, 0]} receiveShadow material={ceramicBlack}>
        <cylinderGeometry args={[1.3, 1.25, 0.06, 64]} />
      </mesh>

      {/* Cake body — slight cone shape */}
      <mesh position={[0, -0.05, 0]} castShadow>
        <cylinderGeometry args={[0.45, 0.55, 0.42, 48]} />
        <meshStandardMaterial color="#3a1f12" roughness={0.75} />
      </mesh>
      {/* Powdered cocoa top */}
      <mesh position={[0, 0.16, 0]}>
        <cylinderGeometry args={[0.45, 0.45, 0.005, 48]} />
        <meshStandardMaterial color="#5a3018" roughness={0.95} />
      </mesh>

      {/* Molten center pouring out */}
      <mesh position={[0.05, -0.1, 0.35]} rotation={[0.3, 0, 0]}>
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshPhysicalMaterial color="#2a0e05" roughness={0.15} clearcoat={1} metalness={0.05} />
      </mesh>
      <mesh position={[0.15, -0.18, 0.5]}>
        <sphereGeometry args={[0.13, 20, 20]} />
        <meshPhysicalMaterial color="#3a1a08" roughness={0.15} clearcoat={1} />
      </mesh>

      {/* Mint sprig on top */}
      <group position={[0, 0.2, 0]}>
        <mesh rotation={[0.3, 0, 0.2]} castShadow>
          <sphereGeometry args={[0.1, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2.2]} />
          <meshStandardMaterial color="#3a8a3a" roughness={0.6} side={THREE.DoubleSide} />
        </mesh>
        <mesh rotation={[0.3, 1, -0.2]} position={[0.06, 0, 0]} castShadow>
          <sphereGeometry args={[0.08, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2.2]} />
          <meshStandardMaterial color="#4a9a4a" roughness={0.6} side={THREE.DoubleSide} />
        </mesh>
      </group>

      {/* Gold dust speck */}
      <mesh position={[0, 0.18, 0]}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color="#f0c040" metalness={0.95} roughness={0.2} emissive="#3a2400" />
      </mesh>

      {/* Raspberries */}
      {[
        [-0.7, -0.18, 0.2], [-0.85, -0.18, -0.05], [-0.7, -0.18, -0.25], [0.85, -0.18, 0.15],
      ].map((p, i) => (
        <group key={i} position={p as [number, number, number]}>
          <mesh castShadow>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color="#c0223a" roughness={0.4} />
          </mesh>
          {/* berry bumps */}
          {[0, 1, 2, 3, 4].map((j) => {
            const a = (j / 5) * Math.PI * 2;
            return (
              <mesh key={j} position={[Math.cos(a) * 0.08, 0.04, Math.sin(a) * 0.08]}>
                <sphereGeometry args={[0.035, 8, 8]} />
                <meshStandardMaterial color="#d83a4a" roughness={0.4} />
              </mesh>
            );
          })}
        </group>
      ))}

      {/* Powdered sugar dots around plate */}
      {Array.from({ length: 18 }).map((_, i) => {
        const a = (i / 18) * Math.PI * 2;
        const r = 0.85 + (i % 3) * 0.12;
        return (
          <mesh key={i} position={[Math.cos(a) * r, -0.215, Math.sin(a) * r]}>
            <sphereGeometry args={[0.012, 6, 6]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
        );
      })}
    </group>
  );
}

/* =====================================================================
   DISHMESH ROUTER
   ===================================================================== */
function DishMesh({ item }: { item: MenuItem }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.2;
  });

  return (
    <group ref={ref}>
      {item.shape === "bowl" && <Bowl item={item} />}
      {item.shape === "plate" && <Plate item={item} />}
      {item.shape === "glass" && <CocktailGlass item={item} />}
      {item.shape === "cake" && <LavaCake />}
    </group>
  );
}

/* =====================================================================
   FLOATING INGREDIENT LABELS
   ===================================================================== */
function IngredientLabel({
  ingredient,
  index,
}: {
  ingredient: MenuItem["ingredients"][number];
  index: number;
}) {
  return (
    <group position={ingredient.position}>
      {/* connector line dot */}
      <mesh>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshBasicMaterial color={ingredient.color ?? "#f0c040"} />
      </mesh>
      <Html
        distanceFactor={6}
        position={[0.15, 0.2, 0]}
        style={{ pointerEvents: "none" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.7, x: -10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ delay: 0.3 + index * 0.12, duration: 0.45 }}
          className="glass min-w-[120px] rounded-xl bg-background/80 px-3 py-2 backdrop-blur-xl"
          style={{ boxShadow: "0 6px 24px hsl(0 0% 0% / 0.5)" }}
        >
          <div className="font-display text-sm leading-tight text-primary">{ingredient.name}</div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
            {ingredient.benefit}
          </div>
        </motion.div>
      </Html>
    </group>
  );
}

/* =====================================================================
   MAIN VIEWER
   ===================================================================== */
export function Dish3D({ item, showLabels = true }: { item: MenuItem; showLabels?: boolean }) {
  const [labelsOn, setLabelsOn] = useState(showLabels);

  return (
    <div className="relative h-full w-full">
      <Canvas
        shadows
        camera={{ position: [0, 1.6, 3.4], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#050505"]} />
        <fog attach="fog" args={["#050505", 6, 14]} />

        <ambientLight intensity={0.45} />
        <directionalLight position={[3, 5, 2]} intensity={1.3} castShadow shadow-mapSize={[1024, 1024]} />
        <pointLight position={[-3, 2, -2]} intensity={0.7} color="#f0c040" />
        <pointLight position={[2, 3, 2]} intensity={0.4} color="#fff4e0" />

        <Suspense fallback={null}>
          <Float speed={1.0} rotationIntensity={0.15} floatIntensity={0.25}>
            <DishMesh item={item} />
            <AnimatePresence>
              {labelsOn &&
                item.ingredients.map((ing, i) => (
                  <IngredientLabel key={ing.name} ingredient={ing} index={i} />
                ))}
            </AnimatePresence>
          </Float>

          <ContactShadows position={[0, -0.62, 0]} opacity={0.65} scale={6} blur={2.6} far={2} />
          <Environment preset="city" />
        </Suspense>

        <OrbitControls
          enablePan={false}
          minDistance={2}
          maxDistance={6}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.1}
        />
      </Canvas>

      {/* Top-right quick toggle (switch style) */}
      <div className="pointer-events-none absolute right-4 top-20 z-10 flex items-center gap-2">
        <span className="glass rounded-full bg-background/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-xl">
          Labels
        </span>
        <button
          onClick={() => setLabelsOn((v) => !v)}
          aria-label={labelsOn ? "Hide ingredient labels" : "Show ingredient labels"}
          aria-pressed={labelsOn}
          className={cn(
            "pointer-events-auto relative h-7 w-12 rounded-full border transition-colors",
            labelsOn ? "border-primary/60 bg-primary/30" : "border-border/60 bg-secondary/70"
          )}
        >
          <motion.span
            layout
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={cn(
              "absolute top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full shadow-md",
              labelsOn ? "right-1 bg-gradient-gold" : "left-1 bg-muted-foreground/70"
            )}
          >
            <Tag className="h-3 w-3 text-primary-foreground" />
          </motion.span>
        </button>
      </div>

      {/* Bottom centered pill */}
      <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center">
        <button
          onClick={() => setLabelsOn((v) => !v)}
          aria-pressed={labelsOn}
          className={cn(
            "glass pointer-events-auto inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] backdrop-blur-xl transition-all",
            labelsOn
              ? "bg-primary/15 text-primary border-primary/40 shadow-gold"
              : "bg-background/70 text-foreground hover:text-primary"
          )}
        >
          <TagsIcon className="h-3.5 w-3.5" />
          {labelsOn ? "Hide" : "Show"} Ingredient Labels
        </button>
      </div>
    </div>
  );
}
