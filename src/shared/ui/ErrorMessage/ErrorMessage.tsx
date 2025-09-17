import type { FC } from "react";
import styles from "./ErrorMessage.module.css";

export const ErrorMessage: FC = () => {

  return (
    <div className={styles.error}>
     <h2>Ошибка. Перезагрузите страницу или включите VPN</h2>
    </div>
  );
};