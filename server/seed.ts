import { connectDB } from "./src/config/db";
import { seedDatabase } from "./src/utils/seed";

const runSeed = async () => {
  try {
    await connectDB();
    await seedDatabase();
    console.log("Seeding completed successfully");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

runSeed();