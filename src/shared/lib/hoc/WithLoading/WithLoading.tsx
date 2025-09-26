import { type ComponentType, type PropsWithChildren } from "react";
import loading from "@/assets/images/loading.svg";
import styles from "./WithLoading.module.css";

type WithLoadingProps = {
  isFetching: boolean;
};

export function withLoading<T extends object>(WrappedComponent: ComponentType<T>) {
  const WithLoadingComponent = ({ isFetching, ...props }: PropsWithChildren<WithLoadingProps & T>) => {
    if (isFetching) {
      return (
        <div className={styles.loadingContainer}>
          <img className={styles.loadingImage} src={loading} alt="loading" />
        </div>
      );
    }

    return <WrappedComponent {...(props as T)} />;
  };

  return WithLoadingComponent as ComponentType<WithLoadingProps & T>;
}