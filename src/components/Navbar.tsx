'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            if (pathname === '/') {
                const sections = ['home', 'about', 'upcoming', 'sponsors'];
                const scrollPosition = window.scrollY + 100; // Offset for navbar height

                for (let i = sections.length - 1; i >= 0; i--) {
                    const section = document.getElementById(sections[i]);
                    if (section && section.offsetTop <= scrollPosition) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    const navigationItems = [
        { href: '/', label: 'Home', section: 'home' },
        { href: '/#about', label: 'About', section: 'about' },
        { href: '/#upcoming', label: 'Events & Achievements', section: 'upcoming' },
        { href: '/#sponsors', label: 'Sponsors', section: 'sponsors' },
        { href: '/resources', label: 'Resources', section: 'resources' },
        { href: '/gallery', label: 'Gallery', section: 'gallery' },
        { href: '/donate', label: 'Donate', section: 'donate' }
    ];

    const isActive = (item: typeof navigationItems[0]) => {
        if (item.href === '/') {
            return pathname === '/' && activeSection === 'home';
        }
        if (item.href.includes('#')) {
            return pathname === '/' && activeSection === item.section;
        }
        return pathname.startsWith(item.href);
    };

    const handleNavClick = (item: typeof navigationItems[0], e: React.MouseEvent) => {
        // Handle scroll-to for hash links and home link on the main page
        if (pathname === '/') {
            if (item.href === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (item.href.includes('#')) {
                e.preventDefault();
                const element = document.getElementById(item.href.split('#')[1]);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
        setIsMobileMenuOpen(false);
    };



    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1e2330]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="text-3xl font-bold text-white hover:text-gray-300 transition-colors title-font"
                            onClick={(e) => handleNavClick({ href: '/', label: 'Home', section: 'home' }, e)}
                        >
                            CREEKSIDE ROBOTICS
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(item, e)}
                                    className={`px-3 py-2 rounded text-sm font-medium transition-colors duration-200 ${isActive(item)
                                        ? 'text-white bg-white/10'
                                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1e2330]/95 backdrop-blur-md rounded mt-2">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(item, e)}
                                    className={`block px-3 py-2 rounded text-base font-medium transition-colors duration-200 ${isActive(item)
                                        ? 'text-white bg-white/10'
                                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
