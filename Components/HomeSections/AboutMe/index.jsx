import { useState } from "react";


export default function index() {
    const [isShowMore, setIsShowMore] = useState(true)

    const getMoreLessClass = () => {
        return ' ' + (isShowMore == true ? 'fadeOut hidden' : 'fadeIn show');
    }

    return (
        <section className="relative py-16 mt-16">
            <div className="container mx-auto px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-light-dark text-white w-full mb-6 shadow-xl rounded-lg mt-32">
                    <div className="px-6">
                        {/* <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 lg:order-2 flex ">
                                <div className="">
                                    <img
                                        alt="Vikas Ukani"
                                        src={process.env.LINK + "/images/Vikas-Ukani.jpg"}
                                        className="custom-image-shadow rounded-full h-auto align-middle border-none absolute -mt-40 "
                                        style={{ maxWidth: "300px" }}
                                    />
                                </div>
                            </div>
                        </div> */}

                        <div className="text-center mt-48">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-3/12 lg:order-2 flex" >
                                    <img
                                        alt="Vikas Ukani"
                                        src={process.env.LINK + "/images/Vikas-Ukani.jpg"}
                                        className="custom-image-shadow rounded-full h-auto align-middle border-none absolute -top-40 "
                                        style={{ maxWidth: "300px" }}
                                    />
                                </div>
                            </div>

                            <h4 className="text-5xl font-bold ">
                                Vikas Ukani
                            </h4>
                            <div className="text-sm leading-normal mt-0 mb-2 text-white font-bold uppercase">
                                <i className="fas fa-map-marker-alt mr-2 text-lg text-white"></i> Gujarat, India
                            </div>
                            <div className="mb-2 text-white mt-10">
                                <i className="fas fa-briefcase mr-2 text-lg "></i>
                                Solution Engineer
                                <br />
                                - Maven
                            </div>
                        </div>
                        <div className="mt-5 py-10 border-t text-white text-center pb-32">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-10/12 px-4 text-justify text-gray-400">
                                    <div className="mb-4 text-2xl font-semibold">
                                        Hello, I`m Vikas Ukani,
                                        As a professional, I`m a Full-Stack Web-App Developer who loves to write well clean design, easy to understand, and high-quality code blocks to design, build and develop a software or bunch of webpages.
                                        I have been completed my graduation for <span className="text-gray-100">Bachelors of Computer Application from S.V. Patel of Computer Science Collage</span> from Surat, Gujarat, India, and <b className="text-gray-100">Master of Computer Application</b> from Jaipur National University.
                                    </div>

                                    <div className="mb-4 text-2xl font-semibold mt-10">
                                        I'm very passionate about my work and curious to work with big ideas.
                                        Also, I excited to work on large-scale applications and websites to <span className="text-gray-100">explore my skill-set and gain a high quality of product-based knowledge.</span>
                                    </div>

                                    <div id="showMoreInfo" className={getMoreLessClass()}>
                                        <div className="mb-4 text-2xl font-semibold mt-10">
                                            I have more than 3+ years of office experience working in software development in local as well as multi-national companies.
                                            I  have in-depth knowledge of backend frameworks like Laravel/Lumen, NodeJS, Django/Flask to Build REST APIs, and as a Frontend Framework I use VueJS, ReactJS, and AngularJS,
                                            I can handle my website information with several DB Tools, Such as MySQL, MongoDB, PostgreSQL, SQLite
                                        </div>
                                    </div>

                                    <button
                                        className="text font-normal text-pink-600"
                                        onClick={e => {
                                            setIsShowMore(!isShowMore)
                                        }}
                                    >
                                        <span>{isShowMore == true ? 'More' : 'Less'}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}