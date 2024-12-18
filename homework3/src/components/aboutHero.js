import Image from "next/image";
import styles from "@/styles/about.module.scss";
import Button from "./button";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/img/img2.jpg"
        width={250}
        height={250}
        className={styles.heroImg}
        alt="about"
      ></Image>
      <div className={styles.info}>
        <h2>about</h2>
        <p>nothing really to see here. just another page hehe.</p>
        <p>
          all the important info is on the other page! here's something for your
          troubles, though.
        </p>
        <Button></Button>
      </div>
    </section>
  );
}
