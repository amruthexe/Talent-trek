"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, FileText, Clock, BadgeCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Generative AI Foundations Certificate Program",
    subtitle: "Access to ChatGPT Plus, M365 Copilot and more",
    duration: "2 Months",
    image: "/images/genai-foundation.jpg",
    slug: "genai-foundations",
    syllabus: "/syllabus/genai-foundations.pdf",
  },
  {
    title: "Generative AI Mastery Certificate for Data Analysis",
    subtitle: "Access to ChatGPT Plus, M365 Copilot and more",
    duration: "2 Months",
    image: "/images/genai-data.jpg",
    slug: "genai-data-analysis",
    syllabus: "/syllabus/genai-data-analysis.pdf",
  },
  {
    title: "Generative AI Mastery Certificate for Software Development",
    subtitle: "Access to ChatGPT Plus, M365 Copilot and more",
    duration: "2 Months",
    image: "/images/genai-software.jpg",
    slug: "genai-software-development",
    syllabus: "/syllabus/genai-software-development.pdf",
  },
  {
    title: "Generative AI Mastery Certificate for Managerial Excellence",
    subtitle: "Access to ChatGPT Plus, M365 Copilot and more",
    duration: "2 Months",
    image: "/images/genai-manager.jpg",
    slug: "genai-managerial-excellence",
    syllabus: "/syllabus/genai-managerial-excellence.pdf",
  },
  {
    title: "Generative AI Mastery Certificate for Content Creation",
    subtitle: "Access to ChatGPT Plus, M365 Copilot and more",
    duration: "2 Months",
    image: "/images/genai-content.webp",
    slug: "genai-content-creation",
    syllabus: "/syllabus/genai-content-creation.pdf",
  },
];

export const Programs = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visiblePrograms = programs.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < programs.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="py-8 bg-background dark:bg-black">
      <div className="container relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Master Generative AI with <span className="text-black">Microsoft</span>
        </h2>

        {/* Desktop View with Arrows */}
        <div className="mt-10 hidden md:block relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
            <AnimatePresence mode="wait">
              {visiblePrograms.map((program) => (
                <motion.div
                  key={program.slug}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="bg-card dark:bg-muted/40 border rounded-2xl shadow-sm p-4 flex flex-col justify-between"
                >
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={400}
                    height={200}
                    className="rounded-md object-cover w-full h-[180px]"
                  />
                  <div className="mt-4">
                    <h4 className="text-muted-foreground text-sm font-medium">Microsoft</h4>
                    <h3 className="text-lg font-semibold mt-1 mb-2">
                      {program.title}
                    </h3>
                    <p className="text-sm text-black dark:text-blue-400">
                      {program.subtitle}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mt-4">
                      <span className="flex items-center gap-1"><BadgeCheck className="w-4 h-4" /> Certification</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {program.duration}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between items-center gap-2">
                    <Link href={`/related_course/${program.slug}`} className="w-full">
                      <Button variant="outline" className="w-full">
                        View Program
                      </Button>
                    </Link>
                    <a href={program.syllabus} download className="w-full">
                      <Button className="w-full bg-black text-white hover:bg-blue-900 dark:bg-blue-900">
                        <FileText className="w-4 h-4 mr-1" /> Syllabus
                      </Button>
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {startIndex > 0 && (
            <div className="absolute top-[50%] -translate-y-1/2 left-0 -ml-12">
              <Button
                onClick={handlePrev}
                variant="ghost"
                size="icon"
                className="rounded-full bg-blue-950 text-white hover:bg-blue-900"
              >
                <ArrowLeft className="w-6 h-6" />
              </Button>
            </div>
          )}

          {startIndex + 3 < programs.length && (
            <div className="absolute top-[50%] -translate-y-1/2 right-0 -mr-12">
              <Button
                onClick={handleNext}
                variant="ghost"
                size="icon"
                className="rounded-full bg-blue-950 text-white hover:bg-blue-900 dark:bg-blue-900"
              >
                <ArrowRight className="w-6 h-6" />
              </Button>
            </div>
          )}
        </div>

        {/* Mobile View: vertical scroll without arrows */}
        <div className="mt-10 flex flex-col gap-6 md:hidden">
          {programs.map((program) => (
            <motion.div
              key={program.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-card dark:bg-muted/40 border rounded-2xl shadow-sm p-4 flex flex-col justify-between"
            >
              <Image
                src={program.image}
                alt={program.title}
                width={400}
                height={200}
                className="rounded-md object-cover w-full h-[180px]"
              />
              <div className="mt-4">
                <h4 className="text-muted-foreground text-sm font-medium">Microsoft</h4>
                <h3 className="text-lg font-semibold mt-1 mb-2">
                  {program.title}
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  {program.subtitle}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mt-4">
                  <span className="flex items-center gap-1"><BadgeCheck className="w-4 h-4" /> Certification</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {program.duration}</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center gap-2">
                <Link href={`/related_course/${program.slug}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    View Program
                  </Button>
                </Link>
                <a href={program.syllabus} download className="w-full">
                  <Button className="w-full bg-blue-900 text-white hover:bg-blue-900">
                    <FileText className="w-4 h-4 mr-1" /> Syllabus
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};