import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Creekside Robotics - Team 7688",
    description: "Official website of Creekside Robotics (Team 7688), a high school FIRST Robotics Competition team dedicated to innovation, teamwork, and STEM education.",
    keywords: "FIRST Robotics, FRC, robotics, STEM, high school robotics, Creekside Robotics, Team 7688",
    authors: [{ name: "Creekside Robotics" }],
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">

            {/* <!-- Google tag (gtag.js) --> */}
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1JVHQV009R"></Script>
            <Script id="google-analytics">{`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-1JVHQV009R');
            `}</Script>

            <body
                className={`${montserrat.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
