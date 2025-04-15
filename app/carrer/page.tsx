import Wrapper from '@/components/global/wrapper';
import CareersPage from '@/components/layout/sections/CareersPage';
import { ContactSection } from '@/components/layout/sections/contact';
import { FooterSection } from '@/components/layout/sections/footer';
import JobsPage from '@/components/layout/sections/jobOpenings';
import { StepsSectionCareers } from '@/components/layout/sections/StepsSectionCareers';
import { StepsSectionDataEntry } from '@/components/layout/sections/StepsSectionDataEntry';
import { WhyTrisetSolutionsSection } from '@/components/layout/sections/WhyTrisetSolutionsSection';
import React from 'react';

const page = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="text-center pt-12 pb-4 sm:pt-24">
        <h2 className="text-lg text-primary tracking-wider mb-2">Career Opportunities</h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join Our Team and Make an Impact 🚀
        </h2>
      </div>
      <div className="px-30 md:px-16"> {/* Added more padding around the form */}
      <JobsPage/>
  
      </div>
      <Wrapper className="py-20 relative">
        <CareersPage />
        </Wrapper>

   
     
      <StepsSectionCareers />
      <WhyTrisetSolutionsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default page;
