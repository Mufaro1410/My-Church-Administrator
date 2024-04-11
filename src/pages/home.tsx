import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/context";

function Home() {
  const { loggedInUser, setLoggedInUser } = useContext(GlobalContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="flex">
      <div className="w-[250px] border-r-2 min-h-screen">
        <Sidebar />
      </div>
      <div className="w-[100%]">
        <div className="h-16 border-b-2">
          <Navbar />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
