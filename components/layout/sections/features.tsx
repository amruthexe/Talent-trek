import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "GraduationCap",
    title: "Expert-Led Curriculum",
    description:
      "Our courses are designed and delivered by industry professionals, ensuring up-to-date and job-ready content for students at every level.",
  },
  {
    icon: "Laptop",
    title: "Interactive Learning",
    description:
      "We go beyond lectures with hands-on projects, quizzes, and mentorship to ensure practical skill-building in every course.",
  },
  {
    icon: "Target",
    title: "Career-Focused Approach",
    description:
      "Every course is structured with career outcomes in mind — whether it’s job readiness, internships, or placement support.",
  },
  {
    icon: "BookOpen",
    title: "Personalized Progress Tracking",
    description:
      "Track your learning journey with real-time progress dashboards, achievements, and goal-setting features tailored to your needs.",
  },
  {
    icon: "Headphones",
    title: "Doubt Support & Mentorship",
    description:
      "We provide round-the-clock academic support and personalized mentorship to help every learner succeed, no matter their pace.",
  },
  {
    icon: "TrendingUp",
    title: "Industry-Aligned Skills",
    description:
      "Our programs are aligned with in-demand skills and technologies, making our learners standout in interviews and workplaces.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-18 sm:py-24">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Why Choose Our EdTech Platform
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        We’re redefining learning by combining expert instruction, interactive tools, and real-world outcomes to empower learners for the careers of tomorrow.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};