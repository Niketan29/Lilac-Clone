import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";

export default function Mission() {
    return (
        <section id="about" className="py-20 px-6 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                {/* Image */}
                <RevealOnScroll>
                    <div className="relative">
                        <div className="aspect-[4/5] relative bg-secondary rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/images/mission_flatlay_1769857427632.png"
                                alt="Mindful moment with tea and journal"
                                fill
                                className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                            />
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Text */}
                <RevealOnScroll delay={200}>
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            You don’t have to carry it all alone.
                        </h2>
                        <div className="space-y-6 text-text/80 font-light leading-relaxed text-lg">
                            <p>
                                Life can feel like a balancing act where you’re constantly keeping
                                everything together for everyone else. But beneath the surface,
                                the anxiety, stress, or past trauma might be weighing you down.
                            </p>
                            <p>
                                I’m Dr. Maya Reynolds. I offer a warm, collaborative space where
                                we can untangle the overwhelm. My approach blends evidence-based
                                methods like CBT and EMDR with mindfulness to help you not just
                                cope, but truly heal.
                            </p>
                        </div>
                        <Link
                            href="#contact"
                            className="inline-block border-b border-primary text-primary uppercase tracking-widest text-sm pb-1 hover:text-accent hover:border-accent transition-colors"
                        >
                            Get to know me &rarr;
                        </Link>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
