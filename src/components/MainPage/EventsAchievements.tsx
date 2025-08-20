'use client';

import upcomingEvents from '../../data/upcoming-events.json';
import achievements from '../../data/achievements.json';

export default function EventsAchievements() {
    return (
        <section id="upcoming" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#1e2330] py-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4 text-white title-font">EVENTS & ACHIEVEMENTS</h2>
                <div className="w-1/2 h-px bg-white/60 mx-auto mb-12"></div>
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Upcoming Events */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-center lg:text-left text-white">Upcoming Events</h3>
                        <div className="space-y-6">
                            {upcomingEvents.map((event, index) => (
                                <div key={index} className="p-6 rounded bg-[#2a3441] border border-gray-700">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                                            <p className="text-gray-300 mb-2">{event.date}</p>
                                            <p className="text-gray-400">Location: {event.location}</p>
                                        </div>
                                        {event.actionType === 'button' ? (
                                            <button className="px-6 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded font-semibold transition-colors duration-200">
                                                {event.action}
                                            </button>
                                        ) : (
                                            <span className={`font-medium ${event.action === 'Open' ? 'text-white' : 'text-gray-500'
                                                }`}>
                                                {event.action}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Past Achievements */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-center lg:text-left text-white">Past Achievements</h3>
                        <div className="space-y-6">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="p-6 rounded bg-[#2a3441] border border-gray-700">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
                                            <span className="text-gray-900 font-bold">{achievement.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
                                            <p className="text-gray-300">{achievement.description}</p>
                                        </div>
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
