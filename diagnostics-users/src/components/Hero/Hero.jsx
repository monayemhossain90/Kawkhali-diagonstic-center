import './hero.css';
import {useNavigate} from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="hero">
                <div className="w-full h-full bg-[rgba(0,0,0,0.6)]">
                    <div className="container text-white py-14 md:py-32 space-y-8 lg:w-1/2">
                       <h1>TOTAL HEALTH CARE SOLUTION</h1>
                        <h1 className="text-6xl font-bold">
                            Your Most Trusted
                            Health Partner in Kawkhali
                        </h1>
                        <p>
                            A provider of a wide range of Diagnostics & Pathology services, along with specialization in pre-employment checks.
                        </p>
                        <button onClick={()=>navigate("/online-report")} className="px-5 py-3 bg-[#236ca2] text-white rounded-lg">Online Report </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;