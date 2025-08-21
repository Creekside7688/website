export interface Achievement {
  title: string;
  description: string;
  icon: string;
  iconBg: string;
}

export const achievements: Achievement[] = [
  {
    title: "Regional Competition 2023",
    description: "First place finish with outstanding robot performance",
    icon: "1st",
    iconBg: "bg-yellow-500"
  },
  {
    title: "State Championship 2023",
    description: "Second place in the state finals",
    icon: "2nd",
    iconBg: "bg-gray-400"
  },
  {
    title: "Excellence in Engineering Award 2022",
    description: "Recognition for innovative design and technical excellence",
    icon: "🏆",
    iconBg: "bg-yellow-600"
  }
];

export default achievements;
