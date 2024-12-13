import Product from "./product";
import styles from "../styles/showcase.module.css";

export default function Showcase() {
  return (
    <div className={styles.showcase}>
      <h1>Showcase</h1>

      <Product />
    </div>
  );
}
