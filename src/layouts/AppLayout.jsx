import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../utils/ScrollToTop";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <ScrollToTop />
      <Header />
      <main className="flex-1 flex justify-center items-center  pt-10 bg-[hsl(var(--background))]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
