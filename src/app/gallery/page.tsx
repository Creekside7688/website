'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import GalleryStickyNav from '../../components/GalleryStickyNav';
import Image from 'next/image';
import galleryData from '../../config/gallery-data.json';

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
    mediaFolder: string;
    subfolders: SubfolderData[];
    rootImages?: GalleryImage[];
    totalImages: number;
}

export default function Gallery() {
    const [activeYear, setActiveYear] = useState('2024-2025');
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    // Use the static gallery data
    const yearsData: YearData[] = galleryData.years;
    
    // Refs for scroll-to-section functionality
    const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    // Scroll to section function
    const scrollToSection = (sectionId: string) => {
        const element = sectionRefs.current[sectionId];
        if (element) {
            const navbarHeight = 120; // Account for sticky navbar
            const additionalOffset = 80; // Additional space above the element
            const elementPosition = element.offsetTop - navbarHeight - additionalOffset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleImageError = (imageSrc: string) => {
        setImageErrors(prev => new Set(prev).add(imageSrc));
    };

    const openLightbox = (image: GalleryImage) => {
        setSelectedImage(image);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setSelectedImage(null);
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (lightboxOpen) {
                if (e.key === 'Escape') {
                    closeLightbox();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen]);

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const navbarHeight = 120;
            const additionalOffset = 80;
            const threshold = navbarHeight + additionalOffset + 100; // Add some buffer

            // Check which section is currently in view
            let currentSection: string | null = null;
            
            Object.entries(sectionRefs.current).forEach(([sectionId, element]) => {
                if (element) {
                    const elementTop = element.offsetTop - navbarHeight - additionalOffset;
                    const elementBottom = elementTop + element.offsetHeight;
                    
                    if (scrollY >= elementTop - threshold && scrollY < elementBottom) {
                        currentSection = sectionId;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeYear]);

    // Get active year data
    const activeYearData = yearsData.find(year => year.id === activeYear);

    return (
        <div className="min-h-screen bg-[#1e2330] text-white font-montserrat">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-5 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white title-font">
                        GALLERY
                    </h1>
                    <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                        Explore our journey through photos from different seasons and events.
                    </p>
                </div>
            </section>

            {/* Sticky Navigation */}
            <GalleryStickyNav
                yearsData={yearsData}
                activeYear={activeYear}
                activeSection={activeSection}
                onYearChange={setActiveYear}
                onScrollToSection={scrollToSection}
            />

            {/* Gallery Content */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {!activeYearData || (activeYearData.subfolders.length === 0 && (!activeYearData.rootImages || activeYearData.rootImages.length === 0)) ? (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">📷</div>
                            <p className="text-xl text-gray-400 mb-2">No photos found for {activeYearData?.label || activeYear}</p>
                            <p className="text-gray-500">Check back later for updates!</p>
                        </div>
                    ) : (
                        <div className="space-y-16">
                            {/* Root Images (no subfolder header) */}
                            {activeYearData.rootImages && activeYearData.rootImages.length > 0 && (
                                <div 
                                    ref={(el) => { sectionRefs.current['root'] = el; }}
                                    className="space-y-8"
                                >
                                    {/* Section Header */}
                                    <div className="text-center">
                                        <h2 className="text-3xl font-bold text-white title-font mb-2">
                                            FEATURED
                                        </h2>
                                        <p className="text-gray-400">
                                            {activeYearData.rootImages.length} photo{activeYearData.rootImages.length !== 1 ? 's' : ''}
                                        </p>
                                    </div>
                                    
                                    {/* Images Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                        {activeYearData.rootImages.map((image, index) => (
                                            <div 
                                                key={`root-${index}`}
                                                className="group relative aspect-square bg-[#2a3441] rounded-lg overflow-hidden border border-gray-700 hover:border-white transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                                                onClick={() => openLightbox(image)}
                                            >
                                                {/* Hover overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end z-10">
                                                    <div className="p-4 text-white">
                                                        <h3 className="text-lg font-semibold mb-1">{image.alt}</h3>
                                                        <p className="text-sm text-gray-300">Featured</p>
                                                    </div>
                                                </div>

                                                {/* Image */}
                                                <div className="w-full h-full">
                                                    {imageErrors.has(image.src) ? (
                                                        <div className="w-full h-full flex items-center justify-center">
                                                            <div className="text-center">
                                                                <div className="text-4xl mb-2">📷</div>
                                                                <span className="text-gray-500 text-sm">Image not available</span>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <Image
                                                            src={image.src}
                                                            alt={image.alt}
                                                            fill
                                                            className="object-cover"
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                                            onError={() => handleImageError(image.src)}
                                                        />
                                                    )}
                                                </div>

                                                {/* Click indicator */}
                                                <div className="absolute top-3 right-3 bg-black/50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Subfolder Images */}
                            {activeYearData.subfolders.map((subfolder) => (
                                <div 
                                    key={subfolder.name} 
                                    ref={(el) => { sectionRefs.current[subfolder.name] = el; }}
                                    className="space-y-8"
                                >
                                    {/* Subfolder Header */}
                                    <div className="text-center">
                                        <h2 className="text-3xl font-bold text-white title-font mb-2">
                                            {subfolder.name}
                                        </h2>
                                        <p className="text-gray-400">
                                            {subfolder.count} photo{subfolder.count !== 1 ? 's' : ''}
                                        </p>
                                    </div>
                                    
                                    {/* Images Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                        {subfolder.images.map((image, index) => (
                                            <div 
                                                key={`${image.subfolder}-${index}`}
                                                className="group relative aspect-square bg-[#2a3441] rounded-lg overflow-hidden border border-gray-700 hover:border-white transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                                                onClick={() => openLightbox(image)}
                                            >
                                                {/* Hover overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end z-10">
                                                    <div className="p-4 text-white">
                                                        <h3 className="text-lg font-semibold mb-1">{image.alt}</h3>
                                                        <p className="text-sm text-gray-300">{image.subfolder}</p>
                                                    </div>
                                                </div>

                                                {/* Image */}
                                                <div className="w-full h-full">
                                                    {imageErrors.has(image.src) ? (
                                                        <div className="w-full h-full flex items-center justify-center">
                                                            <div className="text-center">
                                                                <div className="text-4xl mb-2">📷</div>
                                                                <span className="text-gray-500 text-sm">Image not available</span>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <Image
                                                            src={image.src}
                                                            alt={image.alt}
                                                            fill
                                                            className="object-cover"
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                                            onError={() => handleImageError(image.src)}
                                                        />
                                                    )}
                                                </div>

                                                {/* Click indicator */}
                                                <div className="absolute top-3 right-3 bg-black/50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            {lightboxOpen && selectedImage && (
                <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-7xl max-h-full">
                        {/* Close button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors duration-200"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Image */}
                        <div className="relative">
                            <Image
                                src={selectedImage.fullSizeSrc}
                                alt={selectedImage.alt}
                                width={1920}
                                height={1080}
                                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                                priority
                            />
                        </div>

                        {/* Image info */}
                        <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg backdrop-blur-sm">
                            <h3 className="text-lg font-semibold mb-1">{selectedImage.alt}</h3>
                            <p className="text-sm text-gray-300">{selectedImage.subfolder}</p>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
