import { BodyText } from '@/components/atoms';
import { FooterLinks } from '@/components/molecules';
import styles from './Footer.module.css';

/** Page footer: copyright left, navigation links right. */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <BodyText size="sm">© 2024 Akhil T J</BodyText>
      <FooterLinks />
    </footer>
  );
}
