import CloudComputingModuleTimeline from '@/components/layout/sections/CloudComputingModuleTimeline'
import { CloudComputingPricingSection } from '@/components/layout/sections/CloudComputingPricingSection'
import CloudComputingPromo from '@/components/layout/sections/CloudComputingPromo'
import CloudComputingSyllabus from '@/components/layout/sections/CloudComputingSyllabus'
import CloudComputingTools from '@/components/layout/sections/CloudComputingTools'
import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import CyberSecurityModuleTimeline from '@/components/layout/sections/CyberSecurityModuleTimeline'
import { CyberSecurityPricingSection } from '@/components/layout/sections/CyberSecurityPricingSection'
import CyberSecurityPromo from '@/components/layout/sections/CyberSecurityPromo'
import CyberSecuritySyllabus from '@/components/layout/sections/CyberSecuritySyllabus'
import CyberSecurityTools from '@/components/layout/sections/CyberSecurityTools'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import Reviews from '@/components/layout/sections/Reviews'
import React from 'react'

const page = () => {
  return (
     <div>
    <CloudComputingPromo/>
  
    <CloudComputingSyllabus/>
    <CloudComputingTools/>
    <CloudComputingModuleTimeline/>
    <CloudComputingPricingSection/>
    
    <Reviews/>
    <Collaborations/>
    <GetCertified/>
    <FAQSection/>
    <ContactSection/>
    <Footer/>
    </div>
  )
}

export default page
