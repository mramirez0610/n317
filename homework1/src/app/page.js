import styles from "../styles/page.module.css";
import Showcase from "@/components/showcase";

export default function Home() {
  return (
    <main className={styles.main}>
      <Showcase />
    </main>
  );
}
