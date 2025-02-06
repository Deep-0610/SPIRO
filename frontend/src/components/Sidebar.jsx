import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import ToDoList from "../pages/Dashboard-Pages/ToDoList";
import Dashboard from "../pages/Dashboard-Pages/Dashboard";
import ClassesPage from "../pages/Dashboard-Pages/ClassesPage";
import { Menu, X } from "lucide-react";

const Sidebar = ({ classes, handleLogout, onContentChange }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  if (typeof onContentChange !== "function") {
    console.error("onContentChange is not a function");
    return null;
  }

  return (
    <>
      <button 
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-primary text-white rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg rounded-r-xl overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-100 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:w-auto md:relative flex flex-col justify-between`}
      >
        <div>
          <h1
            className="text-primary text-wrap text-display font-semibold p-4 m-5 cursor-pointer"
            onClick={() => onContentChange(<Dashboard />)}
          >
            SPIRO
          </h1>
          <div className="p-2 mx-5">
            <ul className="grid gap-6 cursor-pointer">
              <li className="text-h3 font-semibold leading-h3">
                <Dropdown
                  title="Classes"
                  items={classes.map((cls) => ({
                    label: cls.subjectname,
                    value: cls._id,
                  }))}
                  onItemSelect={(id) => onContentChange(<ClassesPage id={id} />)}
                />
              </li>
              <li className="text-h3 font-semibold leading-h3" onClick={() => onContentChange(<ToDoList />)}>
                To Do List
              </li>
              <li className="text-h3 font-semibold leading-h3" onClick={() => onContentChange("Assignment Content")}> 
                Assignment
              </li>
              <li className="text-h3 font-semibold leading-h3" onClick={() => onContentChange("Calendar Content")}> 
                Calendar
              </li>
              <li className="text-h3 font-semibold leading-h3">
                <Dropdown
                  title="Activity"
                  items={[
                    { label: "Games", value: "games" },
                    { label: "Simulation", value: "simulation" },
                    { label: "Quiz", value: "quiz" },
                  ]}
                  onItemSelect={(value) => onContentChange(`Activity content for ${value}`)}
                />
              </li>
            </ul>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="text-h3 leading-h3 p-2 text-start my-5 mx-5 font-semibold"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Sidebar;
