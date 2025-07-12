'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import VanillaTilt from 'vanilla-tilt';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  imageHint?: string;
  Icon?: React.ElementType;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
  imageHint,
  Icon,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    if (cardElement) {
      VanillaTilt.init(cardElement, {
        max: 5,
        speed: 300,
        glare: true,
        "max-glare": 0.2,
        scale: 1.02,
      });
    }

    return () => {
      if (cardElement && (cardElement as any).vanillaTilt) {
        (cardElement as any).vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div ref={cardRef}>
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/20 bg-card">
        {Icon ? (
          <div className="relative w-full aspect-video overflow-hidden flex items-center justify-center bg-secondary/30 p-8">
            <Icon className="w-32 h-32 text-primary" />
          </div>
        ) : imageUrl && (
          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              data-ai-hint={imageHint}
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="font-headline">{title}</CardTitle>
          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
          {liveUrl && liveUrl !== '#' && (
            <Button size="sm" asChild>
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
