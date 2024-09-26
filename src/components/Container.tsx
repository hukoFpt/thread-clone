import ContentWrapper from "./ContentWrapper";
import Footer from "./Footer";
import Header from "./Header";
import LoginButton from "./login/LoginButton";
import Sidebar from "./Sidebar";

const Container = () => {
  return (
    <div>
      <Header />
      <LoginButton />
      <div className="flex">
        <div className="guideline">
          <Sidebar />
        </div>
        <ContentWrapper />
      </div>
      <Footer />
    </div>
  );
};

export default Container;
