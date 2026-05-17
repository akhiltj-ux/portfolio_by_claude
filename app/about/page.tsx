import { Header, Footer } from "@/components/organisms/index";
import AboutHero from "@/components/organisms/AboutHero";
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
