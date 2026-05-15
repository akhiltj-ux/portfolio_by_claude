import { Header, Hero, ProjectGrid, Footer } from '@/components/organisms';

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
