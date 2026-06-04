import { Header, Hero, ProjectGrid, Footer } from '@/components/sections';

export default function Home() {
  return (
    <>
      <Header activePath="/" />
      <Hero />
      <ProjectGrid />
      <Footer />
    </>
  );
}
