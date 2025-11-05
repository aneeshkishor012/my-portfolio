import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    link: String,
});

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);
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
    const projects = await Project.find().limit(3);
    // return NextResponse.json(projects);
    return jsonData;
}
