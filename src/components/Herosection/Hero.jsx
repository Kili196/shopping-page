import ShopButton from "../Buttons/ShopButton";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles["hero--section"]}>
      <div className={styles["hero--headings"]}>
        <h1>Style. Made. Simple. </h1>
        <h2>
          Discover timeless essentials <br /> and effortless upgrades for your
          everyday look.
        </h2>
        <ShopButton />
      </div>
    </section>
  );
}
