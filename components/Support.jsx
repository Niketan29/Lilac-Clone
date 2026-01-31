import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";

export default function Support() {
    return (
        <section className="py-24 px-6 md:px-12 bg-primary text-white text-center">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-4xl font-serif">
                        Growth starts with a single conversation.
                    </h2>
                    <p className="text-lg md:text-xl font-light opacity-90 leading-relaxed">
                        Whether you’re dealing with panic, trauma, or professional burnout,
                        finding the right support is the first step. Let’s work together to
                        help you build a life that feels as good as it looks.
                    </p>
                    <div className="pt-8">
                        <Link
                            href="#contact"
                            className="inline-block px-10 py-4 bg-accent text-white font-sans uppercase tracking-widest text-sm rounded-full hover:bg-white hover:text-primary transition-all shadow-lg"
                        >
                            Schedule a Consultation
                        </Link>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}
