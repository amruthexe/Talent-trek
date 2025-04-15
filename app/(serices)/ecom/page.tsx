import { ContactSection } from '@/components/layout/sections/contact'
import { ECommerceAdditionalServices } from '@/components/layout/sections/ECommerceAdditionalServices'
import { ECommerceServices } from '@/components/layout/sections/ECommerceServices'
import { FooterSection } from '@/components/layout/sections/footer'
import { GlowingEffectForApp } from '@/components/layout/sections/GlowingEffectForApp'
import { StepsSectionApp } from '@/components/layout/sections/StepsSectionApp'
import { StepsSectionECommerce } from '@/components/layout/sections/StepsSectionECommerce'
import { WhyTrisetSolutionsSection } from '@/components/layout/sections/WhyTrisetSolutionsSection'
import React from 'react'

const page = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24">
     <div className='text-center pt-12 pb-4 sm:pt-24 '>
     <h2 className="text-lg text-primary tracking-wider mb-2">Our Services</h2>
<h2 className="text-3xl md:text-4xl font-bold mb-4">
Outsourcing all your Ecommerce Service 🚀
</h2>
     </div>
      <ECommerceServices/>
      <ECommerceAdditionalServices/>
      <StepsSectionECommerce />
      <WhyTrisetSolutionsSection/>
      <ContactSection/>
      <FooterSection/>
     
    </div>
  )
}

export default page
