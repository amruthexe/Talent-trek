"use client";
import Image from "next/image";
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
} from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaWhatsapp } from "react-icons/fa";

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
  { href: "/programs", label: "Programs" },
  { href: "/team", label: "Team" },
 
  { href: "/about-us", label: "About us" },
  { href: "/carrers", label: "Carrers" },
  
];

const serviceList: ServiceProps[] = [
  {
    title: "WEB DEVELOPMENT",
    href: "/web",
    icon: Code,
    // subServices: [
    //   { title: "Java Full Stack", href: "/web/java", icon: Code },
    //   { title: "Python Full Stack", href: "/web/python", icon: Code },
    //   { title: "MERN Stack", href: "/web/mern", icon: Code },
    // ],
  },
  { title: "APP DEVELOPMENT", href: "/app-dev", icon: Smartphone },
  { title: "CLOUD COMPUTING", href: "/cloud-comp", icon: Cloud },
  { title: "CYBER SECURITY", href: "/cyber-security", icon: ShieldCheck },
 
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hoveredService, setHoveredService] = React.useState<string | null>(null);

  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      {/* Logo */}
      <Link href="/" className="font-bold text-lg flex items-center">
  <div className="flex items-center space-x-2">
    <Image
      src="/logo1.png" 
      alt="Talent Trek Logo"
      width={50} 
      height={50}
      className="rounded-sm object-contain"
    />
    <span className="text-md pb-1 font-bold tracking-wide">Talent Trek</span>

   
  </div>
</Link>


      {/* ✅ Mobile Navbar (Hamburger Menu) */}
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

              {/* ✅ Mobile Accordion Menu for Services */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="services">
                  <AccordionTrigger className="px-4 py-2 no-underline hover:no-underline text-lg hover:text-muted-foreground font-normal">
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
              </Accordion>

              {/* ✅ Other Pages on Mobile */}
              <div className="flex flex-col font-bold gap-2">
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

      {/* ✅ Desktop Navbar with Nested Submenu for WEB DEVELOPMENT */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card font-semibold text-base">
              Courses
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[250px] grid-cols-1 gap-2 p-4">
                <ul className="flex flex-col gap-2">
                  {serviceList.map(({ title, href, icon: Icon, subServices }) => (
                    <div
                      key={title}
                      className="relative"
                      onMouseEnter={() => setHoveredService(title)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      <li className="p-2 rounded-md text-sm hover:bg-muted">
                        <Link
                          href={href}
                          className="flex items-center gap-2 font-medium text-foreground"
                        >
                          <Icon className="w-5 h-5" />
                          {title}
                        </Link>
                      </li>
                      {subServices && hoveredService === title && (
                        <ul className="absolute left-full top-0 ml-2 flex flex-col bg-card shadow-lg rounded-md border p-2 w-[220px] z-50">
                          {subServices.map(({ title, href, icon: SubIcon }) => (
                            <li
                              key={title}
                              className="hover:bg-muted p-2 rounded-md flex items-center gap-2 text-sm"
                            >
                              <SubIcon className="w-4 h-4" />
                              <Link href={href}>{title}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* ✅ Desktop Route Links */}
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

      {/* ✅ Call-to-Action Buttons */}
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
        <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
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