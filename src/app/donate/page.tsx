'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import SponsorList from '../../components/Sponsors/SponsorList';
import Footer from '../../components/Footer';

export default function Donate() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <div className="min-h-screen bg-[#1e2330] text-white font-montserrat">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-5 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white title-font">
                        SUPPORT OUR MISSION
                    </h1>
                    <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                        Join our mission to inspire the next generation of engineers and innovators through robotics education.
                    </p>
                </div>
            </section>

            {/* Current Sponsors */}
            <section className="py-0 px-4 sm:px-6 lg:px-8 bg-[#1e2330]">
                <div className="max-w-7xl mx-auto">
                    <SponsorList title="Current Sponsors" />
                </div>
            </section>

            {/* Sponsorship Information */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6 text-white">Sponsorship Opportunities</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        We offer various sponsorship tiers with different benefits and recognition levels. 
                        Contact us to learn more about our sponsorship packages and how you can support our team.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={() => window.open('/packageshortened.pdf', '_blank')}
                            className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 rounded font-semibold text-lg transition-colors duration-200"
                        >
                            Download Sponsorship Packet
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
