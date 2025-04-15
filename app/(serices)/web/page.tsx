
import { ContactSection } from '@/components/layout/sections/contact'
import CurriculumTimeline from '@/components/layout/sections/CurriculumTimeline'
import EnrollCard from '@/components/layout/sections/EnrollCard'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import Reviews from '@/components/layout/sections/Reviews'
import Syllabus from '@/components/layout/sections/Syllabus'
import TechPartners from '@/components/layout/sections/TechPartners'
import { TestimonialSection } from '@/components/layout/sections/testimonial'
import TestimonialsSection from '@/components/layout/sections/TestimonialsSection'
import WebDevPromo from '@/components/layout/sections/WebDevPromo'
import React from 'react'

const page = () => {
  return (
     <div>
    <WebDevPromo/>
  
    <Syllabus/>
    <TechPartners/>
    <CurriculumTimeline/>
    
    <Reviews/><GetCertified/>
    <FAQSection/>
    <ContactSection/>
    <Footer/>
    </div>
  )
}

export default page
