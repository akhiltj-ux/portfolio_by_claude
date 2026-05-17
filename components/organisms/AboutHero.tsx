import Link from "next/link";
import PolaroidStack from "@/components/molecules/PolaroidStack";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.headline}>
          <span className={styles.headlineNormal}>I'm an engineer</span>
          <span className={styles.headlineItalic}>turned designer</span>
        </h1>
        <div className={styles.body}>
          <p className={styles.paragraph}>
            Originally from India, now based in the UK.
          </p>
          <p className={`${styles.paragraph} ${styles.paragraphGapLarge}`}>
            <span className={styles.year}>In 2020</span> during COVID, I signed
            up for a UI/UX workshop out of curiosity, something clicked and I
            never stopped. I started freelancing that same year, and{" "}
            <span className={styles.year}>by 2022</span>, after graduating as an
            engineer, I landed a contract designer role at{" "}
            <Link href="/about" className={styles.inlineLink}>
              RAFTEL TECHNOLOGIES
            </Link>
            . That led to joining{" "}
            <Link href="/about" className={styles.inlineLink}>
              FOAPS
            </Link>{" "}
            as a full-time designer later that year.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.year}>In 2023</span> I packed up and moved
            to the UK to pursue a Masters in HCI.{" "}
            <span className={styles.year}>In 2025</span> I became the first
            design hire at{" "}
            <Link href="/about" className={styles.inlineLink}>
              KEWORDAL
            </Link>
            , where we&apos;re now a team of two.
          </p>
          <p className={styles.paragraph}>
            Outside of design, I enjoy working out, cooking, watching a
            sitcom/anime, or building a side project. I've been a top listener
            of{" "}
            <Link href="/about" className={styles.inlineLink}>
              AKON
            </Link>{" "}
            on YouTube Music more times than I&apos;ll publicly admit. Currently
            reading{" "}
            <Link href="/about" className={styles.inlineLink}>
              THE PSYCHOLOGY OF MONEY
            </Link>
            .
          </p>
          <p className={`${styles.paragraph} ${styles.paragraphGapLarge}`}>
            Say hello on{" "}
            <Link href="/about" className={styles.inlineLink}>
              LINKEDIN
            </Link>{" "}
            or at{" "}
            <Link href="/about" className={styles.inlineLink}>
              AKHILTJ.PRO@GMAIL.COM
            </Link>
            .
          </p>
        </div>
      </div>
      <div className={styles.placeholder}>
        <PolaroidStack />
      </div>
    </section>
  );
}
