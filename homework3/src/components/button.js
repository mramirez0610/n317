"use client";
import { useState } from "react";

export default function Button() {
  const [index, setIndex] = useState(0);
  const sentence = ["its", "just", "a", "button"];

  return (
    <div>
      <button
        onClick={() => {
          setIndex((prevIndex) => (prevIndex + 1) % sentence.length);
        }}
      >
        click me
      </button>
      <p>{sentence.slice(0, index + 1).join(" ")}</p>
    </div>
  );
}
