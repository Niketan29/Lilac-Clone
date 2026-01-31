import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import ProfessionalBackground from "@/components/ProfessionalBackground";
import Specialties from "@/components/Specialties";
import Office from "@/components/Office";
import FAQ from "@/components/FAQ";
import Support from "@/components/Support";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            <Hero />
            <Mission />
            <ProfessionalBackground />
            <Specialties />
            <Office />
            {/* Blog moved to separate page */}
            <FAQ />
            <Support />
            <Footer />
        </main>
    );
}
