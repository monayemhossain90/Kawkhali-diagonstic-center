import doctor_pic from "../../assets/images/doctor.jpg";
import {Button} from "@material-tailwind/react";
import {SetBookingModalOpen} from "../../redux/features/modal/modalSlice.js";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getToken} from "../../helper/SessionHelper.js";
import {SetDoctorId} from "../../redux/features/doctor/doctorSlice.js";


const DoctorListItem = ({doctor}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {_id, name, specialization, experience} = doctor || {};


    const handleClick = () => {
        if(getToken()){
            dispatch(SetDoctorId(_id));
            dispatch(SetBookingModalOpen(true));
        }else{
            navigate("/login")
        }
    }


    return (
        <>
            <div className="card px-4 py-4 rounded-lg shadow-lg w-[18rem]">
                <img
                    src={doctor_pic}
                    className="card-img-top w-full h-[260px] rounded-md"
                    alt="product_image"
                />
                <div className="card-body space-y-2">
                    <p className="card-text w-full text-2xl font-bold font-serif">
                        {name}
                    </p>
                    <p className="card-text w-full text-sm">
                        {specialization}
                    </p>
                    <p className="card-text w-full h-[40px] text-sm">
                        {experience}
                    </p>
                    <div className="flex mt-1">
                        <Button
                            onClick={handleClick}
                            className="w-full">Book</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DoctorListItem;