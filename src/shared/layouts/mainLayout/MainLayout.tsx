import type { ReactNode } from "react";
import { Header } from "@/widgets/LayoutHeader";
import { Footer } from "@/widgets/LayoutFooter";
import styles from "./MainLayout.module.css";
import { type FC } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};
