import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.warn("⚠️ Skipping DB connection: MONGODB_URI is not defined.");
}

// Use a global variable to cache the connection across hot reloads
let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectDB() {
    // If no MongoDB URI, skip the connection (e.g., static build)
    if (!MONGODB_URI) {
        console.warn("⚠️ No DB connection (static build mode)");
        return null;
    }

    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose
            .connect(MONGODB_URI)
            .then((mongoose) => {
                console.log("✅ MongoDB connected");
                return mongoose;
            })
            .catch((err) => {
                console.error("❌ MongoDB connection error:", err.message);
                throw err;
            });
    }

    cached.conn = await cached.promise;
    (global as any).mongoose = cached;
    return cached.conn;
}
