export interface ContentSphere {
  id: string;
  type: 'personal' | 'social' | 'discovery';
  title: string;
  preview: string;
  position: [number, number, number];
  radius: number;
  content: string;
  timestamp: number;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
}