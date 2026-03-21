import service1 from "../../assets/images/service1.jpg";
import service2 from "../../assets/images/service2.jpg";
import service3 from "../../assets/images/service3.jpg";
import service4 from "../../assets/images/service4.jpg";
import service5 from "../../assets/images/service5.jpg";


const Services = () => {
    return (
        <>
            <div>
                <div className="container">
                    <h1 className="text-4xl text-center py-8 font-bold text-gray-800">Services</h1>
                </div>
            </div>

            <div className="mb-32">
                <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-7">
                        <h1 className="text-2xl font-bold">Health Checkups</h1>
                        <p className="text-gray-800 my-5">
                            We believe that preventive care is key to maintaining good health. Our comprehensive health
                            checkup services are designed to provide you with a holistic understanding of your
                            well-being, helping you make informed decisions to live a healthier life.
                        </p>
                        <h1 className="text-xl font-bold">Why Choose Our Health Checkups?</h1>
                        <p className="text-gray-800">
                            Our health checkup packages are thoughtfully designed to cater to individuals of all ages
                            and lifestyles. Whether you're proactively managing your health or seeking to address
                            specific concerns, our services offer:
                        </p>

                        <ul className="list-disc pl-8 mt-5 text-gray-800 space-y-2">
                            <li>
                                Comprehensive Assessments: Our health checkups cover a wide range of parameters, from
                                basic screenings to in-depth evaluations, providing a comprehensive view of your health
                                status.
                            </li>
                            <li>
                                Early Detection: Detecting health issues early can significantly improve treatment
                                outcomes. Our tests are aimed at identifying potential problems before they become
                                serious.
                            </li>
                            <li>
                                Tailored Recommendations: Based on your test results and health history, we provide
                                personalized recommendations for lifestyle modifications and follow-up care.
                            </li>
                        </ul>
                    </div>
                    <div className="lg:col-span-5 h-auto">
                        <img src={service1} className="h-full" alt=""/>
                    </div>
                </div>
            </div>

            {/*Ultrasonography service*/}
            <div className="mb-32">
                <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5 h-auto">
                        <img src={service2} className="h-full" alt=""/>
                    </div>
                    <div className="lg:col-span-7">
                        <h1 className="text-2xl font-bold">Ultrasonography Services</h1>
                        <p className="text-gray-800 my-5">
                            we offer state-of-the-art ultrasonography services that provide clear and detailed images to
                            aid in accurate diagnosis and treatment planning. Our skilled team of professionals and
                            advanced technology ensure that you receive the highest quality ultrasonography experience.
                        </p>
                        <h1 className="text-xl font-bold">Our Ultrasonography Offerings</h1>
                        <p className="text-gray-800">
                            We provide a range of ultrasonography services, each tailored to address specific medical
                            needs:
                        </p>

                        <ul className="list-disc pl-8 mt-5 text-gray-800 space-y-2">
                            <li>
                                Abdominal Ultrasound: Visualize organs such as the liver, gallbladder, kidneys, and
                                pancreas to aid in diagnosing conditions like liver disease, gallstones, and kidney
                                disorders.
                            </li>
                            <li>
                                Pelvic Ultrasound: Evaluate reproductive organs in both men and women, assisting in the
                                diagnosis of conditions such as ovarian cysts, fibroids, and prostate issues.
                            </li>
                            <li>
                                Obstetric Ultrasound: Monitor the health and development of the fetus during pregnancy,
                                providing expectant parents with essential information about their baby's well-being.
                            </li>
                            <li>
                                Musculoskeletal Ultrasound: Examine joints, tendons, and muscles to diagnose conditions
                                like arthritis, tendonitis, and sports-related injuries.
                            </li>
                            <li>
                                Thyroid Ultrasound: Assess the thyroid gland for abnormalities, helping to identify
                                thyroid nodules, cysts, and other thyroid-related issues.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*Pathology Service*/}
            <div className="mb-32">
                <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-7">
                        <h1 className="text-2xl font-bold">Pathology Services</h1>
                        <p className="text-gray-800 my-5">
                            Our pathology services play a critical role in accurate diagnosis and healthcare decision-making. Led by experienced pathologists and equipped with advanced technology, our pathology department is dedicated to delivering precise insights into your health.
                        </p>
                        <h1 className="text-xl font-bold">Our Pathology Offerings</h1>
                        <p className="text-gray-800">
                            We provide a comprehensive range of pathology services that contribute to the accuracy of medical diagnoses:
                        </p>

                        <ul className="list-disc pl-8 mt-5 text-gray-800 space-y-2">
                            <li>
                                Histopathology: Our expert pathologists analyze tissue samples to identify abnormalities, helping to diagnose conditions such as cancer, infections, and inflammatory diseases.
                            </li>
                            <li>
                                Cytopathology: We study cells obtained from various body fluids and tissues, aiding in the detection of cancer, infections, and other cellular abnormalities.
                            </li>
                            <li>
                                Hematology: Our specialized tests evaluate blood components, supporting the diagnosis of blood disorders, anemia, and clotting disorders.
                            </li>
                            <li>
                                Clinical Chemistry: We analyze blood and bodily fluids to assess organ function, monitor conditions like diabetes, and provide insights into metabolic health.
                            </li>
                        </ul>
                    </div>
                    <div className="lg:col-span-5 h-auto">
                        <img src={service3} className="h-full" alt=""/>
                    </div>
                </div>
            </div>

            {/*Biochemistry service*/}
            <div className="mb-32">
                <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5 h-auto">
                        <img src={service4} className="h-full" alt=""/>
                    </div>
                    <div className="lg:col-span-7">
                        <h1 className="text-2xl font-bold">Biochemistry Services</h1>
                        <p className="text-gray-800 my-5">
                            Our biochemistry services provide a deeper understanding of your body's biochemical processes. With cutting-edge technology and a team of experts, we aim to deliver accurate and insightful analyses that contribute to your overall health assessment.
                        </p>
                        <h1 className="text-xl font-bold">Our Biochemistry Offerings</h1>
                        <p className="text-gray-800">
                            We offer a range of biochemistry tests that contribute to a comprehensive health evaluation:
                        </p>

                        <ul className="list-disc pl-8 mt-5 text-gray-800 space-y-2">
                            <li>
                                Blood Glucose: Monitoring blood sugar levels to assess diabetes management and metabolic health.
                            </li>
                            <li>
                                Liver Function: Evaluating liver enzymes and proteins to gauge liver health and detect potential issues.
                            </li>
                            <li>
                                Kidney Function: Analyzing markers in the blood and urine to assess kidney function and detect kidney disorders.
                            </li>
                            <li>
                                Lipid Profile: Measuring cholesterol levels to evaluate cardiovascular health and assess the risk of heart disease.
                            </li>
                            <li>
                                Electrolyte Balance: Determining electrolyte levels to ensure proper nerve and muscle function and overall fluid balance.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*Electrocardiogram (ECG) Services*/}
            <div className="mb-32">
                <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-7">
                        <h1 className="text-2xl font-bold">Electrocardiogram (ECG) Services</h1>
                        <p className="text-gray-800 mt-5">
                            Our advanced Electrocardiogram (ECG) services provide crucial insights into your heart's
                            electrical activity. Our skilled team and state-of-the-art technology ensure accurate ECG
                            readings to support your heart health assessment.
                        </p>
                        <p className="text-gray-800 my-5">
                            An Electrocardiogram (ECG) is a non-invasive test that records the electrical activity of your heart over a specific period. ECGs help healthcare providers detect irregular heart rhythms, assess heart health, and diagnose various heart conditions.
                        </p>
                        <h1 className="text-xl font-bold">Our ECG Offerings</h1>
                        <p className="text-gray-800">
                            We offer a range of ECG services tailored to your heart health needs:
                        </p>

                        <ul className="list-disc pl-8 mt-5 text-gray-800 space-y-2">
                            <li>
                                Resting ECG: This standard test records your heart's activity while you're at rest, providing a baseline assessment of your heart's rhythm and electrical patterns.
                            </li>
                            <li>
                                Stress ECG (Treadmill Test): During this test, your heart's activity is monitored while you exercise on a treadmill. It helps evaluate how your heart responds to physical stress and assesses blood flow to your heart.
                            </li>
                            <li>
                                Holter Monitoring: A portable device records your heart's activity over 24 to 48 hours, capturing any irregular rhythms that may occur during your daily activities.
                            </li>
                        </ul>
                    </div>
                    <div className="lg:col-span-5 h-auto">
                        <img src={service5} className="h-full" alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;