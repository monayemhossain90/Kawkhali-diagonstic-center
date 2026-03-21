import TopBar from "./TopBar.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";


const Layout = ({children}) => {
    return (
        <>
           <TopBar/>
           <Navbar/>
            {children}
            <Footer/>
        </>
    );
};

export default Layout;