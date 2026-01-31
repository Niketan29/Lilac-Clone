import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const specialties = [
    {
        title: "Anxiety & Panic",
        description:
            "Quiet the racing thoughts and find your center. We work together to understand the root of your anxiety and build practical tools for calm.",
        image: "/images/specialty_anxiety_1769857441900.png",
    },
    {
        title: "Trauma & Healing",
        description:
            "Process past wounds safely. Using EMDR and body-oriented techniques, we gently release the grip of trauma so you can move forward.",
        image: "/images/specialty_relationships_1769857456312.png", // Using the balanced stones image for trauma/healing balance
    },
    {
        title: "Professional Burnout",
        description:
            "Rediscover your spark without sacrificing your success. Learn to set boundaries and prioritize your well-being in a high-pressure world.",
        image: "/images/specialty_burnout.png", // Verify this exists or handle missing
    },
];

export default function Specialties() {
    return (
        <section id="specialties" className="py-24 px-6 md:px-12 bg-secondary/30">
            <div className="max-w-7xl mx-auto">
                <RevealOnScroll>
                    <h2 className="text-3xl md:text-4xl font-serif text-primary text-center mb-16">
                        Areas of Focus
                    </h2>
                </RevealOnScroll>

                <div className="grid md:grid-cols-3 gap-12">
                    {specialties.map((item, index) => (
                        <RevealOnScroll key={index} delay={index * 100} className="h-full">
                            <div className="flex flex-col items-center text-center space-y-6 group h-full">
                                <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-500 border-4 border-white">
                                    {/* Note: I'm using a placeholder if the specific image generation failed or using the ones I have */}
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <h3 className="text-2xl font-serif text-primary">
                                    {item.title}
                                </h3>
                                <p className="text-text/70 leading-relaxed max-w-xs">
                                    {item.description}
                                </p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
