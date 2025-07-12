import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

const skills = [
    "JavaScript", "React", "Vue 3", "Node.js", "Python", "SQL",
    "Firebase", "Tailwind CSS", "Pandas"
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Technical Skills</h2>
          <p className="max-w-2xl mt-2 text-muted-foreground">My proficiency across various technologies in development and data science.</p>
        </div>
        <div className="max-w-4xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="w-6 h-6 text-primary" />
                        Core Competencies
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap justify-center gap-3">
                        {skills.map((skill) => (
                            <Badge key={skill} variant="default" className="text-base px-4 py-2 rounded-lg cursor-default">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
