"use client";

import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import { RocketIcon, UsersIcon, StarIcon, Code2Icon, SparklesIcon, EyeIcon, Globe2Icon, BookOpenIcon } from "lucide-react";
import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const topPerformers = ["Leo Miranda", "Zoe Garcia", "Elizabeth Moore"];

export const TeamSection = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const teamList = [
    { imageUrl: "https://i.pravatar.cc/250?img=58", firstName: "Leo", lastName: "Miranda", positions: ["Vue Fronted Developer", "Creator Of This Website"], socialNetworks: [{ name: "LinkedIn", url: "#" }, { name: "Github", url: "#" }, { name: "X", url: "#" }] },
    { imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80", firstName: "Elizabeth", lastName: "Moore", positions: ["UI/UX Designer"], socialNetworks: [{ name: "LinkedIn", url: "#" }, { name: "X", url: "#" }] },
    { imageUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80", firstName: "Zoe", lastName: "Garcia", positions: ["JavaScript Evangelist", "Deno Champion"], socialNetworks: [{ name: "Github", url: "#" }, { name: "LinkedIn", url: "#" }] },
    { imageUrl: "https://images.unsplash.com/photo-1616805765352-beedbad46b2a?q=80", firstName: "Michael", lastName: "Holland", positions: ["DevOps Engineer", "CI/CD Pipeline Mastermind"], socialNetworks: [{ name: "LinkedIn", url: "#" }] },
    { imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80", firstName: "Sarah", lastName: "Robinson", positions: ["Cloud Native Developer", "Kubernetes Orchestrator"], socialNetworks: [{ name: "Github", url: "#" }] },
    { imageUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80", firstName: "Evan", lastName: "James", positions: ["Backend Developer"], socialNetworks: [{ name: "Github", url: "#" }] },
    { imageUrl: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80", firstName: "Pam", lastName: "Taylor", positions: ["Fullstack Developer", "UX Researcher"], socialNetworks: [{ name: "X", url: "#" }] },
    { imageUrl: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80", firstName: "David", lastName: "Diaz", positions: ["Machine Learning Engineer", "TensorFlow Tinkerer"], socialNetworks: [{ name: "Github", url: "#" }] },
  ];

  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn": return <LinkedInIcon />;
      case "Github": return <GithubIcon />;
      case "X": return <XIcon />;
    }
  };

  return (
    <section id="team" className="container z-10 lg:w-[75%]">
      {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={200} />}

      <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl md:text-4xl font-bold mt-8 mb-6">
          🎉 Top Performers of the Month 🎉
        </h2>
        <p className="text-lg text-muted-foreground">We’re proud to recognize the following team members for outstanding contributions:</p>
        <ul className="mt-4 text-xl font-semibold text-green-600">
          {topPerformers.map((name, index) => (
            <li key={index}>🏅 {name}</li>
          ))}
        </ul>
      </motion.div>

      <h3 className="text-center text-2xl font-bold mt-12 mb-6">Our Full Team</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-4 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {teamList.map(({ imageUrl, firstName, lastName, positions, socialNetworks }, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
            <Card className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg">
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image src={imageUrl} alt="" width={300} height={300} className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]" />
                </div>
                <CardTitle className="py-6 pb-4 px-6 text-xl font-semibold">
                  {firstName} <span className="text-black ml-2">{lastName}</span>
                </CardTitle>
              </CardHeader>
              {positions.map((position, i) => (
                <CardContent key={i} className={`pb-0 text-muted-foreground text-base ${i === positions.length - 1 ? "pb-6" : ""}`}>
                  {position}{i < positions.length - 1 && <span>,</span>}
                </CardContent>
              ))}
              <CardFooter className="space-x-4 mt-auto px-6 pb-4">
                {socialNetworks.map(({ name, url }, i) => (
                  <Link key={i} href={url} target="_blank" className="hover:opacity-80 transition-all">
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
