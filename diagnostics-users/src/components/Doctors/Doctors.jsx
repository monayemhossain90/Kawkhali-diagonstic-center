import ListLoading from "../Loader/ListLoading.jsx";
import DoctorListItem from "../DoctorList/DoctorListItem.jsx";
import BookingModal from "../modal/BookingModal.jsx";
import {useGetDoctorsQuery} from "../../redux/features/doctor/doctorApi.js";

const Doctors = ({title}) => {
    const {data, isLoading} = useGetDoctorsQuery();
    const doctors = data?.data || [];


    return (
        <>
            <div className="grid grid-cols-1 pt-8">
                <div className="container">
                    <h1 className="text-4xl text-center py-8 font-bold text-gray-800">{title}</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 pt-8 pb-12">
                <div className="container">

                    {isLoading ? (
                        <>
                            <ListLoading/>
                        </>
                    ) : (
                        <>
                            <div className="flex justify-center flex-wrap gap-4">

                                {doctors.length > 0 && (
                                    doctors.map((item, i) => {
                                        if(i <4) {
                                            return (
                                                <>
                                                    <DoctorListItem doctor={item} key={i.toString()}/>
                                                </>
                                            )
                                        }
                                   })
                                )
                                }


                            </div>
                        </>
                    )
                    }
                </div>
            </div>

            <BookingModal/>

        </>
    );
};

export default Doctors;