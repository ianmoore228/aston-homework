import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./UserTabs.module.css";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/providers/store";
import { setSelectedUserId } from "@/entities/user";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/app/providers/store";

export const UserTabs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const selectedUserId = useSelector((state: RootState) => state.users.selectedUserId);

  const handleUserId = () => {
    dispatch(setSelectedUserId(1));
  };

  return (
    <nav className={styles.headerNav}>
      <button
        className={`${styles.headerBurger} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <span className={styles.headerButtonLineFirst}></span>
        <span className={styles.headerButtonLineSecond}></span>
        <span className={styles.headerButtonLineThird}></span>
        <span className={styles.headerButtonLineFourth}></span>
      </button>
      <ul className={`${styles.headerList} ${isOpen ? styles.open : ""}`}>
        <li className={styles.headerListItem}>
          <NavLink onClick={handleUserId} className={styles.headerLink} to={`/`}>
            Посты
          </NavLink>
        </li>
        <li className={styles.headerListItem}>
          <NavLink className={styles.headerLink} to={`/users/${selectedUserId}/albums`}>
            Альбомы
          </NavLink>
        </li>
        <li className={styles.headerListItem}>
          <NavLink
            className={styles.headerLink}
            to={`/users/${selectedUserId}/albums/1/photos`}
          >
            Фото
          </NavLink>
        </li>
        <li className={styles.headerListItem}>
          <NavLink className={styles.headerLink} to={`/users/${selectedUserId}/todos`}>
            Задачи
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};