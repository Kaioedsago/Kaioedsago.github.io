import { CodeBracketSquareIcon, Bars3BottomRightIcon, XMarkIcon  } from "@heroicons/react/24/solid";
import { useState } from 'react';
import { Link } from "react-scroll";
import { topics } from "../routes/Rotas";

const Header = () => {
    const [open, setOpen] =useState(false);
  return (
    <div className={`w-full relative z-10 top-0 left-0 ${ open ? "text-black bg-white" : "text-white"}`}>
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <CodeBracketSquareIcon className="w-7 h-7 text-purple-900" />
          <span>Kaio Eduardo</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12 bg-white" : "top-[-490px]"
          }`}
        >
          {topics.map((topic, index) => (
               <li className="font-semibold w-fit px-2 cursor-pointer my-7 rounded-full md:my-0 md:ml-8 hover:bg-purple-600 hover:bg-opacity-[46.5%] hover:shadow-[0_0_2em_0.5em] hover:shadow-purple-600 hover:transition-opacity hover:duration-100 hover:ease-out" key={index}>
                 <Link
                   activeClass="active"
                   to={topic.path}
                   spy={true}
                   smooth={true}
                   offset={0} 
                   duration={500}
                 >
                   {topic.title}
                 </Link>
               </li>
             ))}
          <button className="btn bg-purple-900 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static hover:bg-purple-900 hover:shadow-[0_0_2em_0.5em] hover:shadow-purple-600 hover:transition-opacity hover:duration-100 hover:ease-linear">
           Contato
          </button>
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Header;

