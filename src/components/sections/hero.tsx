
'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import VanillaTilt from 'vanilla-tilt';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin } from 'lucide-react';

export default function HeroSection() {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tiltElement = tiltRef.current;
    if (tiltElement) {
      VanillaTilt.init(tiltElement, {
        max: 8,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        scale: 1.05,
      });
    }

    return () => {
      if (tiltElement && (tiltElement as any).vanillaTilt) {
        (tiltElement as any).vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <section id="hero" className="w-full py-20 md:py-32 lg:py-40 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter">
              Moaz Ahmad
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-semibold">
              Developer & Data Scientist
            </h2>
            <p className="max-w-xl text-muted-foreground">
              Crafting intelligent and robust web solutions. I specialize in building full-stack applications and exploring the frontiers of data science to create impactful technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#contact">Get in Touch</Link>
              </Button>
               <Button asChild size="lg" variant="outline">
                <Link href="/MoazAhmad-Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                </Link>
              </Button>
            </div>
             <div className="flex items-center space-x-2 pt-4">
                 <Button variant="outline" size="icon" asChild>
                    <Link href="https://github.com/MoazAhmadSE" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://linkedin.com/in/moaz-ahmad" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
              </div>
          </div>
          <div className="flex items-center justify-center">
             <div ref={tiltRef} className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative animate-float">
                <Image
                  src="https://placehold.co/400x400.png"
                  alt="Moaz Ahmad"
                  width={400}
                  height={400}
                  className="rounded-full object-cover border-4 border-primary/20 shadow-2xl"
                  priority
                  data-ai-hint="man portrait"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
