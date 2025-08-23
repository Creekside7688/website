interface ResourceProps {
    icon: string;
    title: string;
    description: string;
    buttonLink: string;
    bgColor: string;
}

export default function Resource({
    icon,
    title,
    description,
    buttonLink,
    bgColor
}: ResourceProps) {
    return (
        <div className="p-8 rounded-lg border border-gray-700 hover:border-gray-400 hover:shadow-lg transition-all duration-200 bg-[#2a3441] flex flex-col h-full">
            <img src={icon} alt={title} className="w-16 h-16 mb-4" />

            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-300 mb-6 flex-grow">{description}</p>
            <a
                href={buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 rounded font-semibold transition-all duration-200 flex items-center justify-center gap-2"
            >
                Visit
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-external-link"
                >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </a>
        </div>
    );
}
