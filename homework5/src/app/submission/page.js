"use client";
import { useForm } from "@/context/FormContext";
import styles from "@/styles/submission.module.scss";

export default function Submission() {
  const { formData } = useForm();

  console.log("form data: ", formData);

  if (!formData || !formData.name || !formData.email || !formData.message) {
    return <p>hey man. what did i tell you. go to the form, please.</p>;
  }
  return (
    <main className={styles.submission}>
      <div className={styles.info}>
        <h2>here's your data!</h2>
        <h3>{formData.name}</h3>
        <h3>{formData.email}</h3>
        <p>{formData.message}</p>
      </div>
    </main>
  );
}
