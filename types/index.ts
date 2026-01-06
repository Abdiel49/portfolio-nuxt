export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imgUrl: string; // Cover image
  gallery?: string[]; // Multiple images for detail view
  tags: string[];
  techStack: string[];
  links: {
    github?: string;
    appStore?: string;
    playStore?: string;
    liveDemo?: string;
    googleDrive?: string;
  };
  skillsShown?: string[]; // e.g., "Clean Architecture", "Push Notifications"
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  techBadges: string[];
}
