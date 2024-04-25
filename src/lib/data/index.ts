import { Skills, Websites } from "../types";

import Nodejs from '../../../public/images/nodejs.png'
import Supabase from '../../../public/images/supabase.png'
import Nextjs from '../../../public/images/nextjs.jpeg'
import Tailwind from '../../../public/images/tailwind.png'
import Figma from '../../../public/images/figma.svg'
import Vercel from '../../../public/images/vercel.jpeg'
import MealMentor from '../../../public/images/meal-mentor.ico'
import Debanz from '../../../public/images/debanz.ico'
import Consorciosenred from '../../../public/images/consorciosenred.svg'

const skills: Skills[] = [
  {
    title: "Node.js",
    description: "Backend development",
    image: {
      url: Nodejs,
      background: "bg-[#1E1E1E]",
      noBgImage: true,
    }
  },
  {
    title: "Supabase",
    description: "NoSql database",
    image: {
      url: Supabase,
      background: "bg-[#181818]",
      noBgImage: true,
    }
  },
  {
    title: "Figma",
    description: "Web & Product Design",
    image: {
      url: Figma,
      background: "bg-[#1E1E1E]",
      noBgImage: true,
    }
  },
  {
    title: "Next.js",
    description: "Frontend development",
    image: {
      url: Nextjs,
      background: "bg-[#1E1E1E]"
    }
  },
  {
    title: "Tailwind CSS",
    description: "Styling the web",
    image: {
      url: Tailwind,
      background: "bg-[#1E1E1E]"
    }
  },
  {
    title: "Vercel",
    description: "Deploying and testing",
    image: {
      url: Vercel,
      background: "bg-[#1E1E1E]"
    }
  },
]

const builded: Websites[] = [
  {
    title: "Meal Mentor App",
    description: "Inspired by notion with custom functions",
    url: "https://meal-mentor-sigma.vercel.app/product",
    image: {
      url: MealMentor,
      background: "bg-[#9CD75A] text-white"
    }
  },
  {
    title: "Consorcios en red",
    description: "Landing page for a management company",
    url: "https://consorciosenred.vercel.app/",
    image: {
      url: Consorciosenred,
      background: "bg-[#086FB7] text-white"
    }
  },
  {
    title: "Debanz",
    description: "Ecommerce for cloath brand",
    url: "https://debanz-com-git-main-sax2.vercel.app/",
    image: {
      url: Debanz,
      background: "bg-[#000] text-white"
    }
  }
]

const building: Websites[] = [
  {
    title: "Bento Grid Generator",
    description: "An app that generates bento grids",
    url: "#",
    image: {
      url: "",
      background: "bg-[#0A0A0A] text-white"
    }
  },
]

export const bento = {
  className: "flex flex-col gap-3 w-full" ,
  _: [
    {
      className: "flex gap-3 w-full max-md:flex-col",
      _: [
        {
          className: "flex flex-col gap-3 w-full",
          _: [
            {
              title: "Projects builded",
              className: "w-full h-fit",
              data: { type: "builded", data: builded }
            },
            {
              title: "Currently Listening",
              className: "w-full h-full",
              data: { type: "spotify" }
            }
          ]
        },
        {
          title: "Tech Stack",
          className: "w-full max-w-[275px] max-md:max-w-full",
          data: { type: "skills", data: skills }
        }
      ]
    },
    {
      className: "flex flex-col gap-3 w-full",
      _: [
        {
          title: "Currently building",
          className: "w-full h-fit",
          data: { type: "list", data: building }
        }
      ]
    }
  ]
};