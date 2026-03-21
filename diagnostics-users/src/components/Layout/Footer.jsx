import {AiOutlineMail} from "react-icons/ai";
import {FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube} from "react-icons/fa";
import {CiLocationOn} from "react-icons/ci";
import {IoCallOutline} from "react-icons/io5";
import {useNavigate} from "react-router-dom";


const Footer = () => {
    const navigate = useNavigate();

    //bg-[#2694af]

    return (
        <>
           <div className="mt-8 bg-[#236ca2] text-white py-10">
              <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  <div>
                     <h1 className="text-2xl">Address</h1>
                      <hr className="w-[60px] mt-3 border-b-[3px] text-primary border-[#24c1e7]"/>
                      <div className="mt-4 space-y-4">
                          <li className="flex gap-3 items-center">
                              <CiLocationOn className="text-xl"/>
                              <address>
                                  Kawkhali , Rangamati
                              </address>
                          </li>
                          <li className="flex gap-3 items-center">
                              <IoCallOutline className="text-xl"/>
                              <span> +8801793837035</span>
                          </li>
                          <li className="flex gap-3 items-center">
                              <AiOutlineMail className="text-xl"/>
                              <span>kawkhalihealthcare@gmail.com</span>
                          </li>
                      </div>
                  </div>
                  <div>
                      <h1 className="text-2xl">Links</h1>
                      <hr className="w-[60px] mt-3 border-b-[3px] text-primary border-[#24c1e7]"/>
                      <div className="flex gap-8 mt-4 pl-[11px]">
                          <ul className="list-disc space-y-2">
                              <li onClick={()=>navigate("/")} className="cursor-pointer">Home</li>
                              <li onClick={()=>navigate("/about")} className="cursor-pointer">About</li>
                              <li onClick={()=>navigate("/services")} className="cursor-pointer">Services</li>
                          </ul>
                          <ul className="list-disc space-y-2">
                              <li onClick={()=>navigate("/doctors")} className="cursor-pointer">Doctors</li>
                              <li onClick={()=>navigate("/contact")} className="cursor-pointer">Contact</li>
                              <li onClick={()=>navigate("/online-report")} className="cursor-pointer">Online Report</li>
                          </ul>
                      </div>
                  </div>
                  <div>
                      <h1 className="text-2xl">Follow Us</h1>
                      <hr className="w-[60px] mt-3 border-b-[3px] text-primary border-[#24c1e7]"/>
                      <div className="flex items-center mt-6 gap-4">
                          <a href="https://www.facebook.com" target="_blank"  className="border cursor-pointer p-2 text-white bg-transparent">
                              <FaFacebookF/>
                          </a>
                          <a href="https://twitter.com/" target="_blank" className="border cursor-pointer p-2 text-white bg-transparent">
                              <FaTwitter/>
                          </a>
                          <a href="https://www.youtube.com/" target="_blank" className="border cursor-pointer p-2 text-white bg-transparent">
                              <FaYoutube/>
                          </a>
                          <a href="https://www.linkedin.com/" target="_blank" className="border cursor-pointer p-2 text-white bg-transparent">
                              <FaLinkedinIn/>
                          </a>
                      </div>
                  </div>
              </div>
           </div>
        </>
    );
};

export default Footer;