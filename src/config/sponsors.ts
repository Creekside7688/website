export interface SponsorData {
  name: string;
  logo: string;
  website: string;
}

export interface SponsorTier {
  name: string;
  color: string;
  borderColor: string;
  sponsors: SponsorData[];
}

export interface SponsorsConfig {
  tiers: SponsorTier[];
}

const sponsorsData: SponsorsConfig = {
  tiers: [
    // {
    //     name: "Platinum Sponsors",
    //     color: "text-gradient-to-r from-blue-400 to-purple-600",
    //     borderColor: "border-blue-400",
    //     sponsors: [
    //         {
    //             name: "TechCorp Industries",
    //             logo: "/placeholder-logo.png",
    //             website: "https://techcorp.com"
    //         },
    //         {
    //             name: "Innovation Systems",
    //             logo: "/placeholder-logo.png",
    //             website: "https://innovationsystems.com"
    //         },
    //         {
    //             name: "Future Robotics",
    //             logo: "/placeholder-logo.png",
    //             website: "https://futurerobotics.com"
    //         }
    //     ]
    // },
    {
      name: "Gold Sponsors",
      color: "text-yellow-500",
      borderColor: "border-yellow-400",
      sponsors: [
        {
          name: "Gene Haas Foundation",
          logo: "/sponsors/haas.png",
          website: "https://www.ghaasfoundation.org"
        },
        {
          name: "Burnaby SD41",
          logo: "/sponsors/sd41.png",
          website: "https://burnabyschools.ca"
        },
        {
          name: "Conwest Developments",
          logo: "/sponsors/conwest.png",
          website: "https://conwest.com"
        }
      ]
    },
    {
      name: "Silver Sponsors",
      color: "text-gray-400",
      borderColor: "border-gray-300",
      sponsors: [
        {
          name: "Motorola Solutions",
          logo: "/sponsors/motorola.png",
          website: "https://www.motorolasolutions.com"
        },
        {
          name: "Byrne Creek Community School",
          logo: "/sponsors/byrnecreek.png",
          website: "https://byrnecreek.burnabyschools.ca"
        },
        {
          name: "Lavender Family",
          logo: "/sponsors/sd41.png",
          website: "https://burnabyschools.ca"
        }
      ]
    },
    {
      name: "Bronze Sponsors",
      color: "text-amber-600",
      borderColor: "border-amber-500",
      sponsors: [
        {
          name: "Vicentijevic Family",
          logo: "/sponsors/vicentijevic.png",
          website: "https://www.vicentijevic.ca"
        },
        {
          name: "Wong Family",
          logo: "/sponsors/wong.png",
          website: "https://www.wongfamily.ca"
        }
      ]
    },
    // {
    //   name: "Team Supporters",
    //   color: "text-white",
    //   borderColor: "border-white",
    //   sponsors: [
    //     {
    //       name: "TechCorp Industries",
    //       logo: "/placeholder-logo.png",
    //       website: "https://techcorp.com"
    //     },
    //     {
    //       name: "Innovation Systems",
    //       logo: "/placeholder-logo.png",
    //       website: "https://innovationsystems.com"
    //     },
    //     {
    //       name: "Future Robotics",
    //       logo: "/placeholder-logo.png",
    //       website: "https://futurerobotics.com"
    //     }
    //   ]
    // },
    // {
    //   name: "Past Sponsors",
    //   color: "text-gray-500",
    //   borderColor: "border-gray-400",
    //   sponsors: [
    //     {
    //       name: "Legacy Robotics",
    //       logo: "/placeholder-logo.png",
    //       website: "https://legacyrobotics.com"
    //     },
    //     {
    //       name: "Classic Engineering",
    //       logo: "/placeholder-logo.png",
    //       website: "https://classicengineering.com"
    //     },
    //     {
    //       name: "Heritage Systems",
    //       logo: "/placeholder-logo.png",
    //       website: "https://heritagesystems.com"
    //     },
    //     {
    //       name: "Vintage Tech",
    //       logo: "/placeholder-logo.png",
    //       website: "https://vintagetech.com"
    //     },
    //     {
    //       name: "Traditional Solutions",
    //       logo: "/placeholder-logo.png",
    //       website: "https://traditionalsolutions.com"
    //     }
    //   ]
    // }
  ]
};

export default sponsorsData;
