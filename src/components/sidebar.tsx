import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context";
import { MdDashboard, MdOutlineAccountBalance } from "react-icons/md";
import { FaCalendarAlt, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  const { setLoggedInUser } = useContext(GlobalContext);

  return (
    <div>
      <h1 className="h-16 border-b-2 font-bold text-center">St Peters UMC</h1>
      <ul>
        <Link to={"/"}>
          <div className="flex items-center justify-center gap-2 mt-4 font-semibold text-xl">
            <MdDashboard />
            <li>Dashboard</li>
          </div>
        </Link>
        <Link to={"/members"}>
          <div className="flex items-center justify-center gap-2 mt-4 font-semibold text-xl">
            <FaUsers />
            <li>Members</li>
          </div>
        </Link>
        <Link to={"/finance"}>
          <div className="flex items-center justify-center gap-2 mt-4 font-semibold text-xl">
            <MdOutlineAccountBalance />
            <li>Finance</li>
          </div>
        </Link>
        <Link to={"/events"}>
          <div className="flex items-center justify-center gap-2 mt-4 font-semibold text-xl">
            <FaCalendarAlt />
            <li>Events</li>
          </div>
        </Link>
        <Link to={"/history"}>
          <div className="flex items-center justify-center gap-2 mt-4 font-semibold text-xl">
            <li>History</li>
          </div>
        </Link>
        <Link to={"/settings"}>
          <div className="flex items-center justify-center gap-2 mt-4 font-semibold text-xl">
            <li>Settings</li>
          </div>
        </Link>
        <Link to={"/login"} onClick={() => setLoggedInUser("")}>
          <div className="flex items-center justify-center gap-2 mt-4 font-semibold text-xl">
            <li>Logout</li>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
