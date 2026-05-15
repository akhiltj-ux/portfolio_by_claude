export type Project = {
  id: string;
  image: string;
  alt: string;
  title: string;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    id: '01',
    image: '/images/Dummy Image.png',
    alt: 'Onboarding flow screens showing step-by-step user registration',
    title: 'Reimagining Competitive Exam Preparation: An AI Powered Study Tool for UPSC Aspirants',
    tags: ['UX Research', 'Interaction Design', 'Figma'],
    href: '/work/onboarding',
  },
  {
    id: '02',
    image: '/images/Dummy Image.png',
    alt: 'Design system component library with tokens and documentation',
    title: 'Reimagining Competitive Exam Preparation: An AI Powered Study Tool for UPSC Aspirants',
    tags: ['Design Systems', 'Component Library', 'Documentation'],
    href: '/work/design-system',
  },
  {
    id: '03',
    image: '/images/Dummy Image.png',
    alt: 'Mobile navigation patterns with bottom tab bar and gesture interactions',
    title: 'Reimagining Competitive Exam Preparation: An AI Powered Study Tool for UPSC Aspirants',
    tags: ['Mobile UX', 'Prototyping', 'User Testing'],
    href: '/work/navigation',
  },
];
