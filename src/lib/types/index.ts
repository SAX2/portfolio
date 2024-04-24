import { StaticImageData } from "next/image";

export interface Skills {
  title: string,
  description: string,
  image: {
    url?: string | StaticImageData,
    background: string;
    noBgImage?: boolean;
  }
  url?: string
}

export interface Websites extends Skills {
  url: string
}