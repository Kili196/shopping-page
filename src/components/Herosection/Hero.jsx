import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles["hero--section"]}>
      <h1>Style Made Simple. </h1>
      <h2>
        Discover timeless essentials and effortless upgrades for your everyday
        look.
      </h2>
      <button> Shop Now!</button>
    </section>
  );
}
