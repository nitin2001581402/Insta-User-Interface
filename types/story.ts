export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Story {
  id: string;
  userId: string;
  media: string;
  createdAt: string;
  viewers: string[];
}
