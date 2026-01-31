import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

const lato = Lato({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    variable: "--font-lato",
});

export const metadata = {
    title: "Dr. Maya Reynolds | Clinical Psychologist in Santa Monica",
    description:
        "Licensed Clinical Psychologist offering therapy for anxiety, trauma, and burnout in Santa Monica, CA. Warm, collaborative, and evidence-based care.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${playfair.variable} ${lato.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
