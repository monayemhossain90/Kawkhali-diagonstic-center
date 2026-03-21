const ListLoading = () => {
    const array = [1,2,3,4, 5,6,7,8];
    return (
        <>
            <div className="flex justify-center flex-wrap gap-4">
                {
                    array.map((item,i)=>{
                        return(
                            <>
                                <div key={i.toString()} className="card px-4 py-4 rounded-lg shadow-lg w-[18rem] animate-pulse">

                                    <div className="card-img-top w-full h-[260px] rounded-md bg-gray-300">

                                    </div>
                                    <div className="card-body mt-2 space-y-2">
                                        <p className="card-text w-full text-white py-2 text-center h-[30px] bg-gray-300 rounded">

                                        </p>
                                        <p className="card-text h-[30px] w-full bg-[#236ca2cc] text-white text-sm text-center py-2 bg-gray-300 rounded">

                                        </p>
                                        <div className="flex gap-4">
                                            <div className="h-[30px] w-1/2 bg-gray-300 rounded"></div>
                                            <div className="h-[30px] w-1/2 bg-gray-300 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    );
};

export default ListLoading;