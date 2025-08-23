'use client';

import activities from '../../config/activities';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#1e2330]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-4 text-white title-font">ABOUT</h2>
                <div className="w-1/2 h-px bg-white/60 mx-auto mb-12"></div>

                {/* FIRST Competition Section */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <div className="flex items-center justify-center">
                        <Image src="/first-logo.png" alt="FIRST Robotics Competition" width={400} height={400} />
                    </div>
                    <div className="flex items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-4 text-white">FIRST Robotics Competition</h3>
                            <p className="text-lg text-gray-300 mb-4">
                                “The Ultimate Sport for the Mind”
                            </p>
                            <p className="text-lg text-gray-300 mb-4">
                                Every year we participate in the <i><b>FIRST</b></i> Robotics Competition. We have just 8 weeks to design, build, and program a 150 lbs robot to compete in a new game.
                            </p>
                            <p className="text-lg text-gray-300">
                                Students are exposed to a wide variety of skills, and FRC prepares them for careers in STEM while equipping them with the necessary soft skills to thrive.
                            </p>
                        </div>
                    </div>
                </div>
                <p className="text-sm text-gray-500/60 mt-6 tracking-wider text-center">
                    {activities.join(' / ')}
                </p>
            </div>
        </section>
    );
}
