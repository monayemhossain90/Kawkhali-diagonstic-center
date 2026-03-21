import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import Services from "../components/Services/Services.jsx";
import Layout from "../components/Layout/Layout.jsx";


const ServicePage = () => {
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
              <Services/>
          </Layout>
        </>
    );
};

export default ServicePage;