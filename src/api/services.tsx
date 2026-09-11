// types
export interface Service {
  id: number;
  title: string;
  slug: string;
  price: string;
  image: string;
  intro: string;
  description: string;
  benefits: string[];
  whyChoose: string[];
  process: string[];
  serviceAreas: string[];
}

// images
import service1 from "../images/service/service-1.jpg";
import service2 from "../images/service/service-2.jpg";
import service3 from "../images/service/service-3.jpg";
import service4 from "../images/service/service-4.jpg";
import service5 from "../images/service/service-5.jpg";
import service6 from "../images/service/service-6.jpg";
import homeCleaning from "../images/service/Home Cleaning Services.png";
import officeCleaning from "../images/service/Office & Workplace Cleaning Services.png";
import warehouseCleaning from "../images/service/Warehouse Cleaning Services.png";
import movingCleaning from "../images/service/Moving-In & Moving-Out Cleaning Services.png";
import airbnbCleaning from "../images/service/Airbnb Cleaning Services.png";
import maidServices from "../images/service/Maid Services.png";
import sofaCleaning from "../images/service/Sofa Cleaning Services.png";
import deepCleaning from "../images/service/Deep Cleaning Services Dubai.png";
import afterBuilderCleaning from "../images/service/After Builder Cleaning Services.png";
import dailyCleaning from "../images/service/Daily Cleaning Services.png";
import monthlyCleaning from "../images/service/Monthly Cleaning Services.png";
import eventCleaning from "../images/service/Event Cleaning Services.png";
import hospitalCleaning from "../images/service/Hospital Cleaning Services.png";
import laboratoryCleaning from "../images/service/Laboratory Cleaning Services.png";
import afterPartyCleaning from "../images/service/After Party Cleaning Services.png";
import specializedDeepCleaning from "../images/service/Specialized Deep Cleaning Services.png";
import hourlyCleaning from "../images/service/Hourly Cleaning Services.png";
import gymCleaning from "../images/service/Gym Cleaning Services.png";
import garageCleaning from "../images/service/Garage Deep Cleaning Services.png";
import outdoorCleaning from "../images/service/Outdoor Cleaning Services.png";

const dubailandAreas = [
  "Al Safa", "Jumeirah", "Downtown Dubai", "DIFC", "City Walk", 
  "Business Bay", "Nad Al Sheba", "Sheikh Zayed Road", "Al Quoz", 
  "Al Sufouh", "Dubai Hills", "Arabian Ranches", "Dubai Sports City", 
  "Motor City", "Al Barsha", "Jumeirah Golf Estates", "Emirates Hills", 
  "Palm Jumeirah", "JLT", "Dubai Marina", "Jumeirah Park", "Palm Jebel Ali", "Jebel Ali Free Zone"
];

