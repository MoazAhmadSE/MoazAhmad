
'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Briefcase } from 'lucide-react';

const experienceData = [
  {
    role: "Front-End Intern",
    company: "Kodesinc",
    period: "7 Mar 2025 – 12 Jul 2025",
    responsibilities: [
      "Worked with React, Tailwind CSS, and Firebase to build modern web interfaces.",
      "Built dynamic UI components and contributed to production.",
      "Collaborated with designers and back-end developers to deliver production-ready features.",
      "Gained hands-on experience in an agile development environment."
    ]
  },
];

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="w-full py-16 md:py-24">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 transition-all duration-700 ease-out ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Professional Experience</h2>
          <p className="max-w-2xl mt-2 text-muted-foreground">My journey in the tech industry, gaining valuable skills and insights.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {experienceData.length > 0 ? (
            <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
              {experienceData.map((exp, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex flex-col sm:flex-row sm:justify-between w-full sm:items-center pr-4">
                      <span className="font-semibold text-lg">{exp.role}</span>
                      <span className="text-sm text-muted-foreground">{exp.company} - {exp.period}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center text-muted-foreground py-8">
                <Briefcase className="mx-auto h-12 w-12 mb-4" />
                <p>No professional experience to display yet. Eager to start my journey!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
