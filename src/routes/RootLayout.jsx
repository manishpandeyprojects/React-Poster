import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <main className="bg-indigo-700 min-h-screen">
      <Header />
      <Outlet />
    </main>
  );
}

export default RootLayout;
