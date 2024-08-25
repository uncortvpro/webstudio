declare interface ProjectData {
  yearsOfExperience: number;
  services: OurService[];
  reviews: Review[];
  news: News[];
  whyWe: {
    title: string;
    description: string;
  }[];
}
