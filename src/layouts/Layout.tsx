import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeImg from "@/components/HomeImg";

type Props = {
  children: React.ReactNode;
  showHomeImg: boolean;
};

const Layout = ({ children, showHomeImg = false }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHomeImg && <HomeImg />}

      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
