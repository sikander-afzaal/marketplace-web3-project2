import Footer from "@/components/ui/common/Footer/Footer";
import Navbar from "@/components/ui/common/Header/Navbar";

export default function BaseLayout({ children }) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <Navbar />
        <div className="fit">{children}</div>
      </div>
      <Footer />
    </>
  );
}
