import gallery1 from "@/assets/img/project/gallery-1.jpg";
import gallery2 from "@/assets/img/project/gallery-2.jpg";
import gallery3 from "@/assets/img/project/gallery-3.jpg";
import gallery4 from "@/assets/img/project/gallery-4.jpg";
import gallery5 from "@/assets/img/project/gallery-5.jpg";

// Project Brief Details
export const projectBrief = [
  { label: "Total Area", value: "276.50 m2" },
  { label: "Living Space", value: "95.30 m2" },
  { label: "Material Space", value: "Prefabricated Concrete" },
  { label: "Total Cost", value: "$7,590", className: "total-cost" },
];

// Project Information
export const projectInfo = [
  { label: "Client", value: "Forest Lodge" },
  { label: "Location", value: "California, USA" },
  { label: "Year", value: "2023" },
];

// Gallery Images
export const galleryImages = [
  { image: gallery1, caption: "Drawing Room" },
  { image: gallery2, caption: "Dining Room" },
  { image: gallery3, caption: "Kitchen Room" },
  { image: gallery4, caption: "Common Room" },
  { image: gallery5, caption: "Bed Room", isBig: true },
];

// Challenges Section
export const challenges = [
  {
    text: "The Lakefront Retreat project presented a unique challenge for our team, as the client wanted a contemporary vacation home that seamlessly blended into its natural surrounding. This meant that we had to carefully consider how to incorporate modern design elements and materials.",
  },
];

// Solutions Section
export const solutions = {
  text: "Our team worked closely with the client to design a vacation home that was modern and sleek, yet also integrated seamlessly into its natural surroundings.",
  detailedText:
    "We incorporate natural materials such as <span>wood and stone</span>, and used large windows and <span>expansive outdoor living spaces</span>",
  detailedText2:
    " to maximize the stunning views of the lake and surrounding mountains. The end result was a contemporary vacation home that felt both luxurious and grounded in nature, providing a serene and peaceful retreat for the client and their guest.",
};

import projectImg1 from "@/assets/img/project/2-1.jpg";
import projectImg2 from "@/assets/img/project/2-2.jpg";
import projectImg3 from "@/assets/img/project/2-3.jpg";
import projectImg4 from "@/assets/img/project/2-4.jpg";

// Project Data
export const projects = [
  {
    id: 1,
    title: "Industrial Chic Restaurant",
    category: "Interior",
    image: projectImg1,
    layout: "col-xl-7 col-lg-7 col-md-6", // Controls the column size
    link: "/projects/1",
  },
  {
    id: 2,
    title: "Mediterranean Villa",
    category: "Architecture",
    image: projectImg2,
    layout: "col-xl-5 col-lg-5 col-md-6",
    link: "/projects/2",
  },
  {
    id: 3,
    title: "Urban Townhome",
    category: "Architecture",
    image: projectImg4,
    layout: "col-xl-5 col-lg-5 col-md-6",
    link: "/projects/3",
  },
  {
    id: 4,
    title: "Ranch House Remodel",
    category: "Interior",
    image: projectImg3,
    layout: "col-xl-7 col-lg-7 col-md-6",
    link: "/projects/4",
  },
];

export const projectCategories = [
  {
    id: "architecture-design",
    label: "Carpintería",
    projects: [
      {
        number: "01",
        title: "Mediterrean Villa",
        image: new URL("@/assets/img/project/3-1.jpg", import.meta.url),
      },
      {
        number: "02",
        title: "Peninsula Villa",
        image: new URL("@/assets/img/project/3-2.jpg", import.meta.url),
      },
      {
        number: "03",
        title: "Parkview Resort",
        image: new URL("@/assets/img/project/3-6.jpg", import.meta.url),
      },
    ],
  },
  {
    id: "interior-design",
    label: "Remodelación",
    projects: [
      {
        number: "01",
        title: "Restaurant Inn",
        image: new URL("@/assets/img/project/3-4.jpg", import.meta.url),
      },
      {
        number: "02",
        title: "Corporate Office",
        image: new URL("@/assets/img/project/3-5.jpg", import.meta.url),
      },
      {
        number: "03",
        title: "Museum Spaces",
        image: new URL("@/assets/img/project/3-3.jpg", import.meta.url),
      },
    ],
  },
  {
    id: "project-management",
    label: "Const. Institucional",
    projects: [
      {
        number: "01",
        title: "Mediterrean Villa",
        image: new URL("@/assets/img/project/3-7.jpg", import.meta.url),
      },
      {
        number: "02",
        title: "Peninsula Villa",
        image: new URL("@/assets/img/project/3-8.jpg", import.meta.url),
      },
      {
        number: "03",
        title: "Parkview Resort",
        image: new URL("@/assets/img/project/3-9.jpg", import.meta.url),
      },
    ],
  },
  {
    id: "historic-preservation",
    label: "Const. Residencial",
    projects: [
      {
        number: "01",
        title: "Sears Tower",
        image: new URL("@/assets/img/project/3-10.jpg", import.meta.url),
      },
      {
        number: "02",
        title: "Willis Mall",
        image: new URL("@/assets/img/project/3-11.jpg", import.meta.url),
      },
      {
        number: "03",
        title: "Pixel IT Park",
        image: new URL("@/assets/img/project/3-12.jpg", import.meta.url),
      },
    ],
  },
  {
    id: "landscape-design",
    label: "Const. Comercial",
    projects: [
      {
        number: "01",
        title: "Dining Spaces",
        image: new URL("@/assets/img/project/3-13.jpg", import.meta.url),
      },
      {
        number: "02",
        title: "Common Area",
        image: new URL("@/assets/img/project/3-14.jpg", import.meta.url),
      },
      {
        number: "03",
        title: "House Yard Design",
        image: new URL("@/assets/img/project/3-15.jpg", import.meta.url),
      },
    ],
  },
];

