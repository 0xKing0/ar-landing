"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        privacy: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        // Basic validation
        if (!formData.privacy) {
            setSubmitStatus({
                type: "error",
                message: "Please agree to the privacy policy to continue.",
            });
            setIsSubmitting(false);
            return;
        }

        try {
            const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://airsoft.infrasync.tech/api";
            const response = await fetch(`${apiBaseUrl}/contact-form/submit`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({
                    type: "success",
                    message:
                        "Message deployed successfully! We'll respond within 24-48 hours.",
                });
                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                    privacy: false,
                });
            } else {
                // Handle API error response format: { error: { message: "..." } }
                const errorMessage =
                    data?.error?.message ||
                    data?.message ||
                    "Failed to send message. Please try again.";
                setSubmitStatus({
                    type: "error",
                    message: errorMessage,
                });
            }
        } catch {
            setSubmitStatus({
                type: "error",
                message:
                    "Network error. Please check your connection and try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-dark-main text-white selection:bg-military-green selection:text-black font-rajdhani">
            <Header />

            <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-military-green/10 border border-military-green/30 mb-6">
                            <div className="w-1.5 h-1.5 bg-military-green rounded-full"></div>
                            <span className="text-xs uppercase tracking-widest text-military-green">
                                Get in Touch
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter font-orbitron mb-4">
                            Contact <span className="text-military-green">Command</span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Have questions about Milsy? Need support or want to partner with us?
                            Our tactical support team is standing by.
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                            {/* Contact Cards */}
                            <div className="bg-white/5 border border-white/10 p-8 hover:border-military-green transition-all duration-300">
                                <div className="w-12 h-12 bg-military-green flex items-center justify-center mb-6">
                                    <Mail size={20} className="text-black" />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-wider font-orbitron text-white mb-3">
                                    Email Us
                                </h3>
                                <p className="text-gray-400 mb-4 text-sm">
                                    For general inquiries and support
                                </p>
                                <a
                                    href="mailto:partners@infrasync.tech"
                                    className="text-military-green hover:text-military-green-light transition-colors break-all text-sm"
                                >
                                    partners@infrasync.tech
                                </a>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-8 hover:border-military-green transition-all duration-300">
                                <div className="w-12 h-12 bg-military-green flex items-center justify-center mb-6">
                                    <MapPin size={20} className="text-black" />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-wider font-orbitron text-white mb-3">
                                    Headquarters
                                </h3>
                                <p className="text-gray-400 mb-4 text-sm">
                                    Visit our main office
                                </p>
                                <address className="not-italic text-gray-300 text-sm">
                                    Pınarbahaşı Mah. Teknokent<br />
                                    Antalya, 07100<br />
                                    Turkey
                                </address>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-8 hover:border-military-green transition-all duration-300">
                                <div className="w-12 h-12 bg-military-green flex items-center justify-center mb-6">
                                    <MessageSquare size={20} className="text-black" />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-wider font-orbitron text-white mb-3">
                                    Support
                                </h3>
                                <p className="text-gray-400 mb-4 text-sm">
                                    Need help with the app?
                                </p>
                                <p className="text-gray-300 text-sm">
                                    Use the in-app support feature or email us with your concerns.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="bg-gradient-to-b from-[#0d1410] to-black border border-white/10 p-8 md:p-12">
                        <div className="max-w-3xl mx-auto">
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold uppercase tracking-tighter font-orbitron text-white mb-4 flex items-center gap-3">
                                    <span className="w-2 h-6 bg-military-green block"></span>
                                    Send a Message
                                </h2>
                                <p className="text-gray-400 text-sm">
                                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                                </p>
                            </div>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {submitStatus.type && (
                                    <div
                                        className={`p-4 border ${
                                            submitStatus.type === "success"
                                                ? "bg-military-green/10 border-military-green/30 text-military-green"
                                                : "bg-red-900/10 border-red-500/30 text-red-400"
                                        }`}
                                    >
                                        <p className="text-sm">{submitStatus.message}</p>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm uppercase tracking-wider text-gray-300 mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-dark-main border border-military-green/30 text-white placeholder-gray-500 focus:border-military-green focus:outline-none transition-colors"
                                            placeholder="Your name"
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm uppercase tracking-wider text-gray-300 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-dark-main border border-military-green/30 text-white placeholder-gray-500 focus:border-military-green focus:outline-none transition-colors"
                                            placeholder="your.email@example.com"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm uppercase tracking-wider text-gray-300 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-dark-main border border-military-green/30 text-white placeholder-gray-500 focus:border-military-green focus:outline-none transition-colors"
                                        placeholder="What's this about?"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm uppercase tracking-wider text-gray-300 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-dark-main border border-military-green/30 text-white placeholder-gray-500 focus:border-military-green focus:outline-none transition-colors resize-none"
                                        placeholder="Tell us more about your inquiry..."
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        id="privacy"
                                        name="privacy"
                                        required
                                        checked={formData.privacy}
                                        onChange={handleChange}
                                        className="mt-1 w-4 h-4 bg-dark-main border-military-green/30 text-military-green focus:ring-military-green focus:ring-offset-0"
                                        disabled={isSubmitting}
                                    />
                                    <label htmlFor="privacy" className="text-sm text-gray-400">
                                        I agree to the processing of my personal data in accordance with the{" "}
                                        <a href="/privacy-policy" className="text-military-green hover:text-military-green-light transition-colors underline">
                                            Privacy Policy
                                        </a>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full md:w-auto px-8 py-3 bg-military-green hover:bg-military-green-light text-black font-bold uppercase tracking-wide text-sm transition-colors flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                    {isSubmitting ? "Deploying..." : "Deploy Message"}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Additional Info Section */}
                    <div className="mt-12 border-l-4 border-military-green pl-6">
                        <h3 className="text-xl font-bold uppercase tracking-wider font-orbitron text-white mb-3">
                            Response Time
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Our team typically responds to all inquiries within 24-48 hours during business days.
                            For urgent matters, please mark your message as &quot;Urgent&quot; in the subject line.
                        </p>
                        <p className="text-gray-400 text-sm">
                            For immediate technical support, check out our in-app help center or visit our{" "}
                            <a href="/terms-and-conditions" className="text-military-green hover:text-military-green-light transition-colors underline">
                                Terms and Conditions
                            </a>{" "}
                            for detailed information about app usage.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
