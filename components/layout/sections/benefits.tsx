import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Users",
    title: "1400+ Hiring Partners",
    description:
      "Discover your dream job with personalized career support.",
  },
  {
    icon: "Book",
    title: "200+ Courses",
    description:
      "Match your goals with the right course.",
  },
  {
    icon: "UserCheck",
    title: "250+ Industry Experts",
    description:
      "Boost your learning with engaging live classes.",
  },
  {
    icon: "UserPlus",
    title: "500+ Career Experts",
    description:
      "Get advice on picking the right course.",
  }
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container  sm:py-12">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">LEARNER SUPPORT & SUCCESS</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What gives us an edge?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Explore how we bring unmatched value with our diverse offerings that empower your learning journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
