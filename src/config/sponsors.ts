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
          name: "Engineering Solutions",
          logo: "/placeholder-logo.png",
          website: "https://engineeringsolutions.com"
        },
        {
          name: "Advanced Manufacturing",
          logo: "/placeholder-logo.png",
          website: "https://advancedmanufacturing.com"
        },
        {
          name: "Precision Tools Inc",
          logo: "/placeholder-logo.png",
          website: "https://precisiontools.com"
        }
      ]
    },
    {
      name: "Silver Sponsors",
      color: "text-gray-400",
      borderColor: "border-gray-300",
      sponsors: [
        {
          name: "Innovation Labs",
          logo: "/placeholder-logo.png",
          website: "https://innovationlabs.com"
        },
        {
          name: "Tech Solutions",
          logo: "/placeholder-logo.png",
          website: "https://techsolutions.com"
        },
        {
          name: "Digital Dynamics",
          logo: "/placeholder-logo.png",
          website: "https://digitaldynamics.com"
        },
        {
          name: "Smart Systems",
          logo: "/placeholder-logo.png",
          website: "https://smartsystems.com"
        }
      ]
    },
    {
      name: "Bronze Sponsors",
      color: "text-amber-600",
      borderColor: "border-amber-500",
      sponsors: [
        {
          name: "Robotics Unlimited",
          logo: "/placeholder-logo.png",
          website: "https://roboticsunlimited.com"
        },
        {
          name: "Local Engineering",
          logo: "/placeholder-logo.png",
          website: "https://localengineering.com"
        },
        {
          name: "Community Tech",
          logo: "/placeholder-logo.png",
          website: "https://communitytech.com"
        },
        {
          name: "Future Builders",
          logo: "/placeholder-logo.png",
          website: "https://futurebuilders.com"
        },
        {
          name: "Innovation Partners",
          logo: "/placeholder-logo.png",
          website: "https://innovationpartners.com"
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
    {
      name: "Past Sponsors",
      color: "text-gray-500",
      borderColor: "border-gray-400",
      sponsors: [
        {
          name: "Legacy Robotics",
          logo: "/placeholder-logo.png",
          website: "https://legacyrobotics.com"
        },
        {
          name: "Classic Engineering",
          logo: "/placeholder-logo.png",
          website: "https://classicengineering.com"
        },
        {
          name: "Heritage Systems",
          logo: "/placeholder-logo.png",
          website: "https://heritagesystems.com"
        },
        {
          name: "Vintage Tech",
          logo: "/placeholder-logo.png",
          website: "https://vintagetech.com"
        },
        {
          name: "Traditional Solutions",
          logo: "/placeholder-logo.png",
          website: "https://traditionalsolutions.com"
        }
      ]
    }
  ]
};

export default sponsorsData;
