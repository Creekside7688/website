'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Resources() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-[#1e2330] text-white font-montserrat">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-5 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white title-font">
                        RESOURCES
                    </h1>
                    <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                        Access our technical documentation, training materials, and team resources.
                    </p>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-0 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-200 bg-[#2a3441]">
                            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-2xl">📋</span>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Technical Documentation</h3>
                            <p className="text-gray-300 mb-6">Access our robot designs, CAD files, and technical specifications.</p>
                            <button className="w-full px-6 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded font-semibold transition-colors duration-200">
                                View Documentation
                            </button>
                        </div>
                        
                        <div className="p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-200 bg-[#2a3441]">
                            <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-2xl">📖</span>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Team Handbook</h3>
                            <p className="text-gray-300 mb-6">Learn about our team structure, rules, and expectations.</p>
                            <button className="w-full px-6 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded font-semibold transition-colors duration-200">
                                Download PDF
                            </button>
                        </div>
                        
                        <div className="p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-200 bg-[#2a3441]">
                            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-2xl">🎓</span>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Training Materials</h3>
                            <p className="text-gray-300 mb-6">Educational resources for new team members and mentors.</p>
                            <button className="w-full px-6 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded font-semibold transition-colors duration-200">
                                Access Training
                            </button>
                        </div>

                        <div className="p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-200 bg-[#2a3441]">
                            <div className="w-16 h-16 bg-yellow-600 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-2xl">⚙️</span>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">CAD Files</h3>
                            <p className="text-gray-300 mb-6">Download our robot CAD models and assembly instructions.</p>
                            <button className="w-full px-6 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded font-semibold transition-colors duration-200">
                                Download CAD
                            </button>
                        </div>

                        <div className="p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-200 bg-[#2a3441]">
                            <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-2xl">💻</span>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Code Repository</h3>
                            <p className="text-gray-300 mb-6">Access our robot control code and software documentation.</p>
                            <button className="w-full px-6 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded font-semibold transition-colors duration-200">
                                View Code
                            </button>
                        </div>

                        <div className="p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-200 bg-[#2a3441]">
                            <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-2xl">📊</span>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Competition Data</h3>
                            <p className="text-gray-300 mb-6">Historical performance data and strategy analysis.</p>
                            <button className="w-full px-6 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded font-semibold transition-colors duration-200">
                                View Data
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
