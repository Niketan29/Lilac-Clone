"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

const faqs = [
    {
        question: "Do you accept insurance?",
        answer:
            "I am an out-of-network provider. This means I do not bill insurance directly. However, I can provide you with a monthly Superbill that you can submit to your insurance company for potential reimbursement. Please check with your provider about your out-of-network mental health benefits.",
    },
    {
        question: "How long are sessions?",
        answer:
            "Standard individual therapy sessions are 50 minutes. Intake sessions (our first meeting) happen to be 60-75 minutes to allow us to gather a comprehensive history and set goals for our work together.",
    },
    {
        question: "Do you offer remote therapy?",
        answer:
            "Yes, I offer secure, HIPAA-compliant video sessions for clients located anywhere in California. This allows for flexibility and comfort, especially for busy professionals.",
    },
    {
        question: "What is your cancellation policy?",
        answer:
            "I request a 24-hour notice for cancellations. Sessions cancelled with less than 24 hours' notice will be charged the full session fee, as that time was reserved specifically for you.",
    },
    {
        question: "How do I know if we are a good fit?",
        answer:
            "I offer a complimentary 15-minute phone consultation. This gives us a chance to briefly discuss what brings you to therapy and see if my approach aligns with your needs.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 px-6 md:px-12 bg-secondary/30">
            <div className="max-w-3xl mx-auto">
                <RevealOnScroll>
                    <h2 className="text-3xl md:text-4xl font-serif text-primary text-center mb-16">
                        Frequently Asked Questions
                    </h2>
                </RevealOnScroll>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <RevealOnScroll key={index} delay={index * 50}>
                            <div className="border border-primary/10 rounded-lg bg-white overflow-hidden transition-all duration-300 hover:shadow-md">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                                >
                                    <span
                                        className={`text-lg font-serif ${openIndex === index
                                                ? "text-primary bg-primary/5 px-2 rounded -ml-2"
                                                : "text-text"
                                            }`}
                                    >
                                        {faq.question}
                                    </span>
                                    <span
                                        className={`transform transition-transform duration-300 text-primary ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                    >
                                        ▼
                                    </span>
                                </button>
                                <div
                                    className={`transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="p-6 pt-0 text-text/80 leading-relaxed font-light">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
