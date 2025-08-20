import SponsorTier from './SponsorTier';
import sponsorData from '../../data/sponsors.json';

interface SponsorListProps {
    title?: string;
    showTitle?: boolean;
    showTierHeaders?: boolean;
    tiers?: typeof sponsorData.tiers;
}

export default function SponsorList({ 
    title = "Our Sponsors", 
    showTitle = true,
    showTierHeaders = true,
    tiers = sponsorData.tiers
}: SponsorListProps) {
    return (
        <div className="w-full">
            {showTitle && (
                <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
            )}
            <div className="space-y-8">
                {tiers.map((tier, tierIndex) => (
                    <SponsorTier
                        key={tierIndex}
                        name={tier.name}
                        color={tier.color}
                        borderColor={tier.borderColor}
                        sponsors={tier.sponsors}
                        showTierHeader={showTierHeaders}
                    />
                ))}
            </div>
        </div>
    );
}
