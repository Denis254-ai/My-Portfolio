"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // Your specific Formspree Endpoint
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlggdnnv";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Talk</h2>
          <p className="mt-4 text-muted-foreground">
            Ready to build something extraordinary? Send me a message and let's get started.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-green-500/10 p-8 text-center border border-green-500/20"
            >
              <h3 className="text-2xl font-bold text-green-500">Message Received!</h3>
              <p className="text-muted-foreground mt-2">I'll get back to you via WhatsApp or Email shortly.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-semibold underline hover:text-green-400"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border bg-background px-4 py-3 focus:ring-2 focus:ring-primary"
                  placeholder="Brian Kamau"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border bg-background px-4 py-3 focus:ring-2 focus:ring-primary"
                  placeholder="brian@example.com"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border bg-background px-4 py-3 focus:ring-2 focus:ring-primary"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-lg bg-primary py-4 font-bold text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>

              {status === "error" && (
                <p className="text-red-500 text-center text-sm">Something went wrong. Please check your connection.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
