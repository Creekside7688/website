import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-[#1a1f2a] border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Team Info */}
                    <div>
                        <div className="flex items-center gap-4 -mb-3">
                            <h3 className="text-2xl font-bold text-white mb-4 title-font">CREEKSIDE ROBOTICS</h3>
                            <img
                                src="/cr-logo.svg"
                                alt="Creekside Robotics Logo"
                                className="w-20 h-20 object-contain -mt-4"
                            />
                        </div>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/byrnerobotics" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="mailto:byrnecreekfirstrobotics@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <span className="sr-only">Email</span>
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </a>
                            <a href="https://github.com/creekside7688" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <span className="sr-only">GitHub</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                        <div className="mt-6">
                            <a href="https://www.thebluealliance.com/team/7688" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors text-sm">
                                <div>
                                    <svg width="72" height="112" viewBox="0 0 72 112" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_6641_2)">
                                            <path d="M11 20V84" stroke="currentColor" strokeWidth="6" strokeMiterlimit="10" />
                                            <path d="M61 20V84" stroke="currentColor" strokeWidth="6" strokeMiterlimit="10" />
                                            <path d="M11 84C11 90.6304 13.6339 96.9893 18.3223 101.678C23.0107 106.366 29.3696 109 36 109" stroke="currentColor" strokeWidth="6" strokeMiterlimit="10" />
                                            <path d="M61 84C61 90.6304 58.3661 96.9893 53.6777 101.678C48.9893 106.366 42.6304 109 36 109" stroke="currentColor" strokeWidth="6" strokeMiterlimit="10" />
                                            <path d="M36 20V109" stroke="currentColor" strokeWidth="6" strokeMiterlimit="10" />
                                            <path d="M11 81H61" stroke="currentColor" strokeWidth="6" strokeMiterlimit="10" />
                                            <path d="M11 53H61" stroke="currentColor" strokeWidth="6" strokeMiterlimit="10" />
                                            <path d="M68 0H4C1.79086 0 0 1.79086 0 4V24C0 26.2091 1.79086 28 4 28H68C70.2091 28 72 26.2091 72 24V4C72 1.79086 70.2091 0 68 0Z" fill="currentColor" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_6641_2">
                                                <rect width="72" height="112" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <span>The Blue Alliance</span>
                            </a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                        <div className="space-y-3">
                            <a href="mailto:byrnecreekfirstrobotics@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <span>byrnecreekfirstrobotics@gmail.com</span>
                            </a>
                            <a href="https://www.instagram.com/byrnerobotics" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                                <span>@byrnerobotics</span>
                            </a>

                            <a href="https://maps.app.goo.gl/GTH3pURAqUyAGr3EA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <span>Room A103, Byrne Creek Community School</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                        <div className="space-y-2">
                            <Link href="/" className="block text-gray-400 hover:text-blue-400 transition-colors">
                                Home
                            </Link>
                            <Link href="/resources" className="block text-gray-400 hover:text-blue-400 transition-colors">
                                Resources
                            </Link>
                            <Link href="/gallery" className="block text-gray-400 hover:text-blue-400 transition-colors">
                                Gallery
                            </Link>
                            <Link href="/donate" className="block text-gray-400 hover:text-blue-400 transition-colors">
                                Support Us
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-400">© 2025 FRC Team 7688 Creekside Robotics. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
