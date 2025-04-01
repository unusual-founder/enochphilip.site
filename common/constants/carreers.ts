import { CareerProps } from "../types/careers";

export const CAREERS: CareerProps[] = [
  {
    position: "Backend Developer",
    company: "Triple Multipurpose Technology",
    logo: "/images/careers/triple-multipurpose-technology-logo.jpeg",
    location: "Remote",
    location_type: "Remote",
    type: "Internship",
    start_date: "2024-01",
    end_date: "2024-05",
    industry: "Technology",
    link: "https://www.triplemultipurpose.com/",
    responsibilities: [
      "Developed and maintained the backend systems for a land rental and purchase platform using Node.js and Express.js, ensuring secure and efficient handling of transactions.",
      "Worked with databases like MongoDB and SQL to manage real estate listings, user profiles, and transaction records.", "Integrated third-party APIs for payment processing and geolocation services, allowing users to complete land purchases and rentals seamlessly.",
      "Implemented role-based access control (RBAC) for different user roles (admin, buyer, seller) to ensure appropriate access to resources.",
      "Optimized database queries and API routes for scalability and performance, ensuring the backend could handle increasing traffic and complex queries.",
      "Collaborated with the frontend team to integrate real-time data updates and user actions for a smooth user experience."
    ]
  },
  {
    position: "Full Stack Developer",
    company: "CreatorsLab",
    logo: "/images/careers/creatorslab-logo.png",
    location: "Remote",
    location_type: "Remote",
    type: "Part-time",
    start_date: "2025-02",
    end_date: "2025-04",
    industry: "Technology",
    link: "https://www.creatorslab.cc/",
    responsibilities: [
      "Developed and maintained frontend and backend code using Next.js, Privy.io, and Vercel for seamless integration and deployment.",
      "Implemented secure user authentication and payment gateway integrations using Privy.io and other tools.",
      "Collaborated remotely with a cross-functional team to build and deploy features for clients, following Agile development methodologies.",
      "Ensured project deadlines were met while maintaining a high level of code quality and performance."
    ]
  }
];
