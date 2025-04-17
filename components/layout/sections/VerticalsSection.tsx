"use client";

import Link from "next/link";
import {
  GraduationCap,
  Brain,
  Megaphone,
  Gavel,
  Code2,
  Rocket,
  User2,
} from "lucide-react";

const verticals = [
  {
    title: "Data Science",
    courses: "7 Courses",
    icon: <Brain className="text-blue-500 w-10 h-10" />,
    href: "/data-science",
  },
  {
    title: "MBA Course",
    courses: "12 Courses",
    icon: <GraduationCap className="text-red-500 w-10 h-10" />,
  },
  {
    title: "AI & ML",
    courses: "10 Courses",
    icon: <Rocket className="text-purple-500 w-10 h-10" />,
  },
  {
    title: "Software & Tech",
    courses: "42 Courses",
    icon: <Code2 className="text-pink-500 w-10 h-10" />,
  },
  {
    title: "Marketing",
    courses: "5 Courses",
    icon: <Megaphone className="text-yellow-500 w-10 h-10" />,
  },
  {
    title: "Management",
    courses: "34 Courses",
    icon: <User2 className="text-green-600 w-10 h-10" />,
  },
  {
    title: "Law",
    courses: "6 Courses",
    icon: <Gavel className="text-orange-500 w-10 h-10" />,
  },
  {
    title: "Doctorate",
    courses: "8 Courses",
    icon: <GraduationCap className="text-black dark:text-white w-10 h-10" />,
  },
];

export default function VerticalsSection() {
  return (
    <section className="container py-0">
      <div className="pb-6">
        <h2 className="text-3xl text-center md:text-4xl font-bold">
          Choose your <span className="text-black">area of interest</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {verticals.map((v, i) => {
          const CardContent = (
            <div
              className="bg-muted/50 dark:bg-muted/30 rounded-xl border shadow-sm p-6 h-44 flex items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <h4 className="font-semibold text-lg">{v.title}</h4>
                <p className="text-muted-foreground text-sm">{v.courses}</p>
              </div>
              <div className="ml-4">{v.icon}</div>
            </div>
          );

          return v.href ? (
            <Link href={v.href} key={i}>
              {CardContent}
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-gray-500 group-hover:text-black dark:group-hover:text-white">
      Coming Soon
    </span>
            </Link>
          ) : (
            <div key={i}>{CardContent}</div>
          );
        })}
      </div>
    </section>
  );
}
