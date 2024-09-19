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
            <H4 className="mt-6 lg:mt-0">Cierzo Internet</H4>
          </ShowInViewClip>
          <Circle className="hidden lg:block" />
          <ShowInViewClip direction="bottom">
            <P>
              Developed excersise software while maintaining appropriate code
              quality standards, Developing, analyzing, finding and fixing bugs
              that arise during code writing, Testing software, Collaborating
              with other developers.
            </P>
          </ShowInViewClip>
        </div>
        <ShowInViewOpacity className="flex gap-3 relative">
          <Image
            src={cierzo1}
            alt='Image of a "design app"'
            className="w-full rounded-md"
            loading="lazy"
            placeholder="blur"
          />
          <Image
            src={cierzo5}
            alt='Image of a "design app"'
            className="w-full rounded-md"
            loading="lazy"
            placeholder="blur"
          />
          <Image
            src={cierzo9}
            alt='Image of a "design app"'
            className="w-full rounded-md"
            loading="lazy"
            placeholder="blur"
          />
        </ShowInViewOpacity>
        <ShowInViewOpacity>
          <img
            src="https://skillicons.dev/icons?i=ts,angular"
            alt="Technologies used: Typescript, Angular"
          />
        </ShowInViewOpacity>
      </div>
    ),
  },
  {
    title: 'Mar - Aug 2022',
    content: (
      <div className="space-y-16">
        <div className="space-y-4">
          <ShowInViewClip direction="top">
            <H4 className="mt-6 lg:mt-0">Istnestudio</H4>
          </ShowInViewClip>
          <Circle className="left-2/3 !opacity-40 hidden lg:block" />
          <ShowInViewClip direction="bottom">
            <P>
              Developing software with attention to high standards of code
              quality, investigating, identifying and eliminating errors
              resulting from the coding process, conducting software testing,
              using modern web technologies such as next, gatsby, strapi, dato
            </P>
          </ShowInViewClip>
        </div>
        <ShowInViewOpacity className="grid grid-cols-1 lg:grid-cols-2 gap-3 relative">
          <Image
            src={muniak}
            alt='Image of a "design app"'
            className="w-full rounded-md"
            loading="lazy"
            placeholder="blur"
          />
          <Image
            src={zp}
            alt='Image of a "design app"'
            className="w-full rounded-md"
            loading="lazy"
            placeholder="blur"
          />
          <Image
            src={sns}
            alt='Image of a "design app"'
            className="w-full rounded-md"
            loading="lazy"
            placeholder="blur"
          />
        </ShowInViewOpacity>
        <ShowInViewOpacity>
          <img
            src="https://skillicons.dev/icons?i=ts,react,next,tailwind"
            alt="Technologies used: Typescript, React, Next, Tailwind"
            loading="lazy"
          />
        </ShowInViewOpacity>
      </div>
    ),
  },
  {
    title: 'Mar - Oct 2023',
    content: (
      <div className="space-y-16">
        <div className="space-y-4">
          <ShowInViewClip direction="top">
            <H4 className="mt-6 lg:mt-0">Istnestudio</H4>
          </ShowInViewClip>
          <ShowInViewClip direction="bottom">
            <P>
              Developing software with attention to high standards of code
              quality, investigating, identifying and eliminating errors
              resulting from the coding process, conducting software testing,
              using modern web technologies such as next, astro, threejs, dato
            </P>
          </ShowInViewClip>
        </div>
        <div className="relative">
          <Circle className="!opacity-50 hidden lg:block" />
          <ShowInViewOpacity className="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
            <Image
              src={mazdom}
              alt='Image of a "design app"'
              width={1920}
              height={1080}
              className="w-full rounded-md"
              loading="lazy"
              placeholder="blur"
            />
            <Image
              src={muniakWorld}
              alt='Image of a "design app"'
              width={1920}
              height={1080}
              className="w-full rounded-md"
              loading="lazy"
              placeholder="blur"
            />
          </ShowInViewOpacity>
        </div>
        <ShowInViewOpacity>
          <img
            src="https://skillicons.dev/icons?i=ts,react,next,astro,threejs"
            alt="Technologies used: Typescript, React, Next, Astro, Threejs"
            loading="lazy"
          />
        </ShowInViewOpacity>
      </div>
    ),
  },
];

export const WorkExperienceTimeline = () => <Timeline data={timelineData} />;
