import Details from "../components/Details/Details.jsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import Services from "../components/Services/Services.jsx";
import Doctors from "../components/Doctors/Doctors.jsx";
import HomeCare from "../components/HomeCare/HomeCare.jsx";
import Layout from "../components/Layout/Layout.jsx";
import Hero from "../components/Hero/Hero.jsx";


const HomePage = () => {
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
            <Layout>
                <Hero/>
                <HomeCare/>
                <Details/>
                <Services/>
                <Doctors title="Our Doctors"/>
            </Layout>
        </>
    );
};

export default HomePage;