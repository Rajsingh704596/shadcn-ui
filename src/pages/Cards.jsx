import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { MdOutlineDoubleArrow } from "react-icons/md";

const cardData = [
  {
    title: "Frontend",
    url: "/frontend",
    description: "Learn the basics of frontend development.",
    points: [
      "HTML, CSS, and JavaScript fundamentals.",
      "Responsive design with frameworks like Tailwind CSS.",
      "State management in React, Vue, Angular.",
      "API integration and AJAX requests.",
      "Performance optimization techniques.",
    ],
    borderColor: "border-pink-500", // Red border
    bgColor: "bg-pink-50 dark:bg-pink-950", // Light red background
  },
  {
    title: "Backend",
    url: "/backend",
    description: "Master backend development and server-side logic.",
    points: [
      "Node.js and Express for building APIs.",
      "Database management with MongoDB or MySQL.",
      "Authentication and authorization (JWT, OAuth).",
      "RESTful API design and best practices.",
      "Deployment using Docker and cloud services.",
    ],
    borderColor: "border-green-500", // Green border
    bgColor: "bg-green-50 dark:bg-green-950", // Light green background
  },
  {
    title: "Full Stack",
    url: "/fullstack",
    description: "Become a full-stack developer with end-to-end skills.",
    points: [
      "Frontend and backend integration.",
      "MERN stack (MongoDB, Express, React, Node.js).",
      "Real-time applications with WebSockets.",
      "Testing and debugging full-stack applications.",
      "CI/CD pipelines for deployment.",
    ],
    borderColor: "border-blue-500", // Blue border
    bgColor: "bg-blue-50 dark:bg-blue-950", // Light blue background
  },
  {
    title: "DevOps",
    url: "/devops",
    description:
      "Learn DevOps practices for seamless development and deployment.",
    points: [
      "Continuous Integration and Continuous Deployment (CI/CD).",
      "Infrastructure as Code (Terraform, Ansible).",
      "Containerization with Docker and Kubernetes.",
      "Monitoring and logging tools (Prometheus, Grafana).",
      "Cloud platforms like AWS, Azure, or GCP.",
    ],
    borderColor: "border-yellow-500", // Yellow border
    bgColor: "bg-yellow-50 dark:bg-yellow-950", // Light yellow background
  },
  {
    title: "DSA",
    url: "/dsa",
    description: "Master Data Structures and Algorithms for coding interviews.",
    points: [
      "Arrays, Linked Lists, Stacks, and Queues.",
      "Trees, Graphs, and their traversal algorithms.",
      "Dynamic Programming and Greedy Algorithms.",
      "Sorting and Searching techniques.",
      "Problem-solving patterns and strategies.",
    ],
    borderColor: "border-red-500", // Pink border
    bgColor: "bg-red-50 dark:bg-red-950", // Light pink background
  },
];

const Cards = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-15 text-center">
      {cardData.map((card, index) => (
        <Card
          key={index}
          className={`hover:shadow-lg transition-shadow duration-300 ${card.borderColor} ${card.bgColor}`}
        >
          <CardHeader>
            <CardTitle className="text-[1.5rem] font-bold border-b-1 border-b-white ">
              {card.title}
            </CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              {card.points.map((point, i) => (
                <li key={i} className="flex justify-start text-start p-2">
                  <span className="m-1">
                    <VscDebugBreakpointLog />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <button
              className="text-sm font-semibold  dark:text-white bg-gradient-to-r dark:from-purple-800 dark:to-pink-800 dark:hover:from-purple-600 dark:hover:to-pink-600 focus:ring-2 focus:ring-purple-300 transition-all duration-200 p-2 rounded-xl cursor-pointer shadow-md hover:shadow-lg active:scale-95 flex items-center m-auto from-purple-100 to-pink-100 "
              onClick={() => navigate(`${card.url}`)}
            >
              Explore more about {card.title}{" "}
              <span className="text-2xl pl-[4px]">
                <MdOutlineDoubleArrow />
              </span>
            </button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
