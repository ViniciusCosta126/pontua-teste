import Sidebar from "../../components/SideBar/Sidebar";
import "./main.scss";

const Home = () => {
  return (
    <div className="grid">
      <Sidebar />
      <div className="pesquisa"></div>
      <div className="main-content"></div>
    </div>
  );
};

export default Home;
