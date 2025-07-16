import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Building2 } from 'lucide-react';
import { experiences } from '@/mocks/mock-experiences';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function ExperienceSection() {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-400 md:text-4xl">
          Experiência Profissional
        </h2>
        <Carousel
          opts={{
            align: 'start',
          }}
          orientation="vertical"
          className="mt-16 w-full"
        >
          <CarouselContent className="-mt-1 h-[640px]">
            {experiences.map((exp, index) => (
              <CarouselItem key={index} className="pt-4 md:basis-1/2">
                <Card key={index} className="bg-gray-200">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl font-bold">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="mt-1 flex items-center text-gray-600">
                          <Building2 className="mr-1 h-4 w-4" />
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="text-sm">
                        <CalendarDays className="mr-1 inline h-4 w-4" />
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-gray-700">{exp.description}</p>
                    <h4 className="mb-2 font-semibold text-gray-800">
                      Responsabilidades:
                    </h4>
                    <ul className="mb-4 list-disc space-y-1 pl-5 text-gray-700">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
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
