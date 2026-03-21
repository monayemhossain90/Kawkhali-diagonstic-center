import {AiOutlineMail} from "react-icons/ai";
import {CiLocationOn} from "react-icons/ci";


const TopBar = () => {
    return (
        <>
          <div className="py-2">
              <div className="container flex flex-col items-center sm:flex-row sm:justify-between">
                  <div className="flex gap-4">
                      <div className="flex gap-2 items-center hidden lg:flex">
                          <AiOutlineMail className="text-xl text-[#236ca2]"/>
                          <span>kawkhalihealthcare@gmail.com</span>
                      </div>
                      <div className="flex gap-2 items-center">
                          <CiLocationOn className="text-xl text-[#236ca2]"/>
                          <address>
                              Kawkhali , Rangamati
                          </address>
                      </div>
                  </div>
                  <div>
                      <span className="font-bold mr-3">Call Now :</span>
                      +880 16003 38284
                  </div>
              </div>
          </div>
        </>
    );
};

export default TopBar;