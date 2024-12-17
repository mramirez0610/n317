import styles from "../styles/hero.module.scss";
import Image from "next/image";
import Button from "./button";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        width={250}
        height={250}
        className={styles.heroImg}
        src="/img/img1.jpg"
        alt="Schlagenheim"
      />

      <div className={styles.info}>
        <h2>hello!</h2>
        <p>
          this is my third assignment for n317. it's a quick little web app with
          two pages, and is component structured for the most part. feel free to
          click about for a cool photo of me hehe. here's a description of my
          final project.
        </p>

        <p></p>
      </div>
      <Button></Button>
    </section>
  );
}
