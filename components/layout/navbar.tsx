"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  ChevronsDown,
  Github,
  Menu,
  Code,
  Smartphone,
  ShoppingCart,
  BarChart,
  Database,
  ArrowRight,
  PhoneCall,
  Camera,
  Cloud,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

interface RouteProps {
  href: string;
  label: string;
}

interface ServiceProps {
  title: string;
  href: string;
  icon: React.ElementType;
  subServices?: ServiceProps[];
}

const routeList: RouteProps[] = [
  { href: "/team", label: "Team" },
  
  { href: "/carrers", label: "Carrers" },
  { href: "/about-us", label: "About us" },
  { href: "/support", label: "Support" },
];

const serviceList: ServiceProps[] = [
  { title: "WEB DEVELOPMENT", href: "/web", icon: Code },
  { title: "APP DEVELOPMENT", href: "/app-dev", icon: Smartphone },
  { title: "CLOUD COMPUTING", href: "/cloud-comp", icon: Cloud },
  { title: "CYBER SECURITY", href: "/cyber-security", icon: ShieldCheck },
];

const programList: ServiceProps[] = [
  { title: "All programs", href: "/programs", icon: GraduationCap },
  { title: "Fast Track 45", href: "/programs/fast-track", icon: GraduationCap },
  { title: "Skill Boost 2", href: "/programs/skill-boost", icon: GraduationCap },
  { title: "Pro Edge 3", href: "/programs/pro-edge", icon: GraduationCap },
  { title: "Dual Path 5", href: "/programs/dual-pack", icon: GraduationCap },
  { title: "Career Pro 6", href: "/programs/career-pro", icon: GraduationCap },
  { title: "Campus+ LearnTrack", href: "/programs/campus-plus", icon: GraduationCap },
  { title: "Campus+ ProjectPro", href: "/programs/campus-project-pro", icon: GraduationCap },
  { title: "Campus+ CodeStart", href: "/programs/campus-code-start", icon: GraduationCap },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hoveredService, setHoveredService] = React.useState<string | null>(null);

  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      {/* Logo */}
      <Link href="/" className=" pl-4 font-bold text-lg flex items-center">
        <div className="flex items-center space-x-2">
          <span className="text-lg pb-1 font-bold tracking-wide text-black">
            Talent Trek 
          </span>
        </div>
      </Link>

      {/* ✅ Mobile Navbar */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu onClick={() => setIsOpen(!isOpen)} className="cursor-pointer lg:hidden" />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    Talent Trek
                  </Link>
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Accordion Menu */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="services">
                  <AccordionTrigger className="px-4 py-2 text-lg hover:text-muted-foreground font-normal">
                    Courses
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-2">
                    {serviceList.map(({ title, href, icon: Icon }) => (
                      <Button
                        key={title}
                        onClick={() => setIsOpen(false)}
                        asChild
                        variant="ghost"
                        className="justify-start text-base"
                      >
                        <Link href={href} className="flex items-center gap-2">
                          <Icon className="w-4 h-4" /> {title}
                        </Link>
                      </Button>
                    ))}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="programs">
                  <AccordionTrigger className="px-4 py-2 text-lg hover:text-muted-foreground font-normal">
                    Programs
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-2">
                    {programList.map(({ title, href, icon: Icon }) => (
                      <Button
                        key={title}
                        onClick={() => setIsOpen(false)}
                        asChild
                        variant="ghost"
                        className="justify-start text-base"
                      >
                        <Link href={href} className="flex items-center gap-2">
                          <Icon className="w-4 h-4" /> {title}
                        </Link>
                      </Button>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="flex flex-col font-bold gap-2 mt-4">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start font-bold"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* ✅ Desktop Navigation */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card font-semibold text-base">Courses</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[250px] grid-cols-1 gap-2 p-4">
                <ul className="flex flex-col gap-2">
                  {serviceList.map(({ title, href, icon: Icon }) => (
                    <li key={title} className="p-2 rounded-md text-sm hover:bg-muted">
                      <Link href={href} className="flex items-center gap-2 font-medium text-foreground">
                        <Icon className="w-5 h-5" />
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card font-semibold text-base">Programs</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[250px] grid-cols-1 gap-2 p-4">
                <ul className="flex flex-col gap-2">
                  {programList.map(({ title, href, icon: Icon }) => (
                    <li key={title} className="p-2 rounded-md text-sm hover:bg-muted">
                      <Link href={href} className="flex items-center gap-2 font-medium text-foreground">
                        <Icon className="w-5 h-5" />
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="font-semibold px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* ✅ CTAs */}
      <div className="hidden lg:flex">
        <Button asChild className="mr-4 font-bold group/arrow">
          <Link
            href="https://wa.me/919848814614?text=Hi%2C%20I'm%20interested%20in%20booking%20a%20demo%20with%20your%20team."
            target="_blank"
          >
            Book a demo now 🚀
            <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
          </Link>
        </Button>
        <Button asChild size="sm" variant="ghost">
          <Link
            href="https://wa.me/919848814614?text=Hi%2C%20I'm%20interested%20in%20booking%20a%20demo%20with%20your%20team."
            target="_blank"
          >
            <FaWhatsapp className="size-5" />
          </Link>
        </Button>
      </div>
    </header>
  );
};
