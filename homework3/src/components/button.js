"use client";
import { useState } from "react";
import styles from "../styles/button.module.scss";

export default function Button() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.buttonContainer}>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <div>{count}</div>
    </div>
  );
}
