import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";

export default function Hero() {
    return (
        <section className="relative px-6 md:px-12 py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <RevealOnScroll>
                <div className="order-2 md:order-1 space-y-8">
                    <h1 className="text-4xl md:text-6xl font-serif text-primary leading-tight">
                        Reclaim Your <br />
                        <span className="italic text-accent">Peace</span> in <br />
                        Santa Monica.
                    </h1>
                    <p className="text-lg md:text-xl text-text/80 font-light max-w-md leading-relaxed">
                        Therapy for high-achieving individuals who feel functional on the
                        outside, but exhausted on the inside.
                    </p>
                    <div className="pt-4">
                        <Link
                            href="#contact"
                            className="inline-block px-8 py-4 bg-primary text-white font-sans uppercase tracking-widest text-sm rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Connect with me →
                        </Link>
                    </div>
                </div>
            </RevealOnScroll>

            {/* Image Content */}
            <RevealOnScroll delay={200}>
                <div className="order-1 md:order-2 relative flex justify-center">
                    <div className="relative w-full max-w-md aspect-[4/5] rounded-[10rem] overflow-hidden shadow-2xl border-4 border-white">
                        <Image
                            src="/images/hero_coastal_1769857372238.png"
                            alt="Calming coastal view at sunrise"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}
