export interface UpcomingEvent {
  title: string;
  date: string;
  location: string;
}

export const upcomingEvents: UpcomingEvent[] = [
  {
    title: "Team Meeting",
    date: "Every Monday & Wednesday @ 3:00 PM",
    location: "Byrne Creek A103"
  },
  {
    title: "First Meeting",
    date: "September 8th, 2025 @ 3:00 PM",
    location: "Byrne Creek A103"
  },
  {
    title: "Clubs' Day",
    date: "TBD",
    location: "Byrne Creek B-Wing"
  },
  {
    title: "2026 Kickoff",
    date: "January 10th, 2026 @ 9:00 AM",
    location: "BCIT SE06"
  },
  {
    title: "Kickoff Meeting",
    date: "January 12th, 2026 @ 3:00 PM",
    location: "Byrne Creek A103"
  },
  {
    title: "Semester Break",
    date: "January 19th-23rd, 2026",
    location: "Byrne Creek A103"
  },
  {
    title: "Canadian Pacific Regional",
    date: "TBD",
    location: "Pacific Coliseum, PNE"
  },
];

export default upcomingEvents;
