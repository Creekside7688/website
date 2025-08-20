'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/MainPage/Hero';
import About from '../components/MainPage/About';
import EventsAchievements from '../components/MainPage/EventsAchievements';
import Sponsors from '../components/MainPage/Sponsors';
import Footer from '../components/Footer';

export default function Home() {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Handle hash navigation
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash) {
                const element = document.getElementById(hash.substring(1));
                if (element) {
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                }
            }
        };

        // Handle initial hash
        handleHashChange();

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveSection(sectionId);
    };

    return (
        <div className="min-h-screen bg-[#1e2330] text-white font-montserrat">
            <Navbar />
            <Hero />
            <About />
            <EventsAchievements />
            <Sponsors />
            <Footer />
        </div>
    );
}
