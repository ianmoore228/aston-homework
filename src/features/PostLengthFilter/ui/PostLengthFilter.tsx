import { useState } from "react";
// import { useSelector } from "react-redux";
import type { FC } from "react";
// import type { RootState } from "@/app/providers/store";
import { filterByLength } from "../index.ts";
import styles from "./PostLengthFilter.module.css";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
// import { selectUnfilteredPosts } from "@/entities/post";

import type { Post } from "@/entities/post";
// import { selectSelectedUserId } from "@/entities/user";
import { useGetPostsByUserIdQuery, useGetAllPostsQuery } from "@/entities/post";

interface PostLengthFilterProps {
  onFilter: (filtered: Post[]) => void;
  isLoading?: boolean;
  userId?: number | null;
}

export const PostLengthFilter: FC<PostLengthFilterProps> = ({
  onFilter,
  isLoading,
  userId,
}) => {
  const [min, setMin] = useState("0");
  const [max, setMax] = useState("200");
  const [error, setError] = useState("");


  const { data: allPosts } = useGetAllPostsQuery(undefined, {
    skip: !!userId,
  });

  const { data: userPosts } = useGetPostsByUserIdQuery(userId!, {
    skip: !userId || userId === null,
  });

  const posts = userId ? userPosts ?? [] : allPosts ?? [];

  const handleFilter = () => {
    const filtered = filterByLength(posts, Number(min), Number(max), Number(userId));
    onFilter(filtered);
  };

  const handleSetNumber = (value: string, type: "min" | "max") => {
    let numbers = value.replace(/\D/g, "");
    numbers = numbers.replace(/^0+/, "") || "0";
    if (!numbers) {
      setError("Поле не может быть пустым");
    } else if (type === "max" && Number(numbers) < Number(min)) {
      setError("Максимальная длина не может быть меньше минимальной");
    } else if (type === "min" && Number(numbers) > Number(max)) {
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

  if (isLoading) return null;

  return (
    <div className={styles.postLengthFilter}>
      <p className={styles.postLengthFilterTitle}>Фильтр по длине заголовка:</p>
      <div className={styles.postLengthFilterInputContainer}>
        <label className={styles.postLengthFilterLabel} htmlFor="min">
          От:
        </label>
        <Input
          id="min"
          type="text"
          value={min}
          onChange={(e) => handleSetNumber(e.target.value, "min")}
          placeholder="Мин"
          autoComplete="off"
        />
      </div>
      <div className={styles.postLengthFilterInputContainer}>
        <label className={styles.postLengthFilterLabel} htmlFor="max">
          До:
        </label>
        <Input
          id="max"
          type="text"
          value={max}
          onChange={(e) => handleSetNumber(e.target.value, "max")}
          placeholder="Макс"
          autoComplete="off"
        />
      </div>
      <Button type="button" disabled={!!error} onClick={handleFilter}>
        Фильтровать
      </Button>
      <p className={styles.error}>{error}</p>
    </div>
  );
};
