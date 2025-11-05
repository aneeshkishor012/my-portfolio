"use client";
import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (data.success) {
                setStatus("✅ Message sent successfully!");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("❌ Failed to send message.");
            }
        } catch {
            setStatus("⚠️ Something went wrong. Try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-16 text-center bg-gray-50 dark:bg-gray-800">
            <h2 className="text-3xl font-bold mb-8">Contact Me</h2>

            <form
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto flex flex-col gap-4 text-left bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="p-3 rounded border dark:border-gray-700 dark:bg-gray-800"
                    required
                />

                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="p-3 rounded border dark:border-gray-700 dark:bg-gray-800"
                    required
                />

                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="p-3 rounded border dark:border-gray-700 dark:bg-gray-800"
                    rows={5}
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded transition"
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>

                {status && <p className="mt-2 text-center text-sm">{status}</p>}
            </form>
        </section>
    );
}
