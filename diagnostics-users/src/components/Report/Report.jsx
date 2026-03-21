import {Button} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import {useSearchReportMutation} from "../../redux/features/report/reportApi.js";
import ReportModal from "../modal/ReportModal.jsx";


const Report = () => {
    const [invoiceNumber, setInvoiceNumber] = useState("");
    const [phone, setPhone] = useState("");
    const [searchReport, {data,isSuccess,isLoading}] = useSearchReportMutation();
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        searchReport({
            invoiceNumber: Number(invoiceNumber),
            phone: String(phone)
        })
    }


    useEffect(() => {
       if(isSuccess) {
           setModalOpen(true);
       }
    }, [isSuccess]);




    return (
        <>
            <div className="pt-12">
                <div className="container flex justify-center">
                    <form onSubmit={handleSubmit} className="w-full lg:w-[600px] flex flex-col lg:flex-row gap-5 items-center">
                        <div className="w-full lg:w-auto">
                            <input onChange={(e)=>setPhone(e.target.value)} value={phone} type="text" required className="w-full rounded-md border border-primary bg-transparent px-3 py-2 font-sans text-sm font-normal placeholder:text-gray-600 outline outline-0 transition-all focus:outline-1 focus:outline-primary" placeholder="Phone Number"/>
                        </div>
                        <div className="w-full lg:w-auto">
                            <input onChange={(e)=>setInvoiceNumber(e.target.value)} value={invoiceNumber} type="number" required  className="w-full rounded-md border border-primary bg-transparent px-3 py-2 font-sans text-sm font-normal placeholder:text-gray-600 outline outline-0 transition-all focus:outline-1 focus:outline-primary" placeholder="Invoice No #"/>
                        </div>
                        <Button disabled={isLoading} type="submit" color="blue" className="w-full lg:w-auto capitalize bg-primary disabled:cursor-not-allowed">
                            {isLoading ? "Searching..." : "Search"}
                        </Button>
                    </form>
                </div>
            </div>

            <div className="mt-28 mb-56">
                <div className="container">
                    <p className="text-gray-800 mb-8">
                        The eReports Portal is a convenient tool for our esteemed clients to access instant, online and timely information about their clinical tests. This facility is a secure, fast and user friendly technology to make your engagement with Kawkhali Health Care a better experience.
                    </p>
                    <h1 className="text-2xl font-bold text-gray-800">
                        What information can be found on the eReports Portal?
                    </h1>
                    <p className="text-gray-800">
                        Most of the diagnostic test results are archived in our central database which may be viewed or downloaded from this online portal. Unfortunately, results of some clinical procedures (i.e. X-ray, CT, MRI, USG, endoscopy, ECG among others) cannot be archived due to various circumstances. You must collect those reports physically.
                    </p>
                </div>
            </div>


            <ReportModal modalOpen={modalOpen} setModalOpen={setModalOpen} report={data?.data}/>

        </>
    );
};

export default Report;