import { ContactSection } from '@/components/layout/sections/contact'
import { FooterSection } from '@/components/layout/sections/footer'
import { KeyIndustries } from '@/components/layout/sections/KeyIndustries'
import { WhyTrisetSolutionsSection } from '@/components/layout/sections/WhyTrisetSolutionsSection'
import React from 'react'

const page = () => {
  return (
    <div>
        <KeyIndustries/>
        <WhyTrisetSolutionsSection/>
              <ContactSection/>
              <FooterSection/>
      
    </div>
  )
}

export default page
