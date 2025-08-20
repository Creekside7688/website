import Sponsor from './Sponsor';

interface SponsorData {
    name: string;
    logo: string;
    website?: string;
}

interface SponsorTierProps {
    name: string;
    color: string;
    borderColor: string;
    sponsors: SponsorData[];
    showTierHeader?: boolean;
}

export default function SponsorTier({ 
    name, 
    color, 
    borderColor, 
    sponsors, 
    showTierHeader = true 
}: SponsorTierProps) {
    return (
        <div className="space-y-4">
            {showTierHeader && (
                <div className="text-center">
                    <h3 className={`text-2xl font-bold ${color} mb-2`}>
                        {name} Sponsors
                    </h3>
                    <div className={`w-24 h-1 ${color} mx-auto rounded-full`}></div>
                </div>
            )}
            <div className="flex flex-wrap justify-center gap-4">
                {sponsors.map((sponsor, index) => (
                    <Sponsor
                        key={index}
                        name={sponsor.name}
                        logo={sponsor.logo}
                        website={sponsor.website}
                        tierColor={color}
                        tierBorderColor={borderColor}
                    />
                ))}
            </div>
        </div>
    );
}
