"use client";

import {
  Monitor,
  Car,
  Briefcase,
  HeartPulse,
  Paintbrush,
  GraduationCap,
  CalendarDays,
} from "lucide-react";
import { useState } from "react";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  { key: "tech", label: "Tech Data", icon: Monitor },
  { key: "mechanics", label: "Mechanics", icon: Car },
  { key: "business", label: "Business", icon: Briefcase },
  { key: "medical", label: "Medical", icon: HeartPulse },
  { key: "design", label: "Design", icon: Paintbrush },
  { key: "bootcamp", label: "Bootcamp", icon: GraduationCap },
];

const courses = {
  tech: [
    {
      title: "Web Development",
      desc: "Master Web Fundamentals to Build Your Own Website",
      img: "/images/web.jpg",
      href: "/programs/web-development"
    },
    {
      title: "Android Development",
      desc: "Master Android Programming to Create Your Own Mobile",
      img: "/images/android.jpg",
      href: "/programs/android-development"
    },
    {
      title: "Cyber Security",
      desc: "Master Cloud Security to Safeguard Your Digital Assets",
      img: "/images/cyber.jpg",
      href: "/programs/cyber-security"
    },
  ],
  mechanics: [
    {
      title: "Hybrid & Electric Vehicles",
      desc: "Master Hybrid & Electric Vehicles to Drive the Future of Transportation",
      img: "/images/electric.jpg",
      href: "/programs/electric-vehicles"
    },
    {
      title: "Auto CAD",
      desc: "Master AutoCAD to Design Precision Engineering Projects",
      img: "/images/cad.jpg",
      href: "/programs/auto-cad"
    },
  ],
};

export default function ExplorePrograms() {
  const [activeCategory, setActiveCategory] = useState("tech");

  return (
    <div className="min-h-screen bg-white text-black px-6 py-12">
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore Programs
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-10">
        <motion.div
          className="w-full md:w-1/4 flex flex-col gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold">Select Type</h3>
          {categories.map(({ key, label, icon: Icon }) => (
            <Button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={cn(
                "justify-start gap-2 px-4 py-4 rounded-lg border",
                activeCategory === key
                  ? "text-white hover:text-white bg-black"
                  : "bg-gray-100 text-black hover:bg-black hover:text-white"
              )}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Button>
          ))}
        </motion.div>

        <div className="w-full md:w-3/4 grid pt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses[activeCategory]?.map((course, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={course.href}
                className="rounded-xl border overflow-hidden transition duration-300 hover:shadow-xl border-gray-200"
              >
                <img
                  src={course.img}
                  alt={course.title}
                  className="h-48 w-full object-cover"
                />
                <CardContent className="p-4">
                  <h5 className="text-sm text-gray-500">Microsoft</h5>
                  <h4 className="font-semibold text-base sm:text-lg mb-1">
                    {course.title}
                  </h4>
                  <p className="text-sm text-blue-600 hover:underline cursor-pointer">
                    Access to ChatGPT Plus, M365 Copilot and more
                  </p>
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span className="flex items-center gap-1">🎓 Certification</span>
                    <span className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" /> 2 Months
                    </span>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button className="w-full">View Program</Button>
                    <Button className="w-full">📘 Syllabus</Button>
                  </div>
                </CardContent>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
