import AboutUsPage from '@/components/layout/sections/AboutUsPage'
import { CommunitySection } from '@/components/layout/sections/community'
import { FooterSection } from '@/components/layout/sections/footer'
import React from 'react'

const page = () => {
  return (
    <div>
        <AboutUsPage/>
        <CommunitySection/>
         <FooterSection/>
      
    </div>
  )
}

export default page
