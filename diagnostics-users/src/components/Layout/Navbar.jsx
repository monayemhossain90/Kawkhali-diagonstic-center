import {useState} from "react";
import {HiMenuAlt3} from "react-icons/hi";
import {IoMdClose} from "react-icons/io";
import MobileMenu from "./MobileMenu.jsx";
import {Link, useLocation} from "react-router-dom";
import {getToken, logout} from "../../helper/SessionHelper.js";


const NavLinks = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "About",
        link: "/about",
    },
    {
        id: 1,
        name: "Services",
        link: "/services",
    },
    {
        id: 1,
        name: "Doctors",
        link: "/doctors",
    },
    {
        id: 1,
        name: "Contact",
        link: "/contact",
    },
];

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();
    const path = location.pathname;


    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    //#236ca2f0


    return (
        <>
           <div className="shadow-md h-[80px] grid place-items-center z-10 bg-[#236ca2f0] text-white ">
               <div className="container h-full">
                   <div className="flex items-center justify-between h-full">
                       <div>
                           <h1 className="text-2xl md:text-3xl font-bold font-serif">Diagnostics Center</h1>
                       </div>
                       <nav className="hidden md:block h-full">
                           <ul className="flex items-center h-full">
                               {
                                   NavLinks.map((item,i)=>{
                                       return(
                                           <>
                                               <Link key={i.toString()} to={item.link} className={`hover:border-b-4 hover:border-[#24c1e7] px-4 hover:bg-light-white transition-colors duration-500 text-lg h-full grid place-items-center font-medium ${path=== item.link && "border-b-4 text-white border-[#24c1e7]"}`}>
                                                       {item.name}
                                               </Link>
                                           </>
                                       )
                                   })
                               }


                               {getToken() ? (
                                   <>
                                       <li onClick={()=>logout()} className={`hover:border-b-4 hover:border-[#24c1e7] px-4 hover:bg-light-white transition-colors duration-500 text-lg h-full grid place-items-center font-medium`}>
                                           Logout
                                       </li>
                                   </>
                               ): (
                                   <>
                                       <Link to="/login" className={`hover:border-b-4 hover:border-[#24c1e7] px-4 hover:bg-light-white transition-colors duration-500 text-lg h-full grid place-items-center font-medium ${path==="/login" && "border-b-4 text-white border-[#24c1e7]"}`}>
                                           Login
                                       </Link>
                                   </>
                               )
                               }

                           </ul>
                       </nav>

                       {/* Mobile view  */}
                       <div className="flex items-center gap-4 md:hidden">

                           {/* Mobile Hamburger icon */}
                           {showMenu ? (
                               <IoMdClose
                                   onClick={toggleMenu}
                                   className=" cursor-pointer transition-all"
                                   size={30}
                               />
                           ) : (
                               <HiMenuAlt3
                                   onClick={toggleMenu}
                                   className="cursor-pointer transition-all"
                                   size={30}
                               />
                           )}

                       </div>
                   </div>
               </div>
               <MobileMenu showMenu={showMenu}/>
           </div>
        </>
    );
};

export default Navbar;