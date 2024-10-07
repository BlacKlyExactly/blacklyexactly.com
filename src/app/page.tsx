import Link from 'next/link';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Button } from '@/components/ui/button';
import { Circle } from '@/components/ui/circle';
import { H1 } from '@/components/ui/headings/h1';
import { H2 } from '@/components/ui/headings/h2';
import { Github } from '@/components/ui/icons/github';
import { Section } from '@/components/ui/section';
import { Large } from '@/components/ui/text/large';
import { P } from '@/components/ui/text/p';
import { WorkExperienceTimeline } from '@/components/sections/work-experience-timeline';
import { ShowInViewOpacity } from '@/components/show-in-view/show-in-view-opacity';
import { ProjectCard } from '@/components/project-card';
import { fetchProjects } from '@/lib/datocms';
import { TransitionLink } from '@/components/page-transition/transition-link';
import { TechnologiesUsed } from '@/components/technologies-used';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Home | Blacklyexaclty',
  description:
    "I'm 21 years old. I'm the graduate of an IT technical school. I wish to expand my skills as a Frontend developer, and I'm working hard to achieve that",
};

const Home = async () => {
  const { allProjects } = await fetchProjects(3);

  return (
    <main>
      <div className="lg:pt-16">
        <div className="pt-4 space-y-8 relative flex-1 z-10">
          <Circle />
          <div>
            <Large>I am Sebastian</Large>
            <H1 className="w-fit">Frontend Developer</H1>
          </div>
          <P className="lg:w-1/2">
            I'm 21 years old. I'm the graduate of an IT technical school. I wish
            to expand my skills as a Frontend developer, and I'm working hard to
            achieve that
          </P>
          <div className="flex gap-4 items-center">
            <TransitionLink href="/projects">
              <Button className="w-fit">My projects</Button>
            </TransitionLink>
            <TransitionLink href="/contact">
              <Button className="w-fit" variant="outline">
                Hire me
              </Button>
            </TransitionLink>
            <Link
              href="https://github.com/blacklyexactly"
              className="hover:text-purple"
            >
              <Github />
            </Link>
          </div>
        </div>
        <BackgroundBeams />
      </div>
      <Section className="mt-24 lg:mt-64 w-full">
        <H2>My tech stack</H2>
        <TechnologiesUsed />
      </Section>
      <Section>
        <H2>Work experience</H2>
        <P className="lg:w-1/2">
          My professional background and relevant experience in the frontend
          developer position.
        </P>
        <WorkExperienceTimeline />
      </Section>
      <Section className="mt-8 lg:mt-56">
        <ShowInViewOpacity className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center relative">
          <Circle className="left-[85%] hidden lg:block" />
          <div>
            <H2>Recent projects</H2>
            <P>
              Here are my latest frontend projects, showcasing responsive
              design, clean code, and engaging user experiences. Each project
              highlights my skills in building modern, dynamic web applications.
              Want to see more? Go to my{' '}
              <TransitionLink
                href="/projects"
                className="bg-gradient-to-r from-purple to-white bg-clip-text text-transparent font-bold"
              >
                projects
              </TransitionLink>{' '}
              page.
            </P>
          </div>
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
        </ShowInViewOpacity>
      </Section>
    </main>
  );
};

export default Home;
