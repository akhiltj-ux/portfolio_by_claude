export type Project = {
  id: string;
  image: string;
  title: string;
  tags: string[];
  bgColor: 'peach' | 'mint' | 'lavender';
  href: string;
};

export const projects: Project[] = [
  {
    id: '01',
    image: '/images/project-01.jpg',
    title: 'Redesigning the Onboarding Flow',
    tags: ['UX Research', 'Interaction Design', 'Figma'],
    bgColor: 'peach',
    href: '/work/onboarding',
  },
  {
    id: '02',
    image: '/images/project-02.jpg',
    title: 'Design System at Scale',
    tags: ['Design Systems', 'Component Library', 'Documentation'],
    bgColor: 'mint',
    href: '/work/design-system',
  },
  {
    id: '03',
    image: '/images/project-03.jpg',
    title: 'Mobile Navigation Patterns',
    tags: ['Mobile UX', 'Prototyping', 'User Testing'],
    bgColor: 'lavender',
    href: '/work/navigation',
  },
];
