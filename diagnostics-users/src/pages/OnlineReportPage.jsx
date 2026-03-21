import Navbar from "../components/Layout/Navbar.jsx";
import Footer from "../components/Layout/Footer.jsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import Report from "../components/Report/Report.jsx";


const OnlineReportPage = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
    }, [pathname]);

    return (
        <>
            <Navbar/>
            <Report/>
            <Footer/>
        </>
    );
};

export default OnlineReportPage;