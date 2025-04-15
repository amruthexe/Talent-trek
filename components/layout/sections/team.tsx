"use client";

import { motion } from "framer-motion";
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

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

export const TeamSection = () => {
 const teamList: TeamProps[] = [ { imageUrl: "https://i.pravatar.cc/250?img=58", firstName: "Leo", lastName: "Miranda", positions: ["Vue Fronted Developer", "Creator Of This Website"], socialNetworks: [ { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/", }, { name: "Github", url: "https://github.com/leoMirandaa", }, { name: "X", url: "https://x.com/leo_mirand4", }, ], }, { imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", firstName: "Elizabeth", lastName: "Moore", positions: ["UI/UX Designer"], socialNetworks: [ { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/", }, { name: "X", url: "https://x.com/leo_mirand4", }, ], }, { imageUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", firstName: "David", lastName: "Diaz", positions: ["Machine Learning Engineer", "TensorFlow Tinkerer"], socialNetworks: [ { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/", }, { name: "Github", url: "https://github.com/leoMirandaa", }, ], }, { imageUrl: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", firstName: "Sarah", lastName: "Robinson", positions: ["Cloud Native Developer", " Kubernetes Orchestrator"], socialNetworks: [ { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/", }, { name: "Github", url: "https://github.com/leoMirandaa", }, { name: "X", url: "https://x.com/leo_mirand4", }, ], }, { imageUrl: "https://images.unsplash.com/photo-1616805765352-beedbad46b2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", firstName: "Michael", lastName: "Holland", positions: ["DevOps Engineer", "CI/CD Pipeline Mastermind"], socialNetworks: [ { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/", }, ], }, { imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", firstName: "Zoe", lastName: "Garcia", positions: ["JavaScript Evangelist", "Deno Champion"], socialNetworks: [ { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/", }, { name: "Github", url: "https://github.com/leoMirandaa", }, ], }, { imageUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", firstName: "Evan", lastName: "James", positions: ["Backend Developer"], socialNetworks: [ { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/", }, { name: "Github", url: "https://github.com/leoMirandaa", }, { name: "X", url: "https://x.com/leo_mirand4", }, ], }, { imageUrl: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", firstName: "Pam", lastName: "Taylor", positions: ["Fullstack Developer", "UX Researcher"], socialNetworks: [ { name: "X", url: "https://x.com/leo_mirand4", }, ], }, ];

  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
    }
  };

  const introLines = [
    {
      icon: <RocketIcon className="h-5 w-5 text-black" />,
      text: "Meet the minds behind the mission — from front-end wizards and AI engineers to cloud strategists and UX champions.",
    },
    {
      icon: <UsersIcon className="h-5 w-5 text-black" />,
      text: "🚀 Passionate. 🤝 Collaborative. 🌍 Impact-driven.",
    },
    {
      icon: <StarIcon className="h-5 w-5 text-black" />,
      text: "We believe great products are built by great people.",
    },
    {
      icon: <Code2Icon className="h-5 w-5 text-black" />,
      text: "Our diverse team has worked with Fortune 500s and startups alike.",
    },
    {
      icon: <SparklesIcon className="h-5 w-5 text-black" />,
      text: "Every member brings something unique to the table.",
    },
    {
      icon: <EyeIcon className="h-5 w-5 text-black" />,
      text: "Tech is our playground, innovation is our culture.",
    },
    {
      icon: <Globe2Icon className="h-5 w-5 text-black" />,
      text: "Explore the faces shaping the future of this platform.",
    },
    {
      icon: <BookOpenIcon className="h-5 w-5 text-black" />,
      text: "Swipe through their stories below.",
    },
  ];

  return (
    <section id="team" className="container z-10 lg:w-[75%] py-16 sm:py-32">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xl sm:text-2xl text-black tracking-wider font-semibold mb-2">
          Team
        </h2>
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          The Company Dream Team
        </h2>

        <div className="flex flex-col gap-3 items-start max-w-2xl mx-auto text-left text-lg sm:text-xl text-black">
          {introLines.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="pt-1">{item.icon}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-8 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions, socialNetworks },
            index
          ) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg">
                <CardHeader className="p-0 gap-0">
                  <div className="h-full overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt=""
                      width={300}
                      height={300}
                      className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                    />
                  </div>
                  <CardTitle className="py-6 pb-4 px-6 text-xl font-semibold">
                    {firstName}
                    <span className="text-black ml-2">{lastName}</span>
                  </CardTitle>
                </CardHeader>

                {positions.map((position, i) => (
                  <CardContent
                    key={i}
                    className={`pb-0 text-muted-foreground text-base ${
                      i === positions.length - 1 ? "pb-6" : ""
                    }`}
                  >
                    {position}
                    {i < positions.length - 1 && <span>,</span>}
                  </CardContent>
                ))}

                <CardFooter className="space-x-4 mt-auto px-6 pb-4">
                  {socialNetworks.map(({ name, url }, i) => (
                    <Link
                      key={i}
                      href={url}
                      target="_blank"
                      className="hover:opacity-80 transition-all"
                    >
                      {socialIcon(name)}
                    </Link>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};
