'use client';

import upcomingEvents from '../../config/upcoming-events';
import achievements from '../../config/achievements';

export default function EventsAchievements() {
    return (
        <section id="upcoming" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#1e2330] py-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-4 text-white title-font">EVENTS & ACHIEVEMENTS</h2>
                <div className="w-1/2 h-px bg-white/60 mx-auto mb-12"></div>
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Upcoming Events */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-center lg:text-left text-white">Upcoming Events</h3>
                        <div className="h-[500px] overflow-y-auto space-y-6 border-2 border-gray-500 rounded-lg p-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            {upcomingEvents.map((event, index) => (
                                <div key={index} className="p-6 rounded bg-[#2a3441] border border-gray-700 hover:scale-105 transition-transform duration-200 cursor-pointer">
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                                        <p className="text-gray-300 mb-2">{event.date}</p>
                                        <p className="text-gray-400">{event.location}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Past Achievements */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-center lg:text-left text-white">Past Achievements</h3>
                        <div className="h-[500px] overflow-y-auto space-y-6 border-2 border-gray-500 rounded-lg p-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="p-6 rounded bg-[#2a3441] border border-gray-700 hover:scale-105 transition-transform duration-200 cursor-pointer">
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
                                        <p className="text-gray-300 mb-2">{achievement.year}</p>
                                        <p className="text-gray-400">{achievement.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
