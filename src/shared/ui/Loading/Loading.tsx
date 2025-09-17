import styles from "./Loading.module.css";
import loading from "@/assets/images/loading.svg";

export const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <img className={styles.loading} src={loading} />
    </div>
  );
};
