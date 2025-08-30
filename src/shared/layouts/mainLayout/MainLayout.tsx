import type { ReactNode } from "react";
import { Header } from "@/widgets/LayoutHeader";
import { Footer } from "@/widgets/LayoutFooter";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};
