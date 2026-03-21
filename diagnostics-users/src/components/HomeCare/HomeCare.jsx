import {FaUserDoctor} from "react-icons/fa6";
import {FaAmbulance} from "react-icons/fa";
import {LuClipboardList} from "react-icons/lu";


const HomeCare = () => {
    return (
        <>
           <div className="py-20">
               <div className="container grid grid-cols-1 lg:grid-cols-3 gap-12">
                   <div>
                       <div className="flex items-center gap-4">
                           <div className="border-t border-r border-l p-2 border-[#236ca2]">
                               <FaUserDoctor className="text-2xl text-[#236ca2] "/>
                           </div>
                           <h1 className="text-2xl text-[#236ca2] font-medium">Qualified Doctors</h1>
                       </div>
                       <div className="border-b border-[#236ca2] mb-2"></div>
                       <p className="text-md text-gray-800">
                           Our doctors have a wide range of clinical experience ranging from newly qualified junior
                           doctors to senior consultants.
                       </p>
                   </div>
                   <div>
                       <div className="flex items-center gap-4">
                           <div className="border-t border-r border-l p-2 border-[#236ca2]">
                               <FaAmbulance className="text-2xl text-[#236ca2] "/>
                           </div>
                           <h1 className="text-2xl text-[#236ca2] font-medium">Emergency Cares</h1>
                       </div>
                       <div className="border-b border-[#236ca2] mb-2"></div>
                       <p className="text-md text-gray-800">
                           Our centers provide convenient and high-quality care for a variety of common illnesses and injuries.
                       </p>
                   </div>
                   <div>
                       <div className="flex items-center gap-4">
                           <div className="border-t border-r border-l p-2 border-[#236ca2]">
                               <LuClipboardList className="text-2xl text-[#236ca2] "/>
                           </div>
                           <h1 className="text-2xl text-[#236ca2] font-medium"> 24 Hours Service</h1>
                       </div>
                       <div className="border-b border-[#236ca2] mb-2"></div>
                       <p className="text-md text-gray-800">
                           Our technical team is available for 24/7, We always prepared any emergency situation with our best team.
                       </p>
                   </div>
               </div>
           </div>
        </>
    );
};

export default HomeCare;