// images
import blogImg1 from "../images/blog/img-1.jpg";
import blogImg2 from "../images/blog/img-2.jpg";
import blogImg3 from "../images/blog/img-3.jpg";
import blogSImg1 from "../images/blog/img-1.jpg";
import blogSImg2 from "../images/blog/img-2.jpg";
import blogSImg3 from "../images/blog/img-3.jpg";

export interface BlogItem {
  id: string;
  title: string;
  slug: string;
  image: string;
  blogSingleImg: string;
  category: string;
  author: string;
  comments: number;
  date: string;
  description: string;
  content: string[];
}

const blogs: BlogItem[] = [
  {
    id: "1",
    title: "How Often Should You Schedule Deep Cleaning in Dubai?",
    slug: "how-often-schedule-deep-cleaning-dubai",
    image: blogImg1,
    blogSingleImg: blogSImg1,
    category: "Deep Cleaning Dubai",
    author: "Bronco Team",
    comments: 4,
    date: "12 Mar",
    description: "Living in Dubai's desert environment means dust, humidity, and sand accumulation. Discover the ideal frequency for deep cleaning your home or villa.",
    content: [
      "Dubai's unique climate, characterized by airborne sand dust and constant air conditioning usage, creates an environment where dust mites, allergens, and fine particulate matter accumulate faster than in temperate regions.",
      "For standard apartments in areas like Downtown Dubai or Dubai Marina, scheduling a thorough deep clean every 3 to 6 months ensures AC vents, window tracks, and hidden furniture corners stay allergen-free.",
      "For large villas in Arabian Ranches, Palm Jumeirah, or Dubai Hills, quarterly deep cleaning combined with regular maid service maintains grout lines, outdoor patio tiles, and kitchen grease traps in top condition."
    ]
  },
  {
    id: "2",
    title: "Benefits of Professional Home Cleaning Services",
    slug: "benefits-of-professional-home-cleaning-services",
    image: blogImg2,
    blogSingleImg: blogSImg2,
    category: "Residential Cleaning",
    author: "Bronco Team",
    comments: 6,
    date: "08 Mar",
    description: "Discover how hiring professional cleaners in Dubai saves time, improves indoor air quality, and enhances your family's overall well-being.",
    content: [
      "In a fast-paced city like Dubai, balancing work, family, and social commitments leaves little time for detailed house chores. Professional cleaners allow you to reclaim your weekends.",
      "Equipped with commercial HEPA vacuums and non-toxic disinfectants, professional cleaning teams eliminate 99.9% of bacteria and dust mites that regular dusting leaves behind.",
      "Consistent professional home maintenance protects your property investment, preventing limescale buildup on luxury bathroom fixtures and preserving delicate flooring."
    ]
  },
  {
    id: "3",
    title: "Why Businesses Need Regular Office Cleaning",
    slug: "why-businesses-need-regular-office-cleaning",
    image: blogImg3,
    blogSingleImg: blogSImg3,
    category: "Commercial Cleaning",
    author: "Bronco Team",
    comments: 2,
    date: "01 Mar",
    description: "A clean office in DIFC or Business Bay creates a strong first impression for clients and reduces sick leaves among staff.",
    content: [
      "First impressions matter immensely in Dubai's competitive business ecosystem. Walking into a gleaming, spotless office instills immediate confidence in visiting partners and clients.",
      "Keyboards, door handles, and shared pantry spaces are hotspots for germs. Regular professional office sanitization drastically reduces employee sick days during seasonal flu cycles.",
      "Outsourcing your workplace hygiene to BCS Cleaning Services ensures flexible after-hours cleaning tailored to your company's operational schedule."
    ]
  },
  {
    id: "4",
    title: "Moving In & Moving Out Cleaning Checklist Dubai",
    slug: "moving-in-moving-out-cleaning-checklist-dubai",
    image: blogImg1,
    blogSingleImg: blogSImg2,
    category: "Relocation Tips",
    author: "Bronco Team",
    comments: 8,
    date: "25 Feb",
    description: "Essential checklist to secure your security deposit return and ensure a seamless move into your new Dubai property.",
    content: [
      "Moving homes in Dubai can be overwhelming. A detailed move-out cleaning checklist ensures landlord inspections pass without deposit deductions.",
      "Key checklist items include deep cleaning inside kitchen cabinets, degreasing oven hoods, descaling bathroom tiles, polishing window glass, and removing paint/wall scuffs.",
      "Hiring BCS's specialized move-in/move-out team guarantees your new home is disinfected and sparkling clean before your furniture arrives."
    ]
  }
];

export default blogs;
