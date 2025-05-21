import styles from "./sections.module.css";
import Productcard from "../Card/Productcard";

export default function Productoverview({ headline }) {
  return (
    <div className={styles["section--productoverview"]}>
      <h1> {headline}</h1>
      <div>
        <Productcard />
      </div>
    </div>
  );
}
