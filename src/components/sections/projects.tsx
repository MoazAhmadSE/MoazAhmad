
'use client';

import ProjectCard from '../project-card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import EquiloIcon from '../icons/equilo-icon';

const projectsData = [
  {
    title: 'AuthTodo',
    description: 'A todo application with a secure login system. It leverages React and localStorage to provide custom task lists for each user, ensuring data privacy.',
    technologies: ['React', 'JavaScript', 'HTML/CSS', 'localStorage'],
    githubUrl: 'https://github.com/MoazAhmadSE/Auth_Todo',
    liveUrl: 'https://authtodowithlocalstorage.netlify.app/home',
    imageUrl: '/authtodo.png',
    imageHint: 'task checklist'
  },
  {
    title: 'Fitty-Fit',
    description: 'An interactive gym and fitness website featuring modern workout UIs, animated transitions, and easy browsing of exercises focused on different body parts.',
    technologies: ['React', 'JavaScript', 'Material UI'],
    githubUrl: 'https://github.com/MoazAhmadSE/fitty-fit',
    liveUrl: 'https://fitty-fit07.netlify.app/',
    imageUrl: '/fittyfit.png',
    imageHint: 'fitness workout'
  },
  {
    title: 'NASA APOD Viewer',
    description: 'A React app that fetches and displays NASA’s Astronomy Picture of the Day. Features include a date picker, dark/light modes, and HD image previews.',
    technologies: ['React', 'NASA API', 'CSS'],
    githubUrl: 'https://github.com/MoazAhmadSE/Nasa-React-App',
    liveUrl: 'https://nasa-apod-07.netlify.app/',
    imageUrl: '/nasa.png',
    imageHint: 'space galaxy'
  },
  {
    title: 'Equilo – Group Expense Manager',
    description: 'A modern Splitwise-style expense tracker with smart debt logic, Firebase Auth, Firestore, animated UI, and admin-controlled group management.',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Firestore'],
    githubUrl: 'https://github.com/MoazAhmadSE',
    liveUrl: '#',
    Icon: EquiloIcon,
  },
];

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="projects" className="w-full py-16 md:py-24 bg-card">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 transition-all duration-700 ease-out ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">My Projects</h2>
          <p className="max-w-2xl mt-2 text-muted-foreground">A selection of projects that showcase my skills and passion for development.</p>
        </div>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
