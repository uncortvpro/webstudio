declare interface ProjectData {
  yearsOfExperience: number;
  services: OurService[];
  reviews: Review[];
  news: News[];
  whyWe: {
    title: string;
    description: string;
  }[];
  resentProjects: {
    id: number;
    label: string;
    projects: {
      image: string;
      link: string;
      alt: string;
    }[];
  }[];
}
