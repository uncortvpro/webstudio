declare interface ProjectData {
  yearsOfExperience: number;
  services: OurService[];
  reviews: Review[];
  news: News[];
  whyWe: {
    title_en: string;
    title_ru: string;
    description_en: string;
    description_ru: string;
  }
}
