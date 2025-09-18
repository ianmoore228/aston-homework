import { type ComponentType, type FC } from "react";
import loading from "@/assets/images/loading.svg";
import styles from "./withLoading.module.css";

type WithLoadingProps = {
  isFetching: boolean;
};

export function withLoading<T extends object>(WrappedComponent: ComponentType<T>) {
  const WithLoadingComponent: FC<T & WithLoadingProps> = ({ isFetching, ...props }) => {
    if (isFetching) {
      return (
        <div className={styles.loadingContainer}>
          <img className={styles.loadingImage} src={loading} alt="loading" />
        </div>
      );
    }

    return <WrappedComponent {...(props as T)} />;
  };

  return WithLoadingComponent;
}