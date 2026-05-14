import { Heading, BodyText } from '@/components/atoms';
import styles from './Hero.module.css';

/** Full-width editorial hero with display name, italic role, and tagline. */
export default function Hero() {
  return (
    <section className={styles.hero}>
      <Heading variant="display">Akhil T J</Heading>
      <Heading variant="display" italic>UX Designer</Heading>
      <BodyText size="base">Crafting clarity from complexity</BodyText>
    </section>
  );
}
