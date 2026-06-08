import Image from "next/image";
import styles from "./PolaroidStack.module.css";

function Polaroid({ className }: { className: string }) {
  return (
    <div className={`${styles.polaroid} ${className}`}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/About Image.png"
          alt="About"
          fill
          className={styles.image}
        />
      </div>
    </div>
  );
}

export default function PolaroidStack() {
  return (
    <div className={styles.stack}>
      <Polaroid className={styles.polaroidLeft} />
      <Polaroid className={styles.polaroidCentre} />
      <Polaroid className={styles.polaroidRight} />
    </div>
  );
}
