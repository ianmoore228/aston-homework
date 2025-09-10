import { NavLink } from "react-router-dom";
import { useState } from "react";
import type { FC } from "react";
import styles from "./UserTabs.module.css";

export const UserTabs: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className={styles.headerNav}>
      <button
        className={styles.headerBurger}
        onClick={toggleMenu}
      >
        ☰
      </button>
      <ul className={`${styles.headerList} ${isOpen ? styles.open : ""}`}>
        <li className={styles.headerListItem}>
          <NavLink className={styles.headerLink} to="/posts">
            Посты
          </NavLink>
        </li>
        <li className={styles.headerListItem}>
          <NavLink className={styles.headerLink} to={`/users/1/albums`}>
            Альбомы
          </NavLink>
        </li>
        <li className={styles.headerListItem}>
          <NavLink className={styles.headerLink} to="/albums/1/photos">
            Фото
          </NavLink>
        </li>
        <li className={styles.headerListItem}>
          <NavLink className={styles.headerLink} to="/users/1/todos">
            Задачи
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

