import { type PostListProps } from "@/widgets/PostList";
import React from "react";
import loading from "@/assets/images/loading.svg";
import styles from "./WithLoading.module.css";
import { type FC } from "react";

type WithLoadingProps = PostListProps & {
  isLoading: boolean;
};

export function WithLoading(PostList: React.ComponentType<PostListProps>) {
  const WithLoadingComponent: FC<WithLoadingProps> = ({ isLoading, ...props }) => {
    if (isLoading) {
      return (
        <div className={styles.postListContent}>
          <img className={styles.postListLoading} src={loading} />
        </div>
      );
    }
    return <PostList {...props} />;
  };

  return WithLoadingComponent;
}
