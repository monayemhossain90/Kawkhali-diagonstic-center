import author from "../../assets/images/author.jpg";


const Management = () => {
    return (
        <>
            <div className="grid grid-cols-1 pt-8 pb-12">
                <div className="container">
                    <p className="text-gray-700">kawkhali Health Care Diagnostic Center</p>
                    <h1 className="text-4xl text-center py-8 font-bold text-gray-800">Our Managements</h1>
                    <div className="flex justify-center flex-wrap gap-4">
                        <div className="card px-4 py-4 rounded-lg shadow-lg w-[18rem]">
                            <img
                                src={author}
                                className="card-img-top w-full h-[300px] rounded-md"
                                alt="product_image"
                            />
                            <div className="card-body">
                                <p className="card-text w-full bg-[#236ca2] text-white py-2 text-center">
                                    KAZI JAMIR UDDIN
                                </p>
                                <p className="card-text w-full bg-[#236ca2cc] text-white text-sm text-center py-2">
                                    MANAGING DIRECTOR
                                </p>
                            </div>
                        </div>
                        <div className="card px-4 py-4 rounded-lg shadow-lg w-[18rem]">
                            <img
                                src={author}
                                className="card-img-top w-full h-[300px] rounded-md"
                                alt="product_image"
                            />
                            <div className="card-body">
                                <p className="card-text w-full bg-[#236ca2] text-white py-2 text-center">
                                    Md. Sajed Alam
                                </p>
                                <p className="card-text w-full bg-[#236ca2cc] text-white text-sm text-center py-2">
                                    MEMBER
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Management;