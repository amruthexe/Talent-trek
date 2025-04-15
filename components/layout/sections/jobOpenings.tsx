"use client";

import React from "react";
import { ArrowBigDown, Briefcase, Code, Laptop } from "lucide-react"; // Icons for job roles
import Link from "next/link"; // Import the Link component from Next.js

export default function JobsPage() {
  const jobOpenings = [
    {
      title: "App Developer (React)",
      icon: <Laptop className="h-6 w-6 text-red-500" />,
      description:
        "As an App Developer (React), you'll build dynamic web apps with React.js, ensuring they are scalable, high-performance, and user-friendly. You'll collaborate closely with our design team to create seamless UIs.",
      responsibilities: [
        "Develop dynamic and interactive web apps using React.js.",
        "Collaborate with the design team for seamless UI/UX.",
        "Ensure responsive design and cross-browser compatibility.",
        "Participate in code reviews and contribute to continuous improvements.",
        "Optimize applications for maximum performance.",
      ],
    },
    {
      title: "PHP Developer",
      icon: <Code className="h-6 w-6 text-green-500" />,
      description:
        "As a PHP Developer, you'll be responsible for developing robust, scalable web applications using PHP. Your focus will be on optimizing performance and building secure, efficient solutions.",
      responsibilities: [
        "Write clean, scalable, and efficient PHP code.",
        "Collaborate with frontend developers to integrate user-facing elements.",
        "Troubleshoot, test, and maintain core product software and databases.",
        "Optimize applications for maximum speed and scalability.",
        "Ensure secure and reliable integration with third-party tools.",
      ],
    },
    {
      title: "Web Developer",
      icon: <Briefcase className="h-6 w-6 text-blue-500" />,
      description:
        "As a Web Developer, you'll work on creating responsive websites using modern technologies like HTML, CSS, JavaScript, and Bootstrap. Your work will be focused on providing high-quality user experiences and ensuring the sites are SEO-friendly.",
      responsibilities: [
        "Create responsive, SEO-friendly websites.",
        "Work with HTML, CSS, JavaScript, and other frontend technologies.",
        "Test and debug websites to ensure optimum performance.",
        "Collaborate with backend developers for API integrations.",
        "Ensure proper SEO practices for websites to rank higher on search engines.",
      ],
    },
  ];

  return (
    <section id="career" className="bg-white dark:bg-background text-black dark:text-white py-12 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-xl  mb-4 text-center text-red-500">
          Current Openings
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Join Our Team  🚀
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {jobOpenings.map((job, index) => (
            <div
              key={index}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center space-x-4 mb-4">
                {job.icon}
                <h3 className="text-xl font-semibold">{job.title}</h3>
              </div>
              <p className="text-lx text-muted-foreground mb-4">{job.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {job.responsibilities.map((task, idx) => (
                  <li key={idx} className="list-disc ml-5">{task}</li>
                ))}
              </ul>
              <Link
                href="/carrer"
                passHref
                className="mt-4 inline-block py-2 px-6 bg-red-500 text-white rounded-lg text-center w-full hover:bg-red-600 transition"
              >
                Apply Below <ArrowBigDown className="inline"/>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
