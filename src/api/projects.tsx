import project1 from "../images/project/1.jpg";
import project2 from "../images/project/2.jpg";
import project3 from "../images/project/3.jpg";
import project4 from "../images/project/4.jpg";
import project5 from "../images/project/5.jpg";
import project6 from "../images/project/6.jpg";

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  slug: string;
  col: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Villa Deep Cleaning",
    category: "Jumeirah Park Villa",
    image: project1,
    slug: "villa-deep-cleaning",
    col: "col-lg-7 col-md-7 col-12",
  },
  {
    id: 2,
    title: "Apartment Move-In Cleaning",
    category: "Dubai Marina",
    image: project2,
    slug: "apartment-move-in-cleaning",
    col: "col-lg-5 col-md-5 col-12",
  },
  {
    id: 3,
    title: "Corporate Office Cleaning",
    category: "Business Bay",
    image: project3,
    slug: "corporate-office-cleaning",
    col: "col-lg-5 col-md-5 col-12",
  },
  {
    id: 4,
    title: "Post-Construction Cleaning",
    category: "Downtown Dubai",
    image: project4,
    slug: "post-construction-cleaning",
    col: "col-lg-7 col-md-7 col-12",
  },
  {
    id: 5,
    title: "Retail Store Cleaning",
    category: "Dubai Mall",
    image: project5,
    slug: "retail-store-cleaning",
    col: "col-lg-8 col-md-7 col-12",
  },
  {
    id: 6,
    title: "Regular Housekeeping",
    category: "Arabian Ranches",
    image: project6,
    slug: "regular-housekeeping",
    col: "col-lg-4 col-md-5 col-12",
  },
];

export default projects;