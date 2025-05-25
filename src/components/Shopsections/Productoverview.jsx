import styles from "./sections.module.css";
import Productcard from "../Card/Productcard";
import { Link } from "react-router-dom";

export default function Productoverview({ headline }) {
  return (
    <>
      {" "}
      <div className={styles["productoverview"]}>
        <h1>{headline}</h1>
        <div className={styles["productoverview--products"]}>
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
        </div>
      </div>
      <div className={styles["productoverview--view-more"]}>
        {" "}
        <Link to={"shop"}> View More </Link>{" "}
      </div>
    </>
  );
}
