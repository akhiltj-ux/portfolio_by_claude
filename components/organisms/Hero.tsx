import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.name}>Akhil T J</p>
      <p className={styles.role}>UX Designer</p>
      <div className={styles.bodyGroup}>
        <p className={styles.body}>Building products that scale from early startups to millions of users.</p>
        {' '}
        <p className={styles.body}>
          Currently at{' '}
          <Link href="/" className={styles.highlight}>KEWORDAL</Link>
          , UK.
        </p>
      </div>
    </section>
  );
}
