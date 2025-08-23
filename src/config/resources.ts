interface ResourceCard {
    icon: string;
    title: string;
    description: string;
    buttonLink: string;
    bgColor: string;
}

export const resources: ResourceCard[] = [{
        icon: "/notion.svg",
        title: "Notion",
        description: "Access our project management and learning resources.",
        buttonLink: "https://www.notion.so/vuktc/Creekside-Robotics-17501d0d8e0f81e49f5ef6842d6abe66",
        bgColor: "bg-blue-600"
    },
    {
        icon: "/github.svg",
        title: "Github",
        description: "Access our code repositories.",
        buttonLink: "https://github.com/creekside7688",
        bgColor: "bg-purple-600"
    }
];
