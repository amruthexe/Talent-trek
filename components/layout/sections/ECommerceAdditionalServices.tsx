"use client";

import { Upload, Users, MessageSquare, Box } from "lucide-react"; // Using Lucide icons
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function ECommerceAdditionalServices() {
  return (
   < div className="pt-6">
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
    <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Box className="h-6 w-6 text-black dark:text-neutral-400" />}
        title="Custom Development"
        description="Our custom development service builds websites and applications uniquely tailored to meet specific business goals. We create responsive, scalable, and efficient solutions designed to provide a competitive edge with features."
      />
      <GridItem
        area="md:[grid-area:3/7/4/13] xl:[grid-area:2/1/3/5]"
        icon={<Upload className="h-6 w-6 text-teal-500" />}
        title="Migration"
        description="Secure and efficient migration services to move your store to new platforms without disrupting your business operations."
      />

      <GridItem
        area="md:[grid-area:3/1/4/7] xl:[grid-area:1/5/3/8]"
        icon={<Users className="h-6 w-6 text-indigo-500" />}
        title="Marketplaces"
        description="Integration with popular marketplaces to expand your reach and drive more sales through multi-channel distribution."
      />

      <GridItem
        area="md:[grid-area:4/7/5/13] xl:[grid-area:1/8/2/13]"
        icon={<MessageSquare className="h-6 w-6 text-red-500" />}
        title="ChatBot"
        description="Implementing AI-powered chatbots to provide instant customer support and enhance user engagement."
      />

  
    </ul>
   </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-black dark:text-neutral-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
