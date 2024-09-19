'use client';

import { Mail } from 'lucide-react';
import { ContactForm } from '../contact-form';
import { ShowInViewClip } from '../show-in-view/show-in-view-clip';
import { H2 } from '../ui/headings/h2';
import { Section } from '../ui/section';
import { P } from '../ui/text/p';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { H1 } from '../ui/headings/h1';

export const ContactSection = () => {
  const pathname = usePathname();

  return (
    <Section
      className={cn('space-y-12 lg:space-y-20', {
        '!mt-0 pt-16 lg:pt-0': pathname === '/contact',
      })}
    >
      <div
        className={cn('space-y-4 !mb-8 ', {
          'lg:space-y-8': pathname === '/contact',
        })}
      >
        <ShowInViewClip direction="top">
          {pathname === '/contact' ? <H1>Contact</H1> : <H2>Contact</H2>}
        </ShowInViewClip>
        <ShowInViewClip direction="bottom">
          <P className="lg:w-1/2">
            Let's connect! Feel free to reach out for collaboration, inquiries,
            or just to say hello. I'm always open to new opportunities and
            discussions.
            <a
              className="flex gap-2 items-center mt-4 mb-8 bg-gradient-to-r from-purple to-white w-fit bg-clip-text text-transparent font-bold underline"
              href="mailto:sebastian@blacklyexactly.com"
            >
              <Mail className="text-purple" />
              <span className="-mt-0.5 lg:-mt-1">
                sebastian@blacklyexactly.com
              </span>
            </a>
          </P>
        </ShowInViewClip>
      </div>
      <ContactForm />
    </Section>
  );
};
