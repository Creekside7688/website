'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Gallery() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const categories = [
        { id: 'all', label: 'All Photos' },
        { id: 'competitions', label: 'Competitions' },
        { id: 'build-season', label: 'Build Season' },
        { id: 'team', label: 'Team Photos' },
        { id: 'robots', label: 'Our Robots' }
    ];

    const photos = [
        { id: 1, category: 'competitions', title: 'Regional Competition 2023', description: 'Our team competing at the regional championship' },
        { id: 2, category: 'build-season', title: 'Robot Assembly', description: 'Students working on robot construction' },
        { id: 3, category: 'team', title: 'Team Photo', description: 'Full team photo from last season' },
        { id: 4, category: 'robots', title: 'Robot 2023', description: 'Our competition robot from 2023' },
        { id: 5, category: 'competitions', title: 'State Championship', description: 'Team at the state finals' },
        { id: 6, category: 'build-season', title: 'Design Process', description: 'Students designing robot components' },
        { id: 7, category: 'team', title: 'Mentor Meeting', description: 'Team meeting with mentors' },
        { id: 8, category: 'robots', title: 'Robot Testing', description: 'Testing robot functionality' },
        { id: 9, category: 'competitions', title: 'Awards Ceremony', description: 'Receiving awards at competition' },
        { id: 10, category: 'build-season', title: 'Workshop', description: 'Students learning new skills' },
        { id: 11, category: 'team', title: 'Team Building', description: 'Team building activities' },
        { id: 12, category: 'robots', title: 'Robot 2022', description: 'Our robot from the 2022 season' }
    ];

    const filteredPhotos = selectedCategory === 'all' 
        ? photos 
        : photos.filter(photo => photo.category === selectedCategory);

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
                        Explore our journey through photos from competitions, build season, and team activities.
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-0 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded font-semibold transition-colors duration-200 ${
                                    selectedCategory === category.id
                                        ? 'bg-white text-gray-900'
                                        : 'bg-[#2a3441] text-gray-300 hover:bg-[#3a4451]'
                                }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredPhotos.map((photo) => (
                            <div 
                                key={photo.id} 
                                className="group relative aspect-square bg-[#2a3441] rounded overflow-hidden border border-gray-700 hover:border-white transition-all duration-300 hover:scale-105"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-4 text-white">
                                        <h3 className="text-lg font-semibold mb-2">{photo.title}</h3>
                                        <p className="text-sm text-gray-300">{photo.description}</p>
                                    </div>
                                </div>
                                <div className="w-full h-full flex items-center justify-center">
                                    <span className="text-gray-500 text-sm">Photo {photo.id}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {filteredPhotos.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-xl text-gray-400">No photos found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
