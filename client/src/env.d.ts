/// <reference types="vite/client" />

declare module "*.fbx" {
  const content: string;
  export default content;
}

declare module "*.glb" {
  const content: string;
  export default content;
}

declare module "*.gltf" {
  const content: string;
  export default content;
}

declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': any;
  }
}
