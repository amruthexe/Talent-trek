import Wrapper from "@/components/global/wrapper";
import FeaturesSectionDemo from "@/components/layout/sections/Afeatures";
import { BenefitsSection } from "@/components/layout/sections/benefits";
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
import Collaborations from "@/components/layout/sections/Collaborations";
export const metadata = {
  title: "Talent Trek | Online Learning Platform for Skill Development",
  description:
    "Talent Trek is an edtech startup offering affordable, industry-relevant online courses in web development, coding, and job-ready skills. Learn anywhere, anytime with Talent Trek E-Learning.",
  openGraph: {
    type: "website",
    url: "https://www.talenttrekelearning.info/", // Update to your actual domain
    title: "Talent Trek | E-Learning Platform for Future Skills",
    description:
      "Join Talent Trek E-Learning – a modern education startup helping students and professionals master web development, coding, and career-boosting skills.",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg", // Replace with your real OG image
        width: 1200,
        height: 630,
        alt: "Talent Trek - Online Learning for Web Development and Career Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.talenttrekelearning.info/", // Replace with your domain
    title: "Talent Trek | Learn Web Development & Job-Ready Skills Online",
    description:
      "Master coding, web development, and career skills with Talent Trek's expert-led, affordable courses. Start learning today.",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg", // Update if needed
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
