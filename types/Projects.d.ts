declare interface Projects {
  id: number;
  label: string;
  projects: {
    image: string;
    link: string;
    alt: string;
  }[];
}
