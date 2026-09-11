import team1 from "../images/team/team-1.jpg";
import team2 from "../images/team/team-2.jpg";
import team3 from "../images/team/team-3.jpg";
import team4 from "../images/team/team-4.jpg";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  slug: string;
  image: string;
  social: {
    facebook?: string;
    pinterest?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Rashid Al Mansoori",
    role: "Operations Manager",
    slug: "rashid-al-mansoori",
    image: team1,
    social: {
      facebook: "#",
      pinterest: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Sarah Ahmed",
    role: "Deep Cleaning Supervisor",
    slug: "sarah-ahmed",
    image: team2,
    social: {
      facebook: "#",
      pinterest: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Tariq Mahmood",
    role: "Commercial Team Lead",
    slug: "tariq-mahmood",
    image: team3,
    social: {
      facebook: "#",
      pinterest: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Elena Rostova",
    role: "Quality Audit Specialist",
    slug: "elena-rostova",
    image: team4,
    social: {
      facebook: "#",
      pinterest: "#",
      linkedin: "#",
    },
  },
];

export default teamMembers;