import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

const blogPosts = [
    {
        title: "Navigating High-Functioning Anxiety",
        excerpt:
            "Why success doesn't always feel like success, and how to find peace without losing your edge.",
        date: "OCTOBER 12, 2025",
        image: "/images/specialty_anxiety_1769857441900.png", // Reusing relevant images
    },
    {
        title: "The Art of Setting Boundaries",
        excerpt:
            "Learning to say 'no' is an act of self-respect. Practical tips for maintaining healthy relationships.",
        date: "SEPTEMBER 28, 2025",
        image: "/images/specialty_relationships_1769857456312.png",
    },
    {
        title: "Mindfulness for Busy Professionals",
        excerpt:
            "You don't need an hour on a cushion. Simple practices to ground yourself in the middle of a chaotic workday.",
        date: "SEPTEMBER 15, 2025",
        image: "/images/mission_flatlay_1769857427632.png",
    },
    {
        title: "Understanding Trauma Responses",
        excerpt:
            "How past experiences shape our present reactions, and the path to healing the nervous system.",
        date: "AUGUST 30, 2025",
        image: "/images/hero_coastal_1769857372238.png",
    },
    {
        title: "Sleep Hygiene 101",
        excerpt:
            "Rest is the foundation of mental health. Strategies to reclaim your nights and energize your days.",
        date: "AUGUST 14, 2025",
        image: "/images/office_wide_1769857402907.png",
    },
    {
        title: "Journaling for Clarity",
        excerpt:
            "Unlocking your inner dialogue through the written word. A guide for beginners.",
        date: "JULY 22, 2025",
        image: "/images/mission_flatlay_1769857427632.png",
    },
];

export default function BlogPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <section className="pt-32 pb-20 px-6 md:px-12 bg-secondary/30">
                <div className="max-w-7xl mx-auto text-center">
                    <RevealOnScroll>
                        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">
                            Journal
                        </h1>
                        <p className="text-text/70 text-lg font-light max-w-2xl mx-auto">
                            Thoughts, reflections, and resources to support your journey
                            toward holistic well-being.
                        </p>
                    </RevealOnScroll>
                </div>
            </section>

            <section className="py-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {blogPosts.map((post, index) => (
                        <RevealOnScroll key={index} delay={index * 100}>
                            <article className="group cursor-pointer">
                                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6 shadow-sm group-hover:shadow-lg transition-all">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <span className="text-xs font-sans uppercase tracking-widest text-accent">
                                        {post.date}
                                    </span>
                                    <h3 className="text-xl font-serif text-primary group-hover:text-accent transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-text/70 text-sm leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="pt-2">
                                        <span className="text-sm font-medium text-primary border-b border-transparent group-hover:border-primary transition-all">
                                            Read Article
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </RevealOnScroll>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
