import {
  BiLogoCss3,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoJavascript,
} from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const ProjectsData = [
  {
    id: "1",
    name: "ECAT Exam Preparation WebApp",
    image: "./ecat-app.png",
    icons: [BiLogoReact, BiLogoTailwindCss, FaNodeJs, SiExpress, BiLogoMongodb],
    description:
      "Final Year Project - An exam preparation site to help students practice for ECAT with quiz system and study resources.",
    github: "https://github.com/devIbrahim07",
    demo: null,
  },
  {
    id: "2",
    name: "London Nikkah Service",
    image: "./london.png",
    icons: [BiLogoReact, BiLogoTailwindCss, BiLogoJavascript, BiLogoCss3],
    description:
      "A professional Islamic wedding service website offering Nikkah ceremonies in London with personalized speeches and counseling services.",
    github: null,
    demo: "https://londonnikkahservice.co.uk/",
  },
  {
    id: "3",
    name: "Neasden Islamic Centre",
    image: "./jamia.png",
    icons: [BiLogoReact, BiLogoTailwindCss, BiLogoMongodb, SiExpress],
    description:
      "A purpose-built Islamic educational and cultural centre website for Jamia Al-Hafsah, serving London's Muslim community with donations and events.",
    github: null,
    demo: "https://neasdenmosque.co.uk/",
  },
];

export default ProjectsData;
