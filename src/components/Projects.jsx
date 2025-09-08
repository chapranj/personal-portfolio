import React from "react";
import {
  Github,
  ExternalLink,
  Calendar,
  Users,
  Code,
  Database,
  Zap,
} from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "PathSense",
      subtitle: "Capstone Project",
      description:
        "A full-stack event management platform similar to Eventbrite, enabling users to create, manage, and register for events with secure payment processing and interactive mapping.",
      longDescription: [
        "Built a comprehensive event management platform with multi-organizer support and attendee engagement features",
        "Integrated Stripe for secure payment processing, supporting both free and paid ticketing workflows",
        "Implemented interactive event mapping with Mapbox to visualize event locations and enhance user experience",
        "Developed advanced ticket management system with real-time availability tracking",
      ],
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Stripe",
        "Mapbox",
      ],
      githubUrl: "https://github.com/chapranj/pathsense.git",
      liveUrl: "#",
      date: "April 2025",
      category: "Full-Stack",
      gradient: "from-purple-500 to-pink-600",
      icon: <Calendar />,
    },
    {
      title: "Ticket Ease",
      subtitle: "Task Management System",
      description:
        "A comprehensive task management application built with the MERN stack, similar to JIRA. Features ticket creation, assignment, and administrative controls.",
      longDescription: [
        "Developed a full-featured task management system with role-based access control",
        "Implemented CRUD operations for tickets with real-time updates and notifications",
        "Built user authentication and authorization system with admin privileges",
        "Designed responsive UI with drag-and-drop functionality for ticket management",
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      githubUrl: "https://github.com/chapranj/Ticketoes.git",
      liveUrl: "#",
      date: "2024",
      category: "Web Application",
      gradient: "from-blue-500 to-cyan-600",
      icon: <Users />,
    },
    {
      title: "Point of Sale System",
      subtitle: "Restaurant Management",
      description:
        "Dynamic POS application built with Java and JDBC that generates restaurant interfaces from configuration files, enabling efficient order processing and database management.",
      longDescription: [
        "Created a dynamic POS system that adapts to different restaurant configurations",
        "Implemented efficient database management with JDBC for order processing and inventory tracking",
        "Built customizable interface generation from formatted text files for easy deployment",
        "Developed comprehensive reporting system for sales analytics and inventory management",
      ],
      technologies: ["Java", "JDBC", "MySQL", "Swing", "Maven"],
      githubUrl: "https://github.com/chapranj/POS-Application.git",
      liveUrl: "#",
      date: "2024",
      category: "Desktop Application",
      gradient: "from-green-500 to-emerald-600",
      icon: <Code />,
    },
    {
      title: "Thread Talk",
      subtitle: "Employee Discussion Forum",
      description:
        "Internal employee discussion platform built with Java Spring Boot, featuring threaded conversations, user management, and administrative controls.",
      longDescription: [
        "Built a comprehensive internal communication platform for employee engagement",
        "Implemented threaded discussion system with real-time message posting and updates",
        "Developed user authentication and role-based permissions for content moderation",
        "Created administrative dashboard for thread management and user oversight",
      ],
      technologies: ["Java", "Spring Boot", "React.js", "MySQL", "Bootstrap"],
      githubUrl: "https://github.com/chapranj/ThreadTalkFS.git",
      liveUrl: "#",
      date: "2024",
      category: "Web Platform",
      gradient: "from-orange-500 to-red-600",
      icon: <Database />,
    },
  ];

  const ProjectCard = ({ project }) => (
    <div
      className={`relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 cursor-pointer overflow-visible`}
    >
      {/* Project Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white text-xl mr-4`}
            >
              {project.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-sm text-purple-400 font-medium">
                {project.subtitle}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full">
              {project.date}
            </span>
            <span
              className={`text-xs text-white px-2 py-1 rounded-full bg-gradient-to-r ${project.gradient}`}
            >
              {project.category}
            </span>
          </div>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="p-6">
        <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
          <Zap className="w-4 h-4 mr-2 text-purple-400" />
          Key Features
        </h4>
        <ul className="space-y-2 mb-6">
          {project.longDescription.map((feature, featureIndex) => (
            <li
              key={featureIndex}
              className="text-gray-400 text-sm flex items-start"
            >
              <span className="w-1 h-1 bg-purple-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gray-800/50 text-white px-4 py-2 rounded-lg text-sm hover:scale-110 transition-transform"
          >
            <Github className="w-4 h-4" />
            <span>View Code</span>
          </a>
          {project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-lg text-sm hover:scale-110 transition-transform`}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-20 px-4"
      id="projects"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-400 bg-clip-text text-transparent mb-6 leading-tight">
            Featured Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
