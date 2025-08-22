import Image from 'next/image';

interface SponsorProps {
    name: string;
    logo: string;
    website?: string;
}

export default function Sponsor({ name, logo, website }: SponsorProps) {
    const isTextName = name.toLowerCase().includes('family');
    
    const content = (
        <div className="p-4 rounded-lg bg-[#2a3441] hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center h-20">
                {isTextName ? (
                    <div className="text-center flex items-center justify-center h-full">
                        <h3 className="text-lg font-semibold text-white">{name}</h3>
                    </div>
                ) : (
                    <img
                        src={logo}
                        alt={`${name} logo`}
                        className="rounded-lg object-contain h-16 w-auto"
                    />
                )}
            </div>
        </div>
    );

    if (website && !isTextName) {
        return (
            <a 
                href={website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:scale-105 transition-all duration-300"
            >
                {content}
            </a>
        );
    }

    return content;
}
