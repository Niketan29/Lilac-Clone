import RevealOnScroll from "./RevealOnScroll";
import { Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-text text-secondary py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                <RevealOnScroll>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif text-white">
                            Dr. Maya Reynolds
                        </h3>
                        <p className="opacity-70 text-sm">Licensed Clinical Psychologist</p>
                        <p className="opacity-70 text-sm">PsyD. #123456</p>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={100}>
                    <div className="space-y-4">
                        <h4 className="text-lg font-serif text-white uppercase tracking-widest">
                            Location
                        </h4>
                        <p className="opacity-70 text-sm">
                            123th Street 45 W<br />
                            Santa Monica, CA 90401
                        </p>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={200}>
                    <div className="space-y-4">
                        <h4 className="text-lg font-serif text-white uppercase tracking-widest">
                            Contact
                        </h4>
                        <p className="opacity-70 text-sm">
                            <a
                                href="mailto:hello@drmayareynolds.com"
                                className="hover:text-accent transition-colors"
                            >
                                hello@drmayareynolds.com
                            </a>
                            <br />
                            <a
                                href="tel:+15555555555"
                                className="hover:text-accent transition-colors"
                            >
                                (555) 555-5555
                            </a>
                        </p>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={300}>
                    <div className="space-y-4">
                        <h4 className="text-lg font-serif text-white uppercase tracking-widest">
                            Connect
                        </h4>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors cursor-pointer text-white"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors cursor-pointer text-white"
                                aria-label="Twitter"
                            >
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-xs opacity-50">
                &copy; {new Date().getFullYear()} Dr. Maya Reynolds. All rights
                reserved.
            </div>
        </footer>
    );
}
