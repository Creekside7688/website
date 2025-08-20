interface SponsorshipTierProps {
    name: string;
    color: string;
    borderColor: string;
    amount: string;
    benefits: string[];
    isPopular?: boolean;
}

export default function SponsorshipTier({ 
    name, 
    color, 
    borderColor, 
    amount, 
    benefits, 
    isPopular = false 
}: SponsorshipTierProps) {
    return (
        <div className={`relative p-8 rounded-lg border-2 ${borderColor} bg-[#2a3441] hover:scale-105 transition-transform duration-300`}>
            {isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                    </span>
                </div>
            )}
            <div className="text-center">
                <h3 className={`text-2xl font-bold mb-4 ${color}`}>{name} Sponsor</h3>
                <div className={`inline-block ${color.replace('text-', 'bg-')} text-white px-6 py-3 rounded-lg font-bold text-xl mb-6`}>
                    {amount}
                </div>
                <ul className="space-y-3 text-left">
                    {benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-3">
                            <span className="text-green-400 mt-1">✓</span>
                            <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                    ))}
                </ul>
                <button className="w-full mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-200">
                    Become a {name} Sponsor
                </button>
            </div>
        </div>
    );
}
