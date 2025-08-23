'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Resource from '../../components/Resource';
import { resources } from '../../config/resources';

export default function Resources() {
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
                        Access our team resources.
                    </p>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-0 px-4 sm:px-6 lg:px-8 mb-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resources.map((resource, index) => (
                            <Resource 
                                key={index}
                                {...resource}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
