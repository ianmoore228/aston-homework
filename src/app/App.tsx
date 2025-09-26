import { MainLayout } from "@/shared/layouts/MainLayout";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
