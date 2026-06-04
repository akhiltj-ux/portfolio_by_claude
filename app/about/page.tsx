import { Header, Footer } from "@/components/sections";
import AboutHero from "@/components/sections/AboutHero";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <>
      <Header activePath="/about" />
      <main className={styles.main}>
        <AboutHero />
      </main>
      <Footer />
    </>
  );
}
