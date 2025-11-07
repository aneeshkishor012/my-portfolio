"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     setStatus(null);

    //     try {
    //         const res = await fetch("/api/contact", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(form),
    //         });

    //         const data = await res.json();
    //         if (data.success) {
    //             setStatus("✅ Message sent successfully!");
    //             setForm({ name: "", email: "", message: "" });
    //         } else {
    //             setStatus("❌ Failed to send message.");
    //         }
    //     } catch {
    //         setStatus("⚠️ Something went wrong. Try again later.");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            if (result.text === "OK") {
                setStatus("✅ Message sent successfully!");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("❌ Failed to send message.");
            }
        } catch (error) {
            console.error("Email send failed:", error);
            setStatus("⚠️ Something went wrong. Try again later.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <section id="contact" className="py-16 text-center bg-gray-50 dark:bg-gray-800/75">
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
