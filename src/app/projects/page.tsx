import { ProjectCard } from '@/components/project-card';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { H1 } from '@/components/ui/headings/h1';
import { P } from '@/components/ui/text/p';
import { fetchProjects } from '@/lib/datocms';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Projects | Blacklyexaclty',
  description:
    'Explore a curated selection of my latest frontend development projects, showcasing skills in responsive design, modern frameworks, and seamless user experiences.',
};

const ProjectsPage = async () => {
  const { allProjects } = await fetchProjects();

  return (
    <main className="pt-16">
      <BackgroundBeams className="z-[-1]" />
      <H1 className="py-1">Projects</H1>
      <P className="lg:w-1/2">
        Explore a curated selection of my latest frontend development projects,
        showcasing skills in responsive design, modern frameworks, and seamless
        user experiences.
      </P>
      <div className="grid grid-cols-1 mt-12 gap-6 lg:grid-cols-2 lg:gap-8 lg:mt-24">
        {allProjects.map(
          ({ url, title, description, technologies, thumbnail }) => (
            <ProjectCard
              key={url}
              title={title}
              description={description}
              technologies={technologies.map(({ name }) => name)}
              image={{
                src: thumbnail.url,
                alt: thumbnail.alt || '',
                width: thumbnail.width,
                height: thumbnail.height,
                placeholder: 'blur',
                blurDataURL: thumbnail.blurUpThumb,
                loading: 'lazy',
              }}
              liveUrl={url}
            />
          ),
        )}
      </div>
    </main>
  );
};

export default ProjectsPage;
