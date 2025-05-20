import styles from "./Hero.module.css";

export default function Herobackground({ children }) {
  return <div className={styles["container"]}> {children}</div>;
}
