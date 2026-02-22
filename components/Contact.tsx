"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto text-gray-400 body-font relative px-4 py-24"
    >
      <div className="flex flex-col md:flex-row gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:w-1/2 w-full opacity-100 rounded-lg overflow-hidden p-5 bg-card dark:bg-[#2d3136] shadow-xl"
        >
          <Image
            src="/assets/contact.png"
            alt="contact"
            className="rounded-md mb-5 object-cover w-full h-52 md:h-64"
            width={600}
            height={400}
            unoptimized
          />
          <h2 className="font-semibold text-foreground text-2xl sm:text-3xl">
            OWAIS ABDULLAH
          </h2>
          <div className="mt-4 space-y-2">
            <div>
              <h2 className="font-semibold text-foreground text-xs">ADDRESS</h2>
              <p className="mt-1 text-foreground">Karachi, Pakistan</p>
            </div>
            <div>
              <h2 className="title-font font-semibold text-foreground text-xs">
                EMAIL
              </h2>
              <Link
                href="mailto:mrowaisabdullah@gmail.com"
                className="text-accent leading-relaxed"
              >
                mrowaisabdullah@gmail.com
              </Link>
            </div>
            <div>
              <h2 className="title-font font-semibold text-foreground text-xs">
                PHONE
              </h2>
              <Link href={"tel:+923262283140"}>
                <p className="leading-relaxed">+923262283140</p>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/2 w-full flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0 font-montserrat"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-foreground text-2xl font-semibold title-font mb-2">
              CONNECT WITH ME
            </h2>
            <p className="text-muted-foreground text-sm">
              Have a project in mind or want to discuss opportunities? Send me a
              message and I&apos;ll get back to you shortly.
            </p>
          </motion.div>

          {/* Status Messages */}
          {submitStatus.type && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg mb-4 ${
                submitStatus.type === "success"
                  ? "bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400"
                  : "bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400"
              }`}
            >
              <p className="text-sm font-medium">
                {submitStatus.type === "success" ? "✓ " : "✕ "}
                {submitStatus.message}
              </p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="relative mb-4"
            >
              <label htmlFor="name" className="leading-7 text-sm text-muted-foreground">
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-card rounded border border-border focus:border-accent focus:ring-1 text-base outline-none text-foreground py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]"
                required
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="relative mb-4"
            >
              <label htmlFor="email" className="leading-7 text-sm text-muted-foreground">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-card rounded border border-border focus:border-accent focus:ring-1 text-base outline-none text-foreground py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]"
                required
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="relative mb-4"
            >
              <label htmlFor="subject" className="leading-7 text-sm text-muted-foreground">
                SUBJECT
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-card rounded border border-border focus:border-accent focus:ring-1 text-base outline-none text-foreground py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]"
                required
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="relative mb-4"
            >
              <label htmlFor="message" className="leading-7 text-sm text-muted-foreground">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-card rounded border border-border focus:border-accent focus:ring-1 h-36 text-base outline-none text-foreground py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]"
                required
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.55 }}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full text-white bg-gradient-to-br from-blue-400 via-accent to-blue-400 from-[0%] via-[10%] border-0 py-4 px-6 focus:outline-none hover:bg-text hover:scale-105 duration-300 ease-out rounded text-md font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
            </motion.button>
          </form>
          <p className="text-xs bg-transparent text-center text-gray-500 mt-5">
            Send me a message, and I&apos;ll contact you shortly.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
