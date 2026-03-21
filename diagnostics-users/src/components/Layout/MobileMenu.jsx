import {FaUserCircle} from "react-icons/fa";
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


const MobileMenu = ({showMenu}) => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <>
            <div
                className={`${showMenu ? "left-0" : "-left-[100%]"} fixed top-0 bottom-0 h-screen z-20 flex w-[75%] flex-col justify-between bg-[#236ca2] px-8 pb-6 pt-16 md:hidden transition-all duration-500 rounded-r-xl shadow-md`}>
                <div className="card">
                    <div className="flex items-center justify-start gap-3">
                        <FaUserCircle size={50}/>
                        <div>
                            <h1>Diagnostics Center</h1>
                            {/*<h1 className="text-sm text-slate-500">Premium user</h1>*/}
                        </div>
                    </div>
                    <nav className="nav-items mt-12">
                        <ul className="flex flex-col space-y-4 text-xl">
                            {
                                NavLinks.map((item, i) => {
                                    return (
                                        <Link key={i.toString()} to={item.link}
                                              className={`cursor-pointer pl-3 hover:bg-light-white transition-colors rounded duration-500 ${path === item.link && "bg-light-white"}`}>
                                            {item.name}
                                        </Link>
                                    )
                                })
                            }


                            {getToken() ? (
                                <>
                                    <li onClick={()=>logout()}className={`cursor-pointer pl-3 hover:bg-light-white transition-colors rounded duration-500`}>
                                        Logout
                                    </li>
                                </>
                            ): (
                                <>
                                    <Link to="/login"  className={`cursor-pointer pl-3 hover:bg-light-white transition-colors rounded duration-500 ${path === "/login" && "bg-light-white"}`}>
                                        Login
                                    </Link>
                                </>
                            )
                            }

                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;