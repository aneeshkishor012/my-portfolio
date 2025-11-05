import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";

const learningSchema = new mongoose.Schema({
    title: String,
    description: String,
    link: String,
});

const Learning =
    mongoose.models.Learning || mongoose.model("Learning", learningSchema);

const jsonData = [
    {
        "title": "Next.js 14 App Router",
        "description": "Explored the latest Next.js features like Server Actions and Layouts for optimized routing.",
        "link": "https://nextjs.org/docs"
    },
    {
        "title": "React 19 Concurrent Features",
        "description": "Learned about useOptimistic, Actions, and better performance with concurrent rendering.",
        "link": "https://react.dev/blog/2024"
    },
    {
        "title": "Tailwind + Framer Motion Integration",
        "description": "Implemented smooth animations using Framer Motion within a Tailwind-styled Next.js project.",
        "link": "https://www.framer.com/motion/"
    }
]
export async function GET() {
    await connectDB();
    const learnings = await Learning.find().limit(3);
    // return NextResponse.json(learnings);
    return jsonData;
}
