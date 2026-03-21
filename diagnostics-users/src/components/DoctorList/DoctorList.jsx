import BookingModal from "../modal/BookingModal.jsx";
import {useGetDoctorsQuery} from "../../redux/features/doctor/doctorApi.js";
import ListLoading from "../Loader/ListLoading.jsx";
import DoctorListItem from "./DoctorListItem.jsx";


const DoctorList = () => {
    const {data, isLoading} = useGetDoctorsQuery();
    const doctors = data?.data || [];

    return (
        <>
            <div className="grid grid-cols-1 pt-8 pb-12">
                <div className="container">

                    {isLoading ? (
                        <>
                            <ListLoading/>
                        </>
                    ): (
                        <>
                            <div className="flex justify-center flex-wrap gap-4">

                                {doctors.length > 0 && (
                                    doctors.map((item, i) => {
                                        return (
                                            <>
                                                <DoctorListItem doctor={item} key={i.toString()}/>
                                            </>
                                        )
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

export default DoctorList;