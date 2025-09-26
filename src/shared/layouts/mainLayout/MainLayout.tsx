import { Header } from "@/widgets/LayoutHeader";
import { Footer } from "@/widgets/LayoutFooter";
import styles from "./MainLayout.module.css";
import type { PropsWithChildren } from "react";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};