// data
const services: Service[] = [
  {
    id: 1,
    title: "Home Cleaning Services",
    slug: "home-cleaning-services",
    price: "From 35 AED/hr",
    image: homeCleaning,
    intro: "Professional and reliable home cleaning solutions across Dubai tailored to keep your living space spotless and fresh.",
    description: "Bronco Cleaning Services provides comprehensive residential cleaning designed for villas, apartments, and penthouses in Dubai. Our dedicated maids and cleaners ensure your home is completely disinfected, tidy, and welcoming.",
    benefits: [
      "Spotless living rooms, bedrooms, and kitchens",
      "Flexible hourly, weekly, or monthly scheduling",
      "Trained & vetted professional cleaning staff",
      "Eco-friendly and family-safe cleaning products"
    ],
    whyChoose: [
      "Over 99% customer satisfaction across Dubai homes",
      "Prompt arrivals with customized cleaning checklists",
      "Competitive prices with zero hidden charges"
    ],
    process: [
      "Initial assessment of home layout and cleaning needs",
      "Dusting, vacuuming, and sweeping all room areas",
      "Deep sanitization of kitchen counters, sinks, & bathroom fixtures",
      "Final quality check and client sign-off"
    ],
    serviceAreas: dubailandAreas
  },
  {
    id: 2,
    title: "Office & Workplace Cleaning Services",
    slug: "office-workplace-cleaning-services",
    price: "From 150 AED/visit",
    image: officeCleaning,
    intro: "Maintain a pristine, hygienic, and productive working environment with Bronco's office cleaning solutions in Dubai.",
    description: "From corporate towers in Business Bay and DIFC to boutique offices in Sheikh Zayed Road, Bronco Cleaning Services delivers customized corporate cleaning plans ensuring clean desks, disinfected conference rooms, and sanitized restrooms.",
    benefits: [
      "Boost employee health and workplace productivity",
      "Flexible schedules (after-hours or weekend service)",
      "Sanitization of high-touch surfaces & electronic desk areas",
      "Tailored contract packages for corporate offices"
    ],
    whyChoose: [
      "Trusted commercial cleaners in Dubai financial districts",
      "Fully insured, background-checked commercial team",
      "Dedicated account managers for seamless service delivery"
    ],
    process: [
      "Custom workstation and office layout evaluation",
      "Dusting desks, hardware, and common seating areas",
      "Disinfecting doors, handles, pantry area, and restrooms",
      "Trash removal and floor damp mopping"
    ],
    serviceAreas: dubailandAreas
  },
  {
    id: 3,
    title: "Warehouse Cleaning Services",
    slug: "warehouse-cleaning-services",
    price: "Custom Quote",
    image: warehouseCleaning,
    intro: "Heavy-duty industrial and warehouse cleaning services tailored for industrial parks across Dubai & Jebel Ali.",
    description: "Keep industrial spaces compliant with UAE safety standards. Bronco offers specialized floor scrubbing, high-ceiling dust removal, machinery exterior wipedowns, and clutter clearing for logistics facilities and distribution hubs.",
    benefits: [
      "Enhanced workplace safety and operational compliance",
      "High-power industrial floor scrubbers and pressure washers",
      "Effective removal of heavy grime, oil residue, and debris",
      "Flexible off-peak operating times to prevent workflow disruption"
    ],
    whyChoose: [
      "Extensive experience in Jebel Ali Free Zone & Al Quoz industrial units",
      "Adherence to Dubai Municipality hygiene guidelines",
      "Safety-certified crews equipped with full PPE"
    ],
    process: [
      "Debris clearing and dry vacuuming of large floor expanses",
      "High-reach dust elimination from rafters and structural beams",
      "Automated industrial scrubber cleaning of concrete floors",
      "Sanitization of loading bays and staff restrooms"
    ],
    serviceAreas: dubailandAreas
  },
  {
    id: 4,
    title: "Moving-In & Moving-Out Cleaning Services",
    slug: "moving-in-moving-out-cleaning-services",
    price: "From 299 AED",
    image: movingCleaning,
    intro: "Ensure a smooth move with complete deep cleaning for empty properties in Dubai, ready for new tenants or owners.",
    description: "Relocating in Dubai? Bronco Cleaning Services ensures your new villa or apartment is immaculate before you step in, or helps you secure your security deposit with a spotless handover cleaning.",
    benefits: [
      "Complete deep clean of empty cupboards, wardrobes, and cabinets",
      "Thorough kitchen degreasing & appliance sanitization",
      "Deep scrub of tiles, grout, balconies, and window panes",
      "Fast turnaround time for busy move-in schedules"
    ],
    whyChoose: [
      "Guaranteed tenancy handover standard across Dubai communities",
      "Comprehensive checklist covering overlooked spots",
      "Hassle-free online booking and instant confirmation"
    ],
    process: [
      "Full interior walk-through and surface preparation",
      "Interior & exterior cleaning of all built-in cabinetry",
      "Deep tile steam scrubbing and glass polish",
      "Disinfection of sanitary fittings and fixture polishes"
    ],
    serviceAreas: dubailandAreas
  },
  {
    id: 5,
    title: "After Builder Cleaning Services",
    slug: "after-builder-cleaning-services",
    price: "From 399 AED",
    image: afterBuilderCleaning,
    intro: "Specialized post-construction and renovation cleanup across Dubai homes, villas, and commercial premises.",
    description: "Construction dust and plaster residue require professional extraction. Bronco removes fine paint splatters, cement stains, silicone leftover, and heavy dust from newly built or renovated properties in Dubai.",
    benefits: [
      "Elimination of hazardous fine drywall dust and silica residue",
      "Paint mark and mortar removal from glass, tiles, and floors",
      "HEPA-filter industrial vacuuming for healthy air quality",
      "Ready-to-occupy finish for residential and commercial units"
    ],
    whyChoose: [
      "Equipped with commercial scrapers, HEPA vacuums & eco-solvents",
      "Experienced with premier developments in Dubai Hills & Palm Jumeirah",
      "Fast, safety-focused post-renovation cleanup teams"
    ],
    process: [
      "Dry HEPA vacuuming of walls, ceilings, and ledges",
      "Scraping and cleaning paint/silicone off glass windows & frames",
      "Deep machine scrubbing of floor tiles and grout lines",
      "Fine polishing of woodwork, switches, and fixtures"
    ],
    serviceAreas: dubailandAreas
  },
  {
    id: 6,
    title: "Airbnb Cleaning Services",
    slug: "airbnb-cleaning-services",
    price: "From 120 AED/turnover",
    image: airbnbCleaning,
    intro: "Fast, high-standard turnover cleaning & linen refresh tailored for Dubai vacation rental and Airbnb hosts.",
    description: "Maintain 5-star superhost ratings in Dubai Marina, Downtown Dubai, and Palm Jumeirah. Bronco provides rapid guest turnover cleaning, bed linen changes, restocking amenities, and inspection reporting.",
    benefits: [
      "Rapid turnaround between guest check-out and check-in times",
      "Fresh bed linen & towel arrangements",
      "Toiletries & amenity restocking upon request",
      "Detailed damage check report sent to property host"
    ],
    whyChoose: [
      "Trusted by leading holiday home operators in Dubai",
      "Consistent 5-star clean standards for guest reviews",
      "Flexible schedule synchronization with host booking calendars"
    ],
    process: [
      "Strip dirty linens and towels for laundering",
      "Sanitize kitchen, appliances, cookware, and bathroom areas",
      "Vacuum, mop floors, dust all surfaces & make beds neatly",
      "Restock guest essentials and perform quality check"
    ],
    serviceAreas: dubailandAreas
  },
  {
    id: 7,
    title: "Hourly Cleaning Services",
    slug: "hourly-cleaning-services",
    price: "From 35 AED/hr",
    image: hourlyCleaning,
    intro: "Flexible hourly cleaning options in Dubai. Pay only for the exact hours and tasks you require.",
    description: "Need a quick 2-hour clean or half-day house chores? Bronco's hourly cleaning service gives you total freedom to select your priority cleaning tasks and duration.",
    benefits: [
      "Transparent hourly rate with no minimum long-term contracts",
      "Customer directs the cleaning priorities",
      "Option to supply your own materials or use Bronco supplies",
      "Available on short notice across all major Dubai neighborhoods"
    ],
    whyChoose: [
      "Cost-effective solution for quick housekeeping needs",
      "Punctual and courteous cleaning staff",
      "Easy booking via phone or WhatsApp"
    ],
    process: [
      "Customer outlines task priorities upon cleaner arrival",
      "Focused execution of kitchen, room, or laundry tasks",
      "Final walk-through before the allocated hourly window completes"
    ],
    serviceAreas: dubailandAreas
  },
  {
    id: 8,
    title: "Daily Cleaning Services",
    slug: "daily-cleaning-services",
    price: "From 99 AED/day",
    image: dailyCleaning,
    intro: "Consistent daily maid and facility maintenance services for high-traffic Dubai homes and offices.",
    description: "Keep your premises continuously spotless. Our daily cleaning plans ensure your home or office in Dubai enjoys fresh, sanitized spaces every single day.",
    benefits: [
      "Continuous hygiene maintenance for busy households & offices",
      "Dedicated cleaner assigned for daily familiarity",
      "Discounted daily contract packages",
      "Custom daily checklist tailored to your routine"
    ],
    whyChoose: [
      "Reliable daily presence with zero management hassle",
      "Trained in high-standard hospitality guidelines",
      "Comprehensive daily reporting for commercial managers"
    ],
    process: [
      "Morning setup & priority surface disinfection",
      "Routine trash clearance, kitchen tidying, and floor care",
      "End-of-day walkthrough and replenishment"
    ],
    serviceAreas: dubailandAreas
  },
  {
    id: 9,
    title: "Monthly Cleaning Services",
    slug: "monthly-cleaning-services",
    price: "From 799 AED/month",
    image: monthlyCleaning,
    intro: "Hassle-free monthly cleaning subscription plans for residences and commercial properties in Dubai.",
    description: "Lock in lower rates and reliable scheduling with Bronco's monthly cleaning packages. Enjoy recurring scheduled cleans without re-booking every time.",
    benefits: [
      "Significant cost savings compared to one-off bookings",
      "Fixed preferred time slots reserved for your convenience",
      "Free periodic deep cleaning add-ons included",
      "Dedicated account manager for quick adjustments"
    ],
    whyChoose: [
      "Most popular choice for Dubai residents & businesses",
      "Consistent quality assured by periodic audit supervisors",
      "Flexible pause or reschedule policy"
    ],
    process: [
      "Customized monthly schedule mapping based on your lifestyle",
      "Weekly maintenance cleans + monthly deep sanitization",
      "Regular client feedback checks for service perfection"
    ],
    serviceAreas: dubailandAreas
  },
  {
    id: 10,
    title: "Event Cleaning Services",
    slug: "event-cleaning-services",
    price: "Custom Quote",
    image: eventCleaning,
    intro: "Pre-event preparation and post-event cleanup services for corporate galas, private parties, and exhibitions in Dubai.",
    description: "Hosting a corporate conference, wedding, or VIP event in Dubai? Bronco's event cleaning crew manages venue setup cleaning, real-time trash collection, and complete post-event space restoration.",
    benefits: [
      "Pre-event floor polish & seating sanitization",
      "On-site janitorial crew during live events for rapid spill response",
      "Overnight post-event cleanup to restore venue deadlines",
      "Handling waste separation and eco-disposal"
    ],
    whyChoose: [
      "Experienced with Dubai event venues, hotels, and private estates",
      "Rapid deployment of large cleaning teams",
      "Uncompromising standard of venue presentation"
    ],
    process: [
      "Venue inspection and pre-cleaning before guest arrival",
      "Continuous restroom & spill management during event hours",
      "Comprehensive trash pickup, furniture reset, and floor mop after event"
    ],
    serviceAreas: dubailandAreas
  },
  {
    id: 11,
    title: "Hospital Cleaning Services",
    slug: "hospital-cleaning-services",
    price: "Custom Quote",
    image: hospitalCleaning,
    intro: "Strict hospital-grade disinfection and healthcare facility sanitization compliant with Dubai Health Authority regulations.",
    description: "Medical facilities demand clinical cleanliness. Bronco offers certified hospital cleaning in Dubai, targeting patient waiting rooms, doctor clinics, corridors, and operational facilities using DHA-approved disinfectants.",
    benefits: [
      "DHA-compliant medical-grade sanitization protocols",
      "Specialized pathogen and cross-contamination prevention",
      "Certified eco-disinfectants safe for sensitive environments",
      "Rigorous quality auditing and swab-test readiness"
    ],
    whyChoose: [
      "Specially trained healthcare cleaning technicians",
      "Adherence to international infection control standards",
      "24/7 coverage for emergency medical facility needs"
    ],
    process: [
      "Color-coded microfiber cleaning to prevent cross-contamination",
      "High-level electrostatic disinfectant spraying of touch zones",
      "Floor floor scrubbing and bio-hazard compliant waste management"
    ],
    serviceAreas: dubailandAreas
  },
  {
    id: 12,
    title: "Laboratory Cleaning Services",
    slug: "laboratory-cleaning-services",
    price: "Custom Quote",
    image: laboratoryCleaning,
    intro: "Precision decontamination and ultra-clean maintenance for research labs, testing centers, and cleanrooms in Dubai.",
    description: "Laboratories require meticulous care to protect research integrity. Bronco provides specialized laboratory cleaning, bench surface decontamination, and particulate dust control across Dubai facilities.",
    benefits: [
      "Contamination-free surface sanitization protocols",
      "Non-corrosive, lab-safe disinfectant application",
      "Cleanroom class adherence and HEPA filtration cleaning",
      "Specialized floor coating and anti-static treatment"
    ],
    whyChoose: [
      "Strict compliance with laboratory safety protocols",
      "Background-checked, highly trained technical cleaners",
      "Customized schedules aligned with lab operation hours"
    ],
    process: [
      "Controlled entry protocol & protective cleanroom attire wear",
      "Precision wiping of non-sensitive lab countertops & storage units",
      "Floor decontamination and bio-waste bin management"
    ],
    serviceAreas: dubailandAreas
  },
  {
    id: 13,
    title: "After Party Cleaning Services",
    slug: "after-party-cleaning-services",
    price: "From 199 AED",
    image: afterPartyCleaning,
    intro: "Fast morning-after party cleanup for private villas, apartments, and party halls in Dubai.",
    description: "Enjoy your celebrations without worrying about the morning mess. Bronco's after party cleaning team arrives promptly to clear bottles, clean food stains, wash dishes, and restore your home to pristine order.",
    benefits: [
      "Full kitchen cleanup and dishwashing included",
      "Stain removal from upholstery, rugs, and floors",
      "Trash bag consolidation & outdoor disposal",
      "Odor neutralization and room freshening"
    ],
    whyChoose: [
      "Prompt morning arrival so you can relax",
      "Discreet and efficient party cleanup specialists",
      "Serving all Dubai residential communities"
    ],
    process: [
      "Collection of recyclable bottles, food containers, and trash",
      "Deep washing of kitchenware, glasses, and utensils",
      "Living area vacuuming, carpet spot treatment, & floor mopping"
    ],
    serviceAreas: dubailandAreas
  },
  {
    id: 14,
    title: "Deep Cleaning Services Dubai",
    slug: "deep-cleaning-services-dubai",
    price: "From 349 AED",
    image: deepCleaning,
    intro: "Intensive 360-degree deep cleaning solution for homes, villas, and offices throughout Dubai.",
    description: "Over time, hidden dust, grease, and lime scale accumulate in hard-to-reach areas. Bronco's signature Deep Cleaning Service in Dubai covers every nook and cranny with specialized single-disc rotary scrubbers and steam generators.",
    benefits: [
      "Complete kitchen degreasing (hoods, ovens, backsplashes)",
      "High-pressure steam sanitization of bathrooms & grout",
      "Detailing of door frames, baseboards, AC vents, and window tracks",
      "Elimination of deep dust allergens for healthier indoor air"
    ],
    whyChoose: [
      "Dubai's top-rated deep cleaning specialists",
      "Equipped with commercial steam machines & single-disc scrubbers",
      "Comprehensive checklist covering 100+ cleaning points"
    ],
    process: [
      "High-reach dust extraction from ceiling fans, vents, & chandeliers",
      "Steam cleaning of tiles, grout lines, and sanitaryware",
      "Heavy grease extraction in kitchen cabinets & cooktops",
      "Machine floor scrubbing and protective buffing"
    ],
    serviceAreas: dubailandAreas
  },
  {
    id: 15,
    title: "Specialized Deep Cleaning Services",
    slug: "specialized-deep-cleaning-services",
    price: "From 450 AED",
    image: specializedDeepCleaning,
    intro: "Advanced target deep cleaning including steam disinfection, mold removal, and AC duct surface cleaning in Dubai.",
    description: "For properties requiring specialized treatment, Bronco provides custom deep cleaning addressing stubborn mold, heavy limescale buildup, high-glass windows, and deep tile restoration.",
    benefits: [
      "Anti-bacterial steam treatments destroying 99.9% of microbes",
      "Targeted mold remediation in humid bathroom & kitchen areas",
      "AC vent grill vacuuming & bio-sanitization",
      "Restoration of marble, ceramic, and parquet floor surfaces"
    ],
    whyChoose: [
      "Customized solutions for complex property requirements",
      "Advanced chemical-free thermal steam technology",
      "Certified hygiene technicians operating across Dubai"
    ],
    process: [
      "Diagnostic moisture and surface contamination check",
      "Thermal steam application to kill embedded bacteria & mold",
      "Specialized chemical treatment for limescale & hard water deposits",
      "Final air quality freshening & surface seal"
    ],
    serviceAreas: dubailandAreas
  },
  {
    id: 16,
    title: "Gym Cleaning Services",
    slug: "gym-cleaning-services",
    price: "Custom Quote",
    image: gymCleaning,
    intro: "Sanitary cleaning and equipment disinfection solutions for fitness centers and residential gyms in Dubai.",
    description: "Fitness facilities require non-stop hygiene. Bronco provides anti-microbial wiping of workout machinery, weights, rubber floor mats, locker rooms, and sauna facilities in Dubai.",
    benefits: [
      "Elimination of sweat odors, bacteria, and fungal spores",
      "Equipment-safe non-corrosive disinfectant sprays",
      "Frequent locker room & shower deep sanitization",
      "Rubber mat deep scrub and air deodorization"
    ],
    whyChoose: [
      "Trusted by boutique studios & commercial gyms across Dubai",
      "Non-slip floor cleaning techniques for workout safety",
      "Off-peak early morning or midnight cleaning schedules"
    ],
    process: [
      "Disinfectant wiping of cardio machines, barbells, & bench surfaces",
      "Deep scrub of rubber floor tiles and mirror cleaning",
      "Locker room shower, toilet, and sauna steam sanitization"
    ],
    serviceAreas: dubailandAreas
  },
  {
    id: 17,
    title: "Garage Deep Cleaning Services",
    slug: "garage-deep-cleaning-services",
    price: "From 250 AED",
    image: garageCleaning,
    intro: "High-pressure jet washing and oil stain removal for residential villa garages and commercial parking lots in Dubai.",
    description: "Transform your grease-stained garage. Bronco utilizes heavy-duty pressure washers, degreasing agents, and industrial sweepers to clean garage floors, walls, and automatic shutters in Dubai.",
    benefits: [
      "High-PSI water jet pressure washing for stubborn oil stains",
      "Removal of tire marks, grease buildup, and accumulated sand",
      "Wall wipedowns, ceiling cobweb removal & shutter cleaning",
      "Organization and floor surface sealing options"
    ],
    whyChoose: [
      "Powerful mobile pressure washing equipment",
      "Safe eco-friendly degreasers that protect concrete & epoxy floors",
      "Popular choice for villa owners in Palm Jumeirah & Arabian Ranches"
    ],
    process: [
      "Dry sweeping of loose sand, dust, and stored debris",
      "Application of heavy industrial degreasing chemical",
      "High-pressure hot/cold water jet wash across floor & driveway",
      "Water extraction and floor squeegee drying"
    ],
    serviceAreas: dubailandAreas
  },
  {
    id: 18,
    title: "Maid Services",
    slug: "maid-services",
    price: "From 35 AED/hr",
    image: maidServices,
    intro: "Professional, trustworthy, and vetted full-time or part-time maid services in Dubai.",
    description: "Need reliable daily help with ironing, laundry, dishwashing, and general home tidying? Bronco provides carefully vetted, trained, and polite female maids for Dubai residences.",
    benefits: [
      "Vetted, background-verified, and insured maid staff",
      "Flexible part-time hourly or recurring full-time options",
      "Multilingual maids trained in high hospitality standards",
      "Assistance with laundry, ironing, organization, & house maintenance"
    ],
    whyChoose: [
      "Overwhelming positive feedback from Dubai families",
      "Easy replacement guarantee if not 100% satisfied",
      "Consistent maid allocation for regular bookings"
    ],
    process: [
      "Client specifies daily household priorities",
      "Systematic execution of ironing, dusting, kitchen & bed making",
      "Daily progress update and house safety lockup"
    ],
    serviceAreas: dubailandAreas
  },
  {
    id: 19,
    title: "Outdoor Cleaning Services",
    slug: "outdoor-cleaning-services",
    price: "From 299 AED",
    image: outdoorCleaning,
    intro: "Patio, terrace, courtyard, and outdoor villa area pressure washing and dust removal across Dubai.",
    description: "Dubai's climate leads to rapid dust and sand accumulation on outdoor patio tiles, swimming pool decks, pergolas, and garden furniture. Bronco restores your outdoor spaces to pristine comfort.",
    benefits: [
      "Pressure jet wash for patio tiles, interlock pavers, and stone paths",
      "Outdoor furniture cushion dusting & surface washing",
      "Glass balustrade and villa perimeter wall cleaning",
      "Dust extraction from pergolas, gazebos, and sun loungers"
    ],
    whyChoose: [
      "Restores outdoor living areas for entertaining guests",
      "Removes weather-induced sand crusts and hard water marks",
      "Available for villas in Dubai Hills, Jumeirah Park, & Emirates Hills"
    ],
    process: [
      "Dusting off outdoor furniture and decorative features",
      "High-pressure jet wash of patio tiles and perimeter flooring",
      "Glass balustrade polish and water spot removal"
    ],
    serviceAreas: dubailandAreas
  },
  {
    id: 20,
    title: "Sofa Cleaning Services",
    slug: "sofa-cleaning-services",
    price: "From 149 AED",
    image: sofaCleaning,
    intro: "Deep upholstery steam cleaning, stain removal, and sanitization for sofas, armchairs, and dining chairs in Dubai.",
    description: "Revitalize your furniture! Bronco uses professional fabric steam extractors, shampoo scrubbers, and leather conditioners to eliminate deep stains, dust mites, odors, and allergens from your sofas.",
    benefits: [
      "Injection-extraction steam cleaning reaching deep fabric layers",
      "Tough stain removal (coffee, food, pet stains, ink)",
      "Destroys dust mites, bacteria, and trapped odor molecules",
      "Fast drying technology allowing use within hours"
    ],
    whyChoose: [
      "Safe for fabric, velvet, suede, and leather upholstery",
      "Extends furniture life and enhances living room aesthetics",
      "Convenient doorstep service anywhere in Dubai"
    ],
    process: [
      "Fabric inspection and spot test with eco-friendly detergent",
      "Shampooing and rotary agitation to break down embedded dirt",
      "Deep hot water extraction vacuuming out dirty liquid",
      "Deodorization and fabric protector application"
    ],
    serviceAreas: dubailandAreas
  }
];

export default services;