import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["200", "300", "400", "500", "600", "700"],
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: {
        default: "KajKarma — Software Development, Cloud, AI & DevOps",
        template: "%s | KajKarma",
    },
    description:
        "KajKarma provides custom software development, cloud engineering, AI/ML solutions, DevOps automation, cybersecurity, and IT consulting. We help startups and enterprises accelerate product delivery, reduce costs, and scale securely with expert engineering and strategic guidance.",
    keywords: [
        "software development",
        "cloud engineering",
        "ai services",
        "machine learning",
        "devops",
        "site reliability engineering",
        "cybersecurity",
        "it consulting",
        "web app development",
        "mobile apps",
        "saas development",
    ],
    // authors: [{ name: "KajKarma", url: "https://www.kajkarma.com" }],
    // creator: "KajKarma",
    // publisher: "KajKarma",
    // applicationName: "KajKarma",
    // metadataBase: new URL("https://www.kajkarma.com"),
    // alternates: {
    //     canonical: "/",
    // },
    // openGraph: {
    //     title: "KajKarma — Software Development, Cloud, AI & DevOps",
    //     description:
    //         "Custom software, cloud architecture, AI/ML, DevOps and cybersecurity services to help businesses scale faster and safer.",
    //     url: "https://www.kajkarma.com/",
    //     siteName: "KajKarma",
    //     images: [
    //         {
    //             url: "https://www.kajkarma.com/og-image.jpg",
    //             width: 1200,
    //             height: 630,
    //             alt: "KajKarma — technology services",
    //         },
    //     ],
    //     locale: "en_US",
    //     type: "website",
    // },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "KajKarma — Software, Cloud, AI & DevOps",
    //     description:
    //         "Custom software, cloud engineering, AI/ML, DevOps automation, and cybersecurity services for startups and enterprises.",
    //     images: ["https://www.kajkarma.com/twitter-card.jpg"],
    //     creator: "@KajKarmaTech",
    // },
    // icons: {
    //     icon: "/favicon.ico",
    //     shortcut: "/favicon-16x16.png",
    //     apple: "/apple-touch-icon.png",
    // },
    // themeColor: [
    //     { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    //     { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
    // ],
    // robots: {
    //     index: true,
    //     follow: true,
    //     nocache: false,
    //     googleBot: {
    //         index: true,
    //         follow: true,
    //         "max-video-preview": -1,
    //         "max-image-preview": "large",
    //         "max-snippet": -1,
    //     },
    // },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${inter.className} antialiased `}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
