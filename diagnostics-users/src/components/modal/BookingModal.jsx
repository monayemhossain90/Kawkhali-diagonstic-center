import {useDispatch, useSelector} from "react-redux";
import {Modal} from "antd";
import {useEffect, useState} from "react";
import {Button, Spinner} from "@material-tailwind/react";
import {SetBookingModalOpen} from "../../redux/features/modal/modalSlice.js";
import {useCreateAppointmentMutation} from "../../redux/features/appointment/appointmentApi.js";



const BookingModal = () => {
    const dispatch = useDispatch();
    const modalOpen = useSelector((state)=>state.modal.bookingModalOpen);
    const [patientName, setPatientName] = useState("")
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [age, setAge] = useState("")
    const [address, setAddress] = useState("")
    const [createAppointment, {isSuccess,isLoading}] = useCreateAppointmentMutation();
    const {doctorId} = useSelector(state=>state.doctor);
   



    const handleOk = () => {
        dispatch(SetBookingModalOpen(false));
    };


    const handleCancel = () => {
        dispatch(SetBookingModalOpen(false));
    };


    useEffect(()=>{
        if(isSuccess){
            dispatch(SetBookingModalOpen(false));
            setPatientName("");
            setPhone("");
            setAge("");
            setAddress("")
        }
    },[isSuccess, dispatch])





    const handleSubmit = (e) => {
        e.preventDefault();
        createAppointment({
            doctorId:doctorId,
            patientName,
            phone,
            age,
            address,
            appointmentDate: new Date(date)
        })
    }


    return (
        <>
            <Modal title="Make Appointment" open={modalOpen} onOk={handleOk}>
                <form onSubmit={handleSubmit}>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="amount">
                            Patient Name
                        </label>
                        <input onChange={(e) => setPatientName(e.target.value)} value={patientName}
                               className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="text"
                               id="amount" required/>
                    </div>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="ref">
                            Phone Number
                        </label>
                        <input onChange={(e) => setPhone(e.target.value)} value={phone}
                               className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="text"
                               id="ref" required/>
                    </div>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="ref">
                            Date
                        </label>
                        <input onChange={(e) => setDate(e.target.value)} value={date}
                               className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="date"
                               id="ref" required/>
                    </div>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="ref">
                            Age
                        </label>
                        <input onChange={(e) => setAge(e.target.value)} value={age}
                               className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="text"
                               id="ref" required/>
                    </div>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="des">
                            Address
                        </label>
                        <input onChange={(e) => setAddress(e.target.value)} value={address}
                               className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="text"
                               id="des" required/>
                    </div>
                    <div className="flex mt-6 gap-6">
                        <button id="cancel" type="reset" onClick={handleCancel}
                                className="block cursor-pointer w-1/2 bg-red-500 hover:bg-red-700 text-center text-white font-bold py-2 px-4 rounded">
                            Cancel
                        </button>
                        <Button disabled={isLoading}
                                className={`${isLoading && "capitalize"} w-1/2 flex gap-3 items-center justify-center disabled:cursor-not-allowed`}
                                type="submit"
                        >
                            {
                                isLoading ? (
                                    <>
                                        <Spinner className="h-4 w-4"/> Processing...
                                    </>
                                ) : (
                                    <>
                                        Confirm
                                    </>
                                )
                            }

                        </Button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default BookingModal;