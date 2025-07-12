
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap } from 'lucide-react';

const educationData = [
    {
        degree: "Master of Science in Data Science",
        institution: "University of Management and Technology (UMT)",
        period: "2024 - Present",
        cgpa: "3.57/4.0",
        description: "Pursuing advanced studies in data science, focusing on machine learning, big data analytics, and statistical modeling."
    },
    {
        degree: "Bachelor of Science in Software Engineering",
        institution: "University of Management and Technology (UMT)",
        period: "2020 - 2024",
        cgpa: "3.50/4.0",
        description: "Gained a strong foundation in software development principles, algorithms, and system design, with hands-on project experience."
    }
];

export default function EducationSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="w-full py-16 md:py-24 bg-secondary/50">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 transition-all duration-700 ease-out ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Education</h2>
            <p className="max-w-2xl mt-2 text-muted-foreground">My academic journey and qualifications.</p>
        </div>
        <div className="relative">
             <div className="absolute left-1/2 top-0 h-full w-px bg-border -translate-x-1/2 hidden md:block" />
             {educationData.map((edu, index) => (
                 <div key={index} className="relative mb-12 md:mb-20">
                     <div className="md:absolute top-1/2 left-1/2 w-6 h-6 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 border-4 border-card hidden md:flex items-center justify-center">
                         <GraduationCap className="w-3 h-3 text-primary-foreground" />
                     </div>
                     <Card className={`md:w-[45%] ${index % 2 === 0 ? 'md:ml-auto md:mr-[5%]' : 'md:mr-auto md:ml-[5%]'}`}>
                         <CardHeader>
                             <CardTitle>{edu.degree}</CardTitle>
                             <CardDescription className="flex flex-col sm:flex-row sm:justify-between">
                                 <span>{edu.institution}</span>
                                 <span className="font-semibold text-primary">{edu.period}</span>
                             </CardDescription>
                         </CardHeader>
                         <CardContent>
                             <p className="text-muted-foreground mb-2">{edu.description}</p>
                             <p className="font-bold text-sm">CGPA: {edu.cgpa}</p>
                         </CardContent>
                     </Card>
                 </div>
             ))}
        </div>
      </div>
    </section>
  );
}
