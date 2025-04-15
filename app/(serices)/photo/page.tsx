import { ContactSection } from '@/components/layout/sections/contact'
import { FooterSection } from '@/components/layout/sections/footer'
import { Photogrammetry } from '@/components/layout/sections/Photo'
import { WhyTrisetSolutionsSection } from '@/components/layout/sections/WhyTrisetSolutionsSection'
import React from 'react'

const page = () => {
  return (
    <div className="px-4 mt-12 sm:px-8 md:px-16 lg:px-24">
      {/* Content with padding added for left and right spacing */}
      <div className="text-center mb-12">
        <h2 className="text-lg text-primary tracking-wider mb-2">
          Our Photogrammetry Services
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Enhance your projects with accurate and detailed photogrammetry solutions tailored for various applications.
        </h2>
      </div>
     <Photogrammetry/>
      <WhyTrisetSolutionsSection/>
      <ContactSection/>
      <FooterSection/>
    
     
    </div>
  )
}

export default page
