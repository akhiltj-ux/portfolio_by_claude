import { Header, Hero, WorkGrid, Footer } from '@/components/sections';

export default function Home() {
  return (
    <>
      <Header activePath="/" />
      <Hero />
      <WorkGrid />
      <Footer />
    </>
  );
}
