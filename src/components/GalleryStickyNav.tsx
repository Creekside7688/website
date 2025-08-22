'use client';

import { useState, useEffect } from 'react';

interface GalleryImage {
    src: string;
    alt: string;
    category: string;
    subfolder: string;
    filename: string;
    fullSizeSrc: string;
}

interface SubfolderData {
    name: string;
    images: GalleryImage[];
    count: number;
}

interface YearData {
    id: string;
    label: string;
    subfolders: SubfolderData[];
    rootImages?: GalleryImage[];
    totalImages: number;
}

interface GalleryStickyNavProps {
    yearsData: YearData[];
    activeYear: string;
    activeSection: string | null;
    onYearChange: (yearId: string) => void;
    onScrollToSection: (sectionId: string) => void;
}

export default function GalleryStickyNav({ 
    yearsData, 
    activeYear, 
    activeSection,
    onYearChange, 
    onScrollToSection 
}: GalleryStickyNavProps) {
    const [isSticky, setIsSticky] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const navbarHeight = 80; // Approximate height of main navbar
            const heroHeight = 280; // Hero section + some buffer
            
            // Start sticking after hero section
            setIsSticky(scrollY > heroHeight);
            
            // Show back to top button after scrolling down
            setShowBackToTop(scrollY > 280);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const activeYearData = yearsData.find(year => year.id === activeYear);

    return (
        <>
            {/* Always visible navigation (for layout stability) */}
            <div className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-3">
                        {/* Year Tabs */}
                        <div className="flex flex-wrap justify-center gap-2 mb-3">
                            {yearsData.map((year) => (
                                <button
                                    key={year.id}
                                    onClick={() => onYearChange(year.id)}
                                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 text-sm ${
                                        activeYear === year.id
                                            ? 'bg-white text-gray-900 shadow-lg'
                                            : 'bg-[#2a3441] text-gray-300 hover:bg-[#3a4451] hover:scale-105'
                                    }`}
                                >
                                    <span>{year.label}</span>
                                    {year.totalImages > 0 && (
                                        <span className={`px-2 py-1 rounded-full text-xs ${
                                            activeYear === year.id 
                                                ? 'bg-gray-900 text-white' 
                                                : 'bg-gray-600 text-gray-200'
                                        }`}>
                                            {year.totalImages}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Category Navigation */}
                        {activeYearData && (
                            <div className="flex items-center justify-center gap-6">
                                {/* Root Images Link */}
                                {activeYearData.rootImages && activeYearData.rootImages.length > 0 && (
                                    <button
                                        onClick={() => onScrollToSection('root')}
                                        className={`transition-all duration-200 text-xs font-medium border-b-2 pb-1 ${
                                            activeSection === 'root'
                                                ? 'text-white border-white'
                                                : 'text-gray-300 hover:text-white border-transparent hover:border-white'
                                        }`}
                                    >
                                        FEATURED ({activeYearData.rootImages.length})
                                    </button>
                                )}

                                {/* Subfolder Links */}
                                {activeYearData.subfolders.map((subfolder) => (
                                    <button
                                        key={subfolder.name}
                                        onClick={() => onScrollToSection(subfolder.name)}
                                        className={`transition-all duration-200 text-xs font-medium border-b-2 pb-1 ${
                                            activeSection === subfolder.name
                                                ? 'text-white border-white'
                                                : 'text-gray-300 hover:text-white border-transparent hover:border-white'
                                        }`}
                                    >
                                        {subfolder.name} ({subfolder.count})
                                    </button>
                                ))}

                                {/* Back to Top Button */}
                                {showBackToTop && (
                                    <button
                                        onClick={scrollToTop}
                                        className="text-gray-300 hover:text-white transition-all duration-200 text-xs font-medium border-b-2 border-transparent hover:border-white pb-1 flex items-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                        Top
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Sticky navigation overlay */}
            <div className={`transition-all duration-500 ease-in-out ${
                isSticky 
                    ? 'fixed top-16 left-0 right-0 z-40 bg-[#1e2330]/95 backdrop-blur-sm border-b border-gray-700 shadow-lg opacity-100' 
                    : 'fixed top-16 left-0 right-0 z-40 opacity-0 pointer-events-none'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-3">
                        {/* Year Tabs */}
                        <div className="flex flex-wrap justify-center gap-2 mb-3">
                            {yearsData.map((year) => (
                                <button
                                    key={year.id}
                                    onClick={() => onYearChange(year.id)}
                                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 text-sm ${
                                        activeYear === year.id
                                            ? 'bg-white text-gray-900 shadow-lg'
                                            : 'bg-[#2a3441] text-gray-300 hover:bg-[#3a4451] hover:scale-105'
                                    }`}
                                >
                                    <span>{year.label}</span>
                                    {year.totalImages > 0 && (
                                        <span className={`px-2 py-1 rounded-full text-xs ${
                                            activeYear === year.id 
                                                ? 'bg-gray-900 text-white' 
                                                : 'bg-gray-600 text-gray-200'
                                        }`}>
                                            {year.totalImages}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Category Navigation */}
                        {activeYearData && (
                            <div className="flex items-center justify-center gap-6">
                                {/* Root Images Link */}
                                {activeYearData.rootImages && activeYearData.rootImages.length > 0 && (
                                    <button
                                        onClick={() => onScrollToSection('root')}
                                        className={`transition-all duration-200 text-xs font-medium border-b-2 pb-1 ${
                                            activeSection === 'root'
                                                ? 'text-white border-white'
                                                : 'text-gray-300 hover:text-white border-transparent hover:border-white'
                                        }`}
                                    >
                                        Featured ({activeYearData.rootImages.length})
                                    </button>
                                )}

                                {/* Subfolder Links */}
                                {activeYearData.subfolders.map((subfolder) => (
                                    <button
                                        key={subfolder.name}
                                        onClick={() => onScrollToSection(subfolder.name)}
                                        className={`transition-all duration-200 text-xs font-medium border-b-2 pb-1 ${
                                            activeSection === subfolder.name
                                                ? 'text-white border-white'
                                                : 'text-gray-300 hover:text-white border-transparent hover:border-white'
                                        }`}
                                    >
                                        {subfolder.name} ({subfolder.count})
                                    </button>
                                ))}

                                {/* Back to Top Button */}
                                {showBackToTop && (
                                    <button
                                        onClick={scrollToTop}
                                        className="text-gray-300 hover:text-white transition-all duration-200 text-xs font-medium border-b-2 border-transparent hover:border-white pb-1 flex items-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                        Top
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
