import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const dbUrl = process.env.DATABASE_URL as string;

    await mongoose.connect(dbUrl);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ DB Error:", error);
    process.exit(1);
  }
};