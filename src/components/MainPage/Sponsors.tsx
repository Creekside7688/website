'use client';

import SponsorList from '../Sponsors/SponsorList';

export default function Sponsors() {
    return (
        <section id="sponsors" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1e2330]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-white title-font">SPONSORS</h2>
                    <p className="text-xl text-gray-300">We're grateful for the support of our amazing sponsors</p>
                </div>
                <SponsorList showTitle={false} />
                <div className="text-center mt-8">
                    <a 
                        href="/donate"
                        className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded font-semibold transition-colors duration-200 inline-block"
                    >
                        Become a Sponsor
                    </a>
                </div>
            </div>
        </section>
    );
}
