'use client';

export default function Hero() {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section id="home" className="h-screen flex items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-16 lg:gap-32">
                <div className="text-center md:text-left">
                    <div className="mb-8">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white title-font">
                            CREEKSIDE ROBOTICS
                        </h1>
                        <p className="text-lg md:text-lg text-gray-400 mb-8 max-w-3xl mx-auto md:mx-0">
                            THE FIRST ROBOTICS TEAM FROM BURNABY, BC.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <button
                                onClick={scrollToAbout}
                                className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded font-semibold transition-colors duration-200 text-center"
                            >
                                Learn More
                            </button>
                            <a
                                href="/donate"
                                className="px-8 py-3 border border-white text-white hover:bg-white hover:text-gray-900 rounded font-semibold transition-colors duration-200 text-center"
                            >
                                Support Us
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Logo */}
                <div className="hidden lg:flex items-center justify-center mr-16 lg:mr-24">
                    <img 
                        src="/cr-logo.svg" 
                        alt="Creekside Robotics Logo" 
                        className="w-96 h-96 object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
