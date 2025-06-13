import styles from "../routes/Routes.module.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className={styles["errorpage-container"]}>
        <div className={styles["errorpage-content"]}>
          <label className={styles["errorpage-code"]}> 404 Error</label>
          <p className={styles["errorpage-message"]}>
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link to="/" className={styles["error-link"]}>
            Go back home
          </Link>
        </div>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className={styles["svg-1"]}
        >
          <path
            fill="#CDA349"
            d="M30.8,-18C39.5,-13.8,45.7,-1,47,17.7C48.2,36.3,44.6,60.8,32.1,66.9C19.6,73,-1.9,60.8,-14.6,47.9C-27.3,35.1,-31.3,21.6,-37.8,5.2C-44.3,-11.2,-53.4,-30.5,-47.5,-34.1C-41.6,-37.7,-20.8,-25.6,-4.8,-21.7C11.1,-17.9,22.2,-22.2,30.8,-18Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className={styles["svg-2"]}
        >
          <path
            fill="#CDA349"
            d="M41.1,-54.8C49.4,-42.1,49.6,-25.4,50,-10.6C50.4,4.1,51.2,17,47.6,31.5C44,45.9,36.2,61.9,24.3,65.9C12.4,69.9,-3.6,61.9,-16.3,53.5C-28.9,45.1,-38.2,36.2,-46.6,25.2C-55.1,14.1,-62.7,0.9,-63.7,-14.3C-64.6,-29.4,-58.9,-46.4,-47.2,-58.5C-35.5,-70.5,-17.7,-77.6,-0.7,-76.9C16.4,-76.1,32.9,-67.4,41.1,-54.8Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className={styles["svg-3"]}
        >
          <path
            fill="#CDA349"
            d="M24.7,-19.8C34.4,-7.5,46.3,2.9,47.7,16.5C49.1,30.1,39.9,46.9,23.3,58.9C6.7,71,-17.3,78.3,-24.9,68.2C-32.5,58.2,-23.7,30.8,-28.8,7C-33.8,-16.8,-52.7,-36.9,-50.2,-47.6C-47.7,-58.2,-23.9,-59.3,-8.2,-52.8C7.5,-46.3,15,-32.1,24.7,-19.8Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className={styles["svg-4"]}
        >
          <path
            fill="#CDA349"
            d="M56.7,-52.2C63.6,-36.6,52.5,-13.6,43.6,3.8C34.7,21.2,28.1,32.9,14,46.3C0,59.6,-21.6,74.6,-29.4,68.1C-37.1,61.6,-31.2,33.7,-30.8,13.3C-30.4,-7,-35.6,-19.8,-31.4,-34.8C-27.2,-49.8,-13.6,-67,5.7,-71.5C24.9,-76.1,49.8,-67.8,56.7,-52.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </>
  );
};

export default ErrorPage;
