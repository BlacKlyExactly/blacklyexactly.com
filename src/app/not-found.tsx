import { TransitionLink } from '@/components/page-transition/transition-link';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Button } from '@/components/ui/button';
import { H1 } from '@/components/ui/headings/h1';
import { Section } from '@/components/ui/section';
import { P } from '@/components/ui/text/p';

export const dynamic = 'force-static';

const ContactPage = () => (
  <main className="lg:flex-1">
    <BackgroundBeams />
    <Section>
      <H1 className="py-2 lg:!text-6xl">Page not found</H1>
      <P className="lg:w-1/2 mb-12">
        The page you are looking for does not exist. Please check the URL or go
        back to the homepage.
      </P>
      <TransitionLink href="/">
        <Button>Return to home</Button>
      </TransitionLink>
    </Section>
  </main>
);
export default ContactPage;
