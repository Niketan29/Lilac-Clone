import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default function Office() {
    return (
        <section id="office" className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto space-y-12">
                <RevealOnScroll>
                    <div className="text-center space-y-4 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">
                            A Sanctuary for Healing
                        </h2>
                        <p className="text-text/80 text-lg font-light">
                            My Santa Monica office is designed to be a safe, quiet haven from
                            the noise of the city. With natural light and a calming coastal
                            atmosphere, it’s a space where you can truly exhale.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <RevealOnScroll delay={100} className="h-full">
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/office1.jpeg"
                                alt="Wide view of Dr. Reynolds' therapy office"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </RevealOnScroll>
                    <div className="grid grid-rows-2 gap-8 h-full">
                        <RevealOnScroll delay={200} className="h-full">
                            <div className="bg-secondary/50 p-8 rounded-2xl flex flex-col justify-center space-y-4 h-full">
                                <h3 className="text-2xl font-serif text-primary">
                                    In-Person & Virtual
                                </h3>
                                <p className="text-text/80">
                                    Located at{" "}
                                    <strong>123th Street 45 W, Santa Monica, CA 90401</strong>. I
                                    also offer secure telehealth sessions for clients across
                                    California for your convenience.
                                </p>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll delay={300} className="h-full">
                            <div className="relative h-full min-h-[200px] rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/office2.jpeg"
                                    alt="Calming atmosphere detail"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                                    <span className="text-white font-serif text-2xl italic">
                                        Safe. Private. Yours.
                                    </span>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
}
