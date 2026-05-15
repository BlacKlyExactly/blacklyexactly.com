import Image from 'next/image';
import { H4 } from '../ui/headings/h4';
import { P } from '../ui/text/p';
import { Timeline } from '../ui/timeline';
import { Circle } from '../ui/circle';
import { ShowInViewClip } from '../show-in-view/show-in-view-clip';
import { ShowInViewOpacity } from '../show-in-view/show-in-view-opacity';

import cierzo1 from '../../images/cierzo/diseno-app-01.jpg';
import cierzo5 from '../../images/cierzo/diseno-app-05.jpg';
import cierzo9 from '../../images/cierzo/diseno-app-09.jpg';
import muniak from '../../images/muniak.png';
import zp from '../../images/zp.png';
import sns from '../../images/sns.png';
import mazdom from '../../images/mazdom.png';
import muniakWorld from '../../images/muniak-world.png';

export const timelineData = [
  {
    title: 'Feb - Mar 2022',
    content: (
      <div className="space-y-16">
        <div className="space-y-4">
          <ShowInViewClip direction="top">
            <H4 className="mt-6 lg:mt-0">Cierzo Comunicación</H4>
          </ShowInViewClip>
          <Circle className="hidden lg:block" />
          <ShowInViewClip direction="bottom">
            <P>
              Frontend internship focused on building UI features, fixing bugs
              in existing applications, and maintaining code quality standards.
              Worked on debugging, testing, and collaborating with developers
              during feature delivery.
            </P>
          </ShowInViewClip>
        </div>
        <ShowInViewOpacity className="grid grid-cols-3 gap-3">
          <Image src={cierzo1} alt="Cierzo project UI" className="w-full rounded-md" loading="lazy" placeholder="blur" />
          <Image src={cierzo5} alt="Cierzo project UI" className="w-full rounded-md" loading="lazy" placeholder="blur" />
          <Image src={cierzo9} alt="Cierzo project UI" className="w-full rounded-md" loading="lazy" placeholder="blur" />
        </ShowInViewOpacity>
        <ShowInViewOpacity>
          <img
            src="https://skillicons.dev/icons?i=ts,angular"
            alt="TypeScript, Angular"
          />
        </ShowInViewOpacity>
      </div>
    ),
  },
  {
    title: 'Mar 2022 – Present',
    content: (
      <div className="space-y-10">
        <div className="space-y-4">
          <ShowInViewClip direction="top">
            <H4 className="mt-6 lg:mt-0">Istnestudio</H4>
          </ShowInViewClip>
          <Circle className="hidden lg:block" />
          <ShowInViewClip direction="bottom">
            <P>
              Fullstack/Frontend development focused on building and maintaining
              web applications with emphasis on performance, scalability, and clean architecture.
              Responsible for delivering both client-facing products and internal tools
              across multiple projects.
            </P>
          </ShowInViewClip>
        </div>
        <ShowInViewOpacity className="space-y-10">
          <div className="space-y-4">
            <P className="opacity-70">Early work (2022)</P>
            <P>
              Frontend development, UI implementation, bug fixing, testing and collaboration
              with developers in TypeScript-based applications.
            </P>
          </div>
          <div className="space-y-4">
            <P className="opacity-70">Client & production projects</P>
            <P>
              Development of web applications and internal systems including dashboards,
              admin panels and business tools using React, Next.js and Tailwind.
            </P>
          </div>
          <div className="space-y-4">
            <P className="opacity-70">Advanced frontend & interactive systems</P>
            <P>
              Building modern web applications using Next.js, Astro and Three.js,
              including interactive UI components and experimental frontend experiences.
            </P>
          </div>
        </ShowInViewOpacity>
        <ShowInViewOpacity className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <Image src={zp} alt="Project UI" className="w-full rounded-md" />
          <Image src={sns} alt="Project UI" className="w-full rounded-md" />
          <Image src={muniak} alt="Project UI" className="w-full rounded-md" />
          <Image src={muniakWorld} alt="Project UI" className="w-full rounded-md" />
          <Image src={mazdom} alt="Project UI" className="w-full rounded-md" />
        </ShowInViewOpacity>
        <ShowInViewOpacity>
          <img
            src="https://skillicons.dev/icons?i=ts,react,next,astro,threejs,tailwind"
            alt="Tech stack"
          />
        </ShowInViewOpacity>
      </div>
    ),
  }
];

export const WorkExperienceTimeline = () => <Timeline data={timelineData} />;
