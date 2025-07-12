
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="w-full py-16 md:py-24">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 transition-all duration-700 ease-out ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        <div className="grid gap-10 md:grid-cols-5 items-center">
          <div className="md:col-span-2">
            <Card className="overflow-hidden rounded-full border-4 border-secondary shadow-lg">
              <Image 
                src="https://storage.googleapis.com/aifirebase-cloud-storage-prod/users%2F-Ls_62y-FE-HEb_vS5W%2F-LwR6I7-XgYqQJtC-1b%2Fprofile.png"
                alt="Moaz Ahmad" 
                width={400} 
                height={400} 
                className="object-cover w-full h-full"
              />
            </Card>
          </div>
          <div className="md:col-span-3">
            <Card>
              <CardHeader>
                <h2 className="text-3xl md:text-4xl font-bold font-headline">About Me</h2>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  I am a passionate developer with a strong foundation in both front-end and back-end technologies, allowing me to build comprehensive and scalable applications from the ground up. My expertise in the MERN stack (MongoDB, Express.js, React, Node.js) is complemented by a keen interest and growing proficiency in machine learning.
                </p>
                <p>
                  My journey into technology is driven by a curiosity to solve complex problems and create meaningful user experiences. I thrive on bridging the gap between intricate back-end logic and intuitive user interfaces. Whether it's developing a responsive web app or training a predictive model, I am dedicated to writing clean, efficient, and maintainable code.
                </p>
                <p>
                  I am always eager to learn new technologies and methodologies to stay at the forefront of the ever-evolving tech landscape.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
