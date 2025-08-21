import Image from 'next/image';

interface SponsorProps {
    name: string;
    logo: string;
}

export default function Sponsor({ name, logo }: SponsorProps) {
    return (
        <div className="p-4 rounded-lg bg-[#2a3441] hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center">
                <Image
                    src={logo}
                    alt={`${name} logo`}
                    width={64}
                    height={64}
                    className="rounded-lg object-contain"
                />
            </div>
        </div>
    );
}
