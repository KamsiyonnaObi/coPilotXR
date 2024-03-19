export const navLinks = [
  {
    label: "Home",
    route: "/",
    icon: "/assets/icons/home.svg",
  },

  {
    label: "Upload Image",
    route: "/image-upload",
    icon: "/assets/icons/scan.svg",
  },
  {
    label: "Object Recolor",
    route: "/transformations/add/recolor",
    icon: "/assets/icons/filter.svg",
  },
  {
    label: "Background Remove",
    route: "/transformations/add/removeBackground",
    icon: "/assets/icons/camera.svg",
  },
  {
    label: "Profile",
    route: "/profile",
    icon: "/assets/icons/profile.svg",
  },
  {
    label: "AWS Implementation",
    route: "/aws-docs",
    icon: "/assets/icons/aws.svg",
  },
];

// Data for each plan
export const plans = [
  {
    id: 1,
    name: "CoPilot Free",
    price: 9,
    desc: "Free Forever",
  },
  {
    id: 2,
    name: "CoPilot Pro",
    price: 12,
    desc: "Get 120 Credits per month",
  },
  {
    id: 3,
    name: "CoPilot Enterprise",
    price: 15,
    desc: "Get Unlimited credits",
  },
];

export const points = [
  {
    title: "Amazon Simple Storage Service (S3)",
    description: "Hosts NextJS frontend files (HTML, CSS, JavaScript)",
  },
  {
    title: "Amazon CloudFront",
    description:
      "Acts as a Content Delivery Network (CDN) to cache and distribute the static frontend assets globally, enhancing performance.",
  },
  {
    title: "Application Load Balancer (ALB)",
    description:
      "Distributes incoming traffic to multiple backend instances, ensuring high availability and scalability.",
  },
  {
    title: "DynamoDB",
    description:
      "A fully managed NoSQL database, similar to MongoDB offering automatic scaling high availability.",
  },
  {
    title: "Amazon Cognito",
    description:
      "Facilitates user authentication and authorization, providing secure access control to our application’s resources.",
  },
  {
    title: "Amazon CloudWatch",
    description:
      "Monitors application performance, sets up alarms, and collects logs for debugging and analysis.",
  },
];
