"use client";

import { FOOTER_LINKS } from "@/constants/links";
import Link from "next/link";
import Container from "@/components/global/container";
import Icons from "@/components/global/icons";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/ui/particles";

// FontAwesome icons
import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaGithub
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-10 relative">
      <Container>
        <Wrapper className="relative flex flex-col md:flex-row justify-between pb-40 overflow-hidden footer">
          <Particles
            className="absolute inset-0 w-full -z-10"
            quantity={40}
            ease={10}
            color="#d4d4d8"
            refresh
          />
          <div className="flex flex-col items-start max-w-48">
            <div className="flex items-center gap-2">
             
              <span className="text-xl font-medium">Talent Trak</span>
            </div>
            <p className="text-base max-w mt-4">
              Empower your business with our AI tools.
            </p>
            <Button className="mt-8">
              <Link href="/app">Start for free</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-lg mt-10 md:mt-0">
            {FOOTER_LINKS?.map((section, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h4 className="text-sm font-medium">{section.title}</h4>
                <ul className="space-y-4 w-full">
                  {section.links.map((link, index) => (
                    <li
                      key={index}
                      className="text-sm text-muted-foreground hover:text-foreground transition-all w-full"
                    >
                      <Link href={link.href} className="w-full">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Wrapper>
      </Container>

      {/* Bottom Socials */}
      <Container>
        <Wrapper className="pt-10 flex items-center justify-between relative">
          <p className="text-sm text-secondary-foreground">
            &copy; {new Date().getFullYear()} Talent Trek All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://www.linkedin.com" target="_blank" className="p-1">
              <FaLinkedin className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" className="p-1">
              <FaInstagram className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
            </Link>
            <Link href="https://wa.me/919999999999" target="_blank" className="p-1">
              <FaWhatsapp className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
            </Link>
            <Link href="https://www.facebook.com" target="_blank" className="p-1">
              <FaFacebookF className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
            </Link>
            <Link href="https://github.com" target="_blank" className="p-1">
              <FaGithub className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
            </Link>
          </div>
        </Wrapper>
      </Container>
    </footer>
  );
};

export default Footer;
