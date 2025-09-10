import { MainLayout } from "@/shared/layouts/mainLayout/MainLayout";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
