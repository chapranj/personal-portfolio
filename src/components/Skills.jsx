import React, { useState, useEffect } from "react";
import { Code, Server, Database, Cloud, Brain, Monitor } from "lucide-react";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code />,
      gradient: "bg-gradient-to-r from-purple-500 to-pink-600",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
      ],
    },
    {
      title: "Frontend",
      icon: <Monitor />,
      gradient: "bg-gradient-to-r from-sky-500 to-blue-600",
      skills: [
        { name: "React", level: 92 },
        { name: "Angular", level: 80 },
      ],
    },
    {
      title: "Backend",
      icon: <Server />,
      gradient: "bg-gradient-to-r from-green-500 to-teal-600",
      skills: [
        { name: "Spring Boot", level: 90 },
        { name: "Express / Node.js", level: 95 },
        { name: "Django", level: 75 },
        { name: "FastAPI", level: 85 },
      ],
    },
    {
      title: "Databases",
      icon: <Database />,
      gradient: "bg-gradient-to-r from-yellow-500 to-red-500",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 85 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud />,
      gradient: "bg-gradient-to-r from-purple-600 to-pink-500",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Terraform", level: 85 },
        { name: "Docker", level: 80 },
      ],
    },
    {
      title: "AI & ML",
      icon: <Brain />,
      gradient: "bg-gradient-to-r from-indigo-500 to-purple-600",
      skills: [
        { name: "PyTorch", level: 85 },
        { name: "Scikit-learn", level: 88 },
        { name: "OpenAI API", level: 75 },
      ],
    },
  ];

  // Animate skill bars on mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-20 px-4 relative overflow-hidden"
      id="skills"
    >
      {/* Background Glows */}
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-sky-500/5 blur-3xl animate-pulse delay-2000 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-400 mb-6 leading-tight">
            Technical Skills
          </h1>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-4 rounded"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various
            domains of software development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`relative rounded-xl border border-gray-700 bg-gray-800/50 backdrop-blur-md p-6 cursor-pointer transition-transform hover:-translate-y-2 hover:scale-105 shadow-lg hover:shadow-purple-500/10`}
              onClick={() =>
                setActiveCategory(activeCategory === index ? null : index)
              }
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveCategory(activeCategory === index ? null : index);
                }
              }}
              aria-expanded={activeCategory === index}
              aria-label={`${category.title} skills category`}
            >
              {/* Category Header */}
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl mr-4 ${category.gradient}`}
                >
                  {category.icon}
                </div>
                <h2 className="text-lg font-semibold">{category.title}</h2>
              </div>

              {/* Skills List */}
              <div className="flex flex-col gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col gap-1">
                    <div className="flex justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-gray-700 overflow-hidden">
                      <div
                        className={`${category.gradient} h-full rounded-full transition-all duration-1000`}
                        style={{
                          width: mounted ? `${skill.level}%` : "0%",
                          transitionDelay: `${skillIndex * 200}ms`,
                        }}
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name} proficiency: ${skill.level}%`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Glow Overlay */}
              <div
                className={`absolute inset-0 rounded-xl opacity-0 pointer-events-none ${category.gradient} hover:opacity-5`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
