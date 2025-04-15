import Wrapper from "@/components/global/wrapper";
import FeaturesSectionDemo from "@/components/layout/sections/Afeatures";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import Companies from "@/components/layout/sections/Companies";
import { ContactSection } from "@/components/layout/sections/contact";
import CTA from "@/components/layout/sections/cta";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { HeroSection } from "@/components/layout/sections/hero";
import  Container from "@/components/global/container";
import { Programs } from "@/components/layout/sections/Programs";
import VerticalsSection from "@/components/layout/sections/VerticalsSection";
import VisitCenterSection from "@/components/layout/sections/VisitCenterSection";
import Reviews from "@/components/layout/sections/Reviews";
import Footer from "@/components/layout/sections/footer";
import NewPricing from "@/components/layout/sections/Newpricing";
import ExplorePrograms from "@/components/layout/sections/sideprograms";
import CommunityStats from "@/components/layout/sections/CommunityStats";
import { PlacementLogos } from "@/components/layout/sections/PlacementLogos";
import  MarqueeSection  from "@/components/layout/sections/MarqueeSection";
import Collaborations from "@/components/layout/sections/Collaborations";
export const metadata = {
  title: "Talent trek",
  description: "Talent trek",
  openGraph: {
    type: "website",
    url: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Talent trek",
  description: "talent trek",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Shadcn - Landing template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Shadcn - Landing template",
    description: "Free Shadcn landing page for developers",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <Container >
                    <Companies />
                </Container>
                <Programs/>
                <VerticalsSection/>
                <ExplorePrograms/>
                <FeaturesSectionDemo/>
                <CommunityStats/>
              
 
      <FeaturesSection />
  
     
  
      <NewPricing/>
      <Collaborations/>

     <Reviews/>
      <ContactSection />
      <FAQSection />
     
     
      {/* <CommunitySection /> */}
      <BenefitsSection />
      <VisitCenterSection/>

     <Wrapper className=" relative">
     <CTA/>
     </Wrapper>
      <Footer/>
     
    </>
  );
}
