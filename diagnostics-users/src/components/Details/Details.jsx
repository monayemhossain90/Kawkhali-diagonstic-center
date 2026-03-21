import './details.css';

const Details = () => {
    return (
        <>
            <div>
                <div className="container">
                    <h1 className="text-4xl text-center py-8 font-bold text-gray-800">Who we are</h1>
                </div>
            </div>

            <div className="details">
                <div className="w-full bg-[#236ca2e8]">
                    <div className="container text-white py-28 space-y-4">
                        <p className="text-justify">
                            At KHCDC, we are a united group of healthcare enthusiasts bound by our passion for accuracy and genuine care. Our primary focus is on providing you with meticulously crafted diagnostic solutions, all to champion your unique health voyage.
                        </p>

                        <p className="text-justify">
                            Our journey is centered around your health. Through accurate diagnostics, we empower you and your healthcare providers with the insights needed for informed decisions. Each member of our team is driven by a shared commitment to your care and the quality of our services.
                        </p>

                        <p className="text-justify">
                            Our team comprises skilled medical technologists, experienced pathologists, and caring support staff. United by a common purpose, we utilize cutting-edge technology and uphold the strictest ethical standards to ensure that your diagnostic experience is accurate and reliable.
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Details;