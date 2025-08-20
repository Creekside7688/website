import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
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
    viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${montserrat.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
