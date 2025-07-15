import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/mocks/mock-projects';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function ProjectSection() {
  return (
    <section className="bg-teal-700 px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-6xl font-bold text-white md:text-4xl">
          Meus Projetos
        </h2>
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <Card>
                  <CardContent className="flex aspect-square flex-col justify-between p-0">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="flex gap-2">
                        {typeof project.githubLink === 'object' &&
                          project.githubLink.frontend && (
                            <Button variant="outline" size="sm" asChild>
                              <a
                                href={project.githubLink.frontend}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="mr-2 h-4 w-4" />
                                Frontend
                              </a>
                            </Button>
                          )}
                        {typeof project.githubLink === 'object' &&
                          project.githubLink.backend && (
                            <Button variant="outline" size="sm" asChild>
                              <a
                                href={project.githubLink.backend}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="mr-2 h-4 w-4" />
                                Backend
                              </a>
                            </Button>
                          )}
                        {typeof project.githubLink === 'string' && (
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              GitHub
                            </a>
                          </Button>
                        )}
                      </div>
                      {project.liveLink && (
                        <Button variant="default" size="sm" asChild>
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