export const projectConstruccion = [
  {
    id: "project-management",
    label: "Const. Institucional",
    projects: [
      {
        number: "01",
        title: "Mediterrean Villa",
        image: "/assets/img/project/3-7.jpg",
      },
      {
        number: "02",
        title: "Peninsula Villa",
        image: "/assets/img/project/3-8.jpg",
      },
      {
        number: "03",
        title: "Parkview Resort",
        image: "/assets/img/project/3-9.jpg",
      },
    ],
  },
  {
    id: "historic-preservation",
    label: "Const. Residencial",
    projects: [
      {
        number: "01",
        title: "Sears Tower",
        image: "/assets/img/project/3-10.jpg",
      },
      {
        number: "02",
        title: "Willis Mall",
        image: "/assets/img/project/3-11.jpg",
      },
      {
        number: "03",
        title: "Pixel IT Park",
        image: "/assets/img/project/3-12.jpg",
      },
    ],
  },
  {
    id: "landscape-design",
    label: "Const. Comercial",
    projects: [
      {
        number: "01",
        title: "Dining Spaces",
        image: "/assets/img/project/3-13.jpg",
      },
      {
        number: "02",
        title: "Common Area",
        image: "/assets/img/project/3-14.jpg",
      },
      {
        number: "03",
        title: "House Yard Design",
        image: "/assets/img/project/3-15.jpg",
      },
    ],
  },
];

export const projectAcabados = [
  {
    id: "architecture-design",
    label: "Carpintería",
    projects: [
      {
        number: "01",
        title: "Mediterrean Villa",
        image: "/assets/img/project/3-1.jpg",
      },
      {
        number: "02",
        title: "Peninsula Villa",
        image: "/assets/img/project/3-2.jpg",
      },
      {
        number: "03",
        title: "Parkview Resort",
        image: "/assets/img/project/3-3.jpg",
      },
    ],
  },
  {
    id: "interior-design",
    label: "Remodelación",
    projects: [
      {
        number: "01",
        title: "Restaurant Inn",
        image: "/assets/img/project/3-4.jpg",
      },
      {
        number: "02",
        title: "Corporate Office",
        image: "/assets/img/project/3-5.jpg",
      },
      {
        number: "03",
        title: "Museum Spaces",
        image: "/assets/img/project/3-6.jpg",
      },
    ],
  },
];

// Import project images
import project2Img1 from "@/assets/img/project/project-1.jpg";
import project2Img2 from "@/assets/img/project/project-2.jpg";
import project2Img3 from "@/assets/img/project/project-3.jpg";
import project2Img4 from "@/assets/img/project/project-4.jpg";
import project2Img5 from "@/assets/img/project/project-5.jpg";

// Projects Data
export const projectsTwoData = [
  {
    id: 1,
    title: "Lakefront Retreat",
    category: "Architecture",
    image: project2Img1,
    link: "/projects/2",
  },
  {
    id: 2,
    title: "Modern Bungalow House",
    category: "Interior",
    image: project2Img2,
    link: "/projects/2",
  },
  {
    id: 3,
    title: "Sustainable Office Building",
    category: "Landscape Design",
    image: project2Img3,
    link: "/projects/2",
  },
  {
    id: 4,
    title: "Industrial Chic Restaurant",
    category: "Architecture",
    image: project2Img4,
    link: "/projects/2",
  },
  {
    id: 5,
    title: "Mediterranean Villa",
    category: "Interior",
    image: project2Img5,
    link: "/projects/2",
  },
];
