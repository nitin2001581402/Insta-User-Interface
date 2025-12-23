import { User, Story } from "@/types/story";

export const users: User[] = [
  { id: "u1", name: "Nitin", avatar: "/s1.jpg" },
  { id: "u2", name: "Rahul", avatar: "/s2.jpg" },
  { id: "u3", name: "Ankit", avatar: "/s3.jpg" }
];

export const stories: Story[] = [
  {
    id: "s1",
    userId: "u1",
    media: "/s1.jpg",
    createdAt: "2025-12-23",
    viewers: ["Rahul", "Ankit"]
  },
  {
    id: "s2",
    userId: "u2",
    media: "/s2.jpg",
    createdAt: "2025-12-23",
    viewers: ["Nitin"]
  },
  {
    id: "s3",
    userId: "u3",
    media: "/s3.jpg",
    createdAt: "2025-12-23",
    viewers: []
  }
];
