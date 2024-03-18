import card1Image from "../../public/card1.png";
import card2Image from "../../public/card2.png";
import fullImage1 from "../../public/project1.png";
import fullImage2 from "../../public/project1.png";
const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    image: card1Image,
    fullImage: fullImage1,
    type: "web page",
    technologies: ["HTML", "CSS", "Javascript", "ReactJs"],
  },
  {
    id: 2,
    title: "E-commerce Website",
    image: card2Image,
    fullImage: fullImage2,
    type: "store",
    technologies: ["HTML", "CSS", "Javascript", "ReactJs"],
  },
];

export default projects;
