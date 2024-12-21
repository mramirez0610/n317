import styles from "@/styles/hero.module.scss";
import Image from "next/image";
import Counter from "./counter";

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
          two pages, and is component structured for the most part. this page
          includes a little photo of me, and a counter at the bottom that
          utlizies useState. the about page doesn't have much to it either, but
          it has a cool little button at the bottom that was fun to figure out.
          below is a description of my final project.
        </p>
        <p>
          one of the most important things in my life is rock climbing. i love
          everything about the sport, it has completely changed my life. so, for
          my final project, i'm going to be creating a web app that allows a
          user to log rock climbs that they've done in the past. the user will
          be able to input the name of the climb, the grade, and any notes they
          have about the climb. the user will also be able to view all of the
          climbs they've logged. it'll be a simple app, but i'm excited to make
          it!
        </p>
        <p>hey look down there, cool counter</p>
        <Counter></Counter>
      </div>
    </section>
  );
}
