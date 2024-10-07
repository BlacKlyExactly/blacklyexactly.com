'use client';

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiGit,
  SiNpm,
  SiThreedotjs,
  SiFigma,
  SiStrapi,
  SiGatsby,
  SiStyledcomponents,
} from 'react-icons/si';
import { P } from './ui/text/p';

const technologies1 = [
  { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: SiCss3, color: 'text-blue-500' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'React', icon: SiReact, color: 'text-cyan-400' },
  { name: 'Threejs', icon: SiThreedotjs, color: 'text-white' },
  { name: 'Strapi', icon: SiStrapi, color: 'text-blue-600' },
  { name: 'Git', icon: SiGit, color: 'text-orange-500' },
];

const technologies2 = [
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'Sass', icon: SiSass, color: 'text-pink-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
  { name: 'npm', icon: SiNpm, color: 'text-red-500' },
  { name: 'Figma', icon: SiFigma, color: 'text-white' },
  { name: 'Gatsby', icon: SiGatsby, color: 'text-purple' },
];

export const TechnologiesUsed = () => {
  return (
    <div className="overflow-x-hidden max-w-[calc(100vw-56px)] [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] lg:mt-4">
      <div className="relative flex overflow-x-hidden mt-8 w-max">
        <div className="flex gap-8 animate-infinite-scroll">
          {[...technologies1, ...technologies1, ...technologies1].map(
            (tech) => (
              <div className="flex gap-2 shrink-0 items-center">
                <tech.icon className={`text-4xl lg:text-3xl ${tech.color}`} />
                <P className="!mt-0 hidden lg:block">{tech.name}</P>
              </div>
            ),
          )}
        </div>
      </div>
      <div className="relative flex overflow-x-hidden w-max mt-8 ">
        <div className="flex gap-8 animate-infinite-scroll-reverse">
          {[...technologies2, ...technologies2, ...technologies2].map(
            (tech) => (
              <div className="flex gap-2 shrink-0 items-center">
                <tech.icon className={`text-4xl lg:text-3xl ${tech.color}`} />
                <P className="!mt-0 hidden lg:block">{tech.name}</P>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};
