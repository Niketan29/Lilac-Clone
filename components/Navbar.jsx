"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isBlog = pathname === "/blog";

    return (
        <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center bg-[var(--background)] sticky top-0 z-50">
            <Link
                href="/"
                className="text-xl md:text-2xl font-serif tracking-wide text-primary z-50"
            >
                Dr. Maya Reynolds
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center text-sm font-sans tracking-widest uppercase text-text/80">
                {isBlog ? (
                    <>
                        <Link href="/" className="hover:text-primary transition-colors">
                            Back Home
                        </Link>
                        <Link
                            href="/#contact"
                            className="px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-full"
                        >
                            Book a Session
                        </Link>
                    </>
                ) : (
                    <>
                        <Link href="#about" className="hover:text-primary transition-colors">
                            About
                        </Link>
                        <Link
                            href="#specialties"
                            className="hover:text-primary transition-colors"
                        >
                            Specialties
                        </Link>
                        <Link href="#office" className="hover:text-primary transition-colors">
                            Our Office
                        </Link>
                        <Link href="/blog" className="hover:text-primary transition-colors">
                            Blog
                        </Link>
                        <Link href="#faq" className="hover:text-primary transition-colors">
                            FAQ
                        </Link>
                        <Link href="#contact" className="hover:text-primary transition-colors">
                            Contact
                        </Link>
                        <Link
                            href="#contact"
                            className="px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-full"
                        >
                            Book a Session
                        </Link>
                    </>
                )}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden z-50 text-primary"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <div className="space-y-1.5">
                    <span
                        className={`block w-6 h-0.5 bg-current transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-current transition-opacity ${isOpen ? "opacity-0" : ""
                            }`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-current transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    ></span>
                </div>
            </button>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-[var(--background)] flex flex-col justify-center items-center gap-8 text-xl font-serif text-primary transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                {isBlog ? (
                    <>
                        <Link href="/" onClick={() => setIsOpen(false)}>
                            Back Home
                        </Link>
                        <Link
                            href="/#contact"
                            onClick={() => setIsOpen(false)}
                            className="px-8 py-3 bg-primary text-white rounded-full mt-4"
                        >
                            Book a Session
                        </Link>
                    </>
                ) : (
                    <>
                        <Link href="#about" onClick={() => setIsOpen(false)}>
                            About
                        </Link>
                        <Link href="#specialties" onClick={() => setIsOpen(false)}>
                            Specialties
                        </Link>
                        <Link href="#office" onClick={() => setIsOpen(false)}>
                            Our Office
                        </Link>
                        <Link href="/blog" onClick={() => setIsOpen(false)}>
                            Blog
                        </Link>
                        <Link href="#faq" onClick={() => setIsOpen(false)}>
                            FAQ
                        </Link>
                        <Link href="#contact" onClick={() => setIsOpen(false)}>
                            Contact
                        </Link>
                        <Link
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="px-8 py-3 bg-primary text-white rounded-full mt-4"
                        >
                            Book a Session
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}
