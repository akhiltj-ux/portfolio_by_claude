export type Project = {
  id: string;
  slug: string;
  image: string;
  alt: string;
  title: string;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    id: '01',
    slug: 'onboarding',
    image: '/images/Dummy Image.png',
    alt: 'Onboarding flow screens showing step-by-step user registration',
    title: 'Reimagining Competitive Exam Preparation: An AI Powered Study Tool for UPSC Aspirants',
    tags: ['UX Research', 'Interaction Design', 'Figma'],
    href: '/projects/onboarding',
  },
  {
    id: '02',
    slug: 'design-system',
    image: '/images/Dummy Image.png',
    alt: 'Design system component library with tokens and documentation',
    title: 'Building a Design System from the Ground Up',
    tags: ['Design Systems', 'Component Library', 'Documentation'],
    href: '/projects/design-system',
  },
  {
    id: '03',
    slug: 'navigation',
    image: '/images/Dummy Image.png',
    alt: 'Mobile navigation patterns with bottom tab bar and gesture interactions',
    title: 'Redesigning Mobile Navigation Patterns',
    tags: ['Mobile UX', 'Prototyping', 'User Testing'],
    href: '/projects/navigation',
  },
];
