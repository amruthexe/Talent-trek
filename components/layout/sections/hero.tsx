"use client";
import Link from "next/link";
import { ArrowRight, ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/global/container";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section className="relative pt-2 overflow-hidden">
      {/* 🔳 Grid background using Tailwind */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:32px_32px]" />
     
      <div className="container relative z-10 w-full pt-6 lg:pt-10">
        <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto pb-10">

          {/* === Hero Text Section === */}
          <div className="text-center pt-8 space-y-10">
            <Container delay={0.0}>
              <div className="pl-2 pr-1 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto">
                <div className="w-3.5 h-3.5 rounded-full bg-primary/40 flex items-center justify-center relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping"></div>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  </div>
                </div>
                <span className="inline-flex items-center justify-center gap-2 animate-text-gradient animate-background-shine bg-black bg-[200%_auto] bg-clip-text text-sm text-transparent">
                  India’s Fastest Growing 
                  <span className="text-xs text-secondary-foreground px-1.5 py-0.5 rounded-full bg-black text-white flex items-center justify-center">
                    Learn More
                    <ArrowRightIcon className="w-3.5 h-3.5 ml-1  text-white" />
                  </span>
                </span>
              </div>
            </Container>

            <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
              <h1>
                Empower Your
                <span className="text-transparent px-2 bg-gradient-to-r from-black to-gray-900 bg-clip-text">
                  Future
                </span>
                with <br />In-Demand Skills
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium pt-4 text-gray-800">
                Learn from real-world experts. Build job-ready skills. Get career support.
              </h2>
              <div className="text-lg md:text-xl pt-2 font-medium text-gray-700">
                <TypeAnimation
                  sequence={[
                    "Web Development",
                    2000,
                    "App Development",
                    2000,
                    "Data Science",
                    2000,
                    "AI & Machine Learning",
                    2000,
                    "UI/UX Design",
                    2000,
                  ]}
                  wrapper="span"
                  speed={40}
                  className="inline-block text-black font-semibold"
                  repeat={Infinity}
                />
              </div>
            </div>

            <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
              Launch your career with programs built for learners and future leaders. Learn tech, business, and design the practical way. Get certified. Get placed.
            </p>

            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <Button asChild className="w-5/6 md:w-1/4 font-bold group/arrow">
                <Link
                  href="https://wa.me/919848814614?text=Hi%2C%20I'm%20interested%20in%20booking%20a%20demo%20with%20your%20team."
                  target="_blank"
                >
                  Book a demo
                  <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="secondary"
                className="w-5/6 md:w-1/4 font-bold"
              >
                <Link href="tel:+917892793203">Call Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
