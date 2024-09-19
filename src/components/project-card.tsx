'use client';

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
import { Github, ExternalLink } from 'lucide-react';
import Image, { ImageProps } from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: ImageProps;
  liveUrl: string;
  githubUrl?: string;
}

export const ProjectCard = ({
  title,
  description,
  technologies,
  liveUrl,
  image,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <Card className="w-full overflow-hidden bg-[#060606] border-dark-purple/50">
      <Image className="w-full h-48 object-cover" {...image} />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index}>{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button size="sm" asChild>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            View Live
          </a>
        </Button>
        {githubUrl && githubUrl !== '#' && (
          <Button variant="outline" size="sm" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
