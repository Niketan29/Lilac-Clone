import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default function ProfessionalBackground() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                {/* Image Side */}
                <RevealOnScroll>
                    <div className="relative order-2 md:order-1">
                        <div className="aspect-[3/4] max-w-md mx-auto relative rounded-t-[10rem] overflow-hidden shadow-xl border-4 border-secondary">
                            <Image
                                src="/images/Dr. Maya Reynolds.png"
                                alt="Dr. Maya Reynolds"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-accent/30 rounded-t-[10rem] hidden md:block"></div>
                    </div>
                </RevealOnScroll>

                {/* Text Side */}
                <RevealOnScroll delay={200}>
                    <div className="space-y-8 order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            About Dr. Maya Reynolds, PsyD
                        </h2>

                        <div className="space-y-4 text-text/80 leading-relaxed text-md font-light">
                            <p>
                                I’m a licensed clinical psychologist based in Santa Monica,
                                California, offering therapy for adults who feel overwhelmed by
                                anxiety, stress, or the lingering effects of past experiences.
                                Many of the people I work with are high-achieving, thoughtful,
                                and self-aware—but internally feel exhausted, stuck in
                                overthinking, or emotionally on edge.
                            </p>
                            <p>
                                My work often focuses on anxiety, panic, trauma, and burnout.
                                Clients frequently come to me feeling “functional” on the
                                outside while quietly struggling with constant worry, tension in
                                their body, difficulty sleeping, or a sense that they’re always
                                bracing for something to go wrong. Others are navigating the
                                impact of earlier life experiences that continue to affect their
                                relationships, confidence, or sense of safety.
                            </p>
                            <p>
                                I take a warm, collaborative, and grounded approach to therapy.
                                Sessions are structured enough to feel supportive, while still
                                leaving space for reflection and depth. I integrate
                                evidence-based methods such as cognitive-behavioral therapy
                                (CBT), EMDR, mindfulness-based practices, and body-oriented
                                techniques to help clients understand both the emotional and
                                physiological sides of what they’re experiencing.
                            </p>
                            <p>
                                Trauma work is an important part of my practice. I work with
                                adults who have experienced single-incident trauma as well as
                                more complex, long-standing patterns that may stem from
                                childhood, relationships, or chronic stress. My approach is
                                paced carefully, with an emphasis on safety, stabilization, and
                                helping clients feel more regulated in their daily lives—not
                                just during sessions.
                            </p>
                            <p>
                                In addition to trauma and anxiety, I frequently support clients
                                dealing with professional burnout, perfectionism, and high
                                internal pressure. Many are entrepreneurs, creatives, or
                                professionals who feel disconnected from themselves after years
                                of pushing through stress. Therapy can become a space to slow
                                down, reconnect, and develop more sustainable ways of living and
                                working.
                            </p>
                            <p>
                                I offer both in-person therapy from my Santa Monica office and
                                secure telehealth sessions for clients located in California. My
                                office is a quiet, private space designed to feel calm and
                                grounding, with natural light and a comfortable, uncluttered
                                environment. Clients often share that the space itself helps
                                them feel more at ease when they arrive.
                            </p>
                            <p>
                                I believe therapy works best when clients feel respected,
                                understood, and actively involved in the process. My goal is not
                                just symptom relief, but helping clients develop insight,
                                resilience, and a stronger relationship with themselves over
                                time.
                            </p>
                            <p>
                                If you’re looking for a therapist who combines practical tools
                                with depth-oriented work—and who understands the realities of
                                living and working in a fast-paced environment—I may be a good
                                fit.
                            </p>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
