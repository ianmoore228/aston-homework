import { useState } from "react";
import type { Post } from "@/entities/post";
import { filterByLength } from "../index.ts";
import React from "react";
import styles from "./PostLengthFilter.module.css";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { type FC } from "react";

interface PostLengthFilterProps {
  posts: Post[];
  userId?: number;
  onFilter: (filtered: Post[]) => void;
}

export const PostLengthFilter: FC<PostLengthFilterProps> = ({
  posts,
  userId,
  onFilter,
}) => {
  const [min, setMin] = useState("0");
  const [max, setMax] = useState("200");
  const [error, setError] = useState("");

  console.log(userId);

  function handleFilter() {
    let filtered: Post[] = posts;
    if (userId) {
       filtered = filterByLength(posts, Number(min), Number(max), userId);
    } else {
       filtered = filterByLength(posts, Number(min), Number(max));
    }
   
    onFilter(filtered);
  }

  const handleSetNumber = (value: string, type: "min" | "max") => {
    let numbers = value.replace(/\D/g, "");
    numbers = numbers.replace(/^0+/, "") || "0";
    if (!numbers) {
      setError("Поле не может быть пустым");
    } else if (
      type === "max" && Number(numbers) < Number(min)
    ) {
      setError("Максимальная длина не может быть меньше минимальной");
    } else if (
      type === "min" && Number(numbers) > Number(max)
    ) {
      setError("Минимальная длина не может быть больше максимальной");
    } else {
      setError("");
    } 

    if (type === "min") {
      setMin(numbers);
    } else if (type === "max") {
      setMax(numbers);
    }
  };

  const handleSetMin = 
    (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSetNumber(e.target.value, "min");
  };
  
  const handleSetMax = (e: React.ChangeEvent<HTMLInputElement>) =>{
    handleSetNumber(e.target.value, "max");
  };


  return (
    <div className={styles.postLengthFilter}>
      <p className={styles.postLengthFilterTitle}>Фильтр по длине заголовка:</p>
     <div className={styles.postLengthFilterInputContainer}>
      <label className={styles.postLengthFilterLabel} htmlFor="min">От:</label>
      <Input
        id="min"
        type="text"
        value={min}
        onChange={handleSetMin}
        placeholder="Мин"
        autoComplete="off"
      />
      </div>
      <div className={styles.postLengthFilterInputContainer}>
      <label className={styles.postLengthFilterLabel} htmlFor="min">До:</label>
      <Input
        value={max}
        id="max"
        type="text"
        onChange={handleSetMax}
        placeholder="Макс"
        autoComplete="off"
      />
      </div>
      <Button
        type="button"
        disabled={error ? true : false}
        onClick={handleFilter}
      >
        Фильтровать
      </Button>
      <p className={styles.error}>{error}</p>
    </div>
  );
};
