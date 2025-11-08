"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

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
        <section
            id="contact"
            className="py-20 transition-all duration-500 backdrop-blur-[0.5px] text-center"
            style={{
                backgroundColor: "var(--card-bg)",
                color: "var(--text-color)",
            }}
        >
            <h2
                className="text-3xl font-bold mb-8"
                style={{ color: "var(--text-color)" }}
            >
                Contact Me
            </h2>

            <form
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto flex flex-col gap-4 text-left rounded-xl shadow-md hover:shadow-lg border backdrop-blur-md transition-all duration-300 m-5 p-5"
                style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-color)",
                }}
            >
                {/* ✅ Name */}
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500/60 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                    style={{
                        backgroundColor: "transparent",
                        borderColor: "var(--border-color)",
                        color: "var(--text-color)",
                    }}
                    required
                />

                {/* ✅ Email */}
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500/60 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                    style={{
                        backgroundColor: "transparent",
                        borderColor: "var(--border-color)",
                        color: "var(--text-color)",
                    }}
                    required
                />

                {/* ✅ Message */}
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500/60 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                    style={{
                        backgroundColor: "transparent",
                        borderColor: "var(--border-color)",
                        color: "var(--text-color)",
                    }}
                    rows={5}
                    required
                />

                {/* ✅ Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="font-medium py-2 rounded-lg transition-all duration-300 disabled:opacity-60 hover:shadow-[0_0_10px_var(--accent-color)]"
                    style={{
                        backgroundColor: "var(--accent-color)",
                        color: "#fff",
                    }}
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>

                {/* ✅ Status Message */}
                {status && (
                    <p
                        className="mt-2 text-center text-sm transition-all duration-300"
                        style={{
                            color: status.includes("✅")
                                ? "var(--success-color)"
                                : status.includes("❌")
                                    ? "var(--error-color)"
                                    : "var(--warning-color)",
                        }}
                    >
                        {status}
                    </p>
                )}
            </form>
        </section>
    );
}
