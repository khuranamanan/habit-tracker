import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { HiArchive } from "react-icons/hi";

function NavigationBar() {
  function handleClassNames({ isActive }) {
    return `flex gap-2 justify-center rounded-lg hover:bg-blue-400 px-3 py-2 ${
      isActive ? "font-bold" : ""
    }`;
  }

  return (
    <div className="p-4 bg-blue-500 text-white flex flex-col items-center justify-center sm:flex-row  sm:justify-between flex-wrap ">
      <div className="text-lg font-bold">Habit Tracker</div>

      <div className="flex gap-4">
        <NavLink to="/" className={handleClassNames}>
          <AiOutlineHome size={25} />
          Home
        </NavLink>
        <NavLink to="/archive" className={handleClassNames}>
          <HiArchive size={25} />
          Archive
        </NavLink>
      </div>
    </div>
  );
}

export default NavigationBar;
