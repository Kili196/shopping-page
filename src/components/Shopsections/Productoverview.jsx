import styles from "./sections.module.css";

export default function Productoverview({ headline }) {
  return (
    <div className={styles["section--productoverview"]}>
      <h1> {headline}</h1>
      <div> Overview </div>
    </div>
  );
}
