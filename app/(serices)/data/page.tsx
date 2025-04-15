import { ContactSection } from '@/components/layout/sections/contact'
import { DataEntryServices } from '@/components/layout/sections/DataEntryServices'
import { FooterSection } from '@/components/layout/sections/footer'
import { StepsSectionDataEntry } from '@/components/layout/sections/StepsSectionDataEntry'
import {  DigitalMarketingServices } from '@/components/layout/sections/StepsSectionDigitalMarketing'
import { StepsSectionDigitalMarketing } from '@/components/layout/sections/StepsSectionDigitalMarketingReal'
import { WhyTrisetSolutionsSection } from '@/components/layout/sections/WhyTrisetSolutionsSection'
import React from 'react'

const page = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24">
     <div className='text-center pt-12 pb-4 sm:pt-24 '>
     <h2 className="text-lg text-primary tracking-wider mb-2">Our Services</h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Outsourcing all your Data Entry Services 🚀
          </h2>
     </div>
      <DataEntryServices/>
      <StepsSectionDataEntry/>
      <WhyTrisetSolutionsSection/>
      <ContactSection/>
      <FooterSection/>
     
    </div>
  )
}

export default page
