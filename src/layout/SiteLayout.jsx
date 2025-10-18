import Main from "../components/Main";
import Navbar from "../components/Navbar";

const SiteLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-full">
      <Navbar />
      <Main>{children}</Main>
    </div>
  );
};

export default SiteLayout;
