import { Outlet } from "react-router";
import { Header } from "../components/header/Header";

export function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
