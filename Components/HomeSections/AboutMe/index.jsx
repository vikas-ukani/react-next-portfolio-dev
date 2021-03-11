import { useState } from "react";


export default function index() {
    const [isShowMore, setIsShowMore] = useState(true)

    const getMoreLessClass = () => {
        return ' ' + (isShowMore == true ? 'fadeOut hidden' : 'fadeIn show');
    }

    return (
        <section className="relative py-16 ">
            <div className="container mx-auto px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-light-dark text-white w-full mb-6 shadow-xl rounded-lg mt-32">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex ">
                                <div className="relative">
                                    <img
                                        alt="Vikas Ukani"
                                        src={process.env.LINK + "/images/Vikas-Ukani.jpg"}
                                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -mt-40 -ml-20 lg:-ml-16"
                                        style={{ maxWidth: "300px" }}
                                    />
                                </div>
                            </div>
                            {/* <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                <div className="py-6 px-3 mt-32 sm:mt-0">
                                    <button
                                        className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                                        type="button"
                                        style={{ transition: "all .15s ease" }}
                                    >
                                        Connect
                      </button>
                                </div>
                            </div> */}
                            {/* <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                            22
                                            </span>
                                        <span className="text-sm text-white">Friends</span>
                                    </div>
                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                            10
                                            </span>
                                        <span className="text-sm text-white">Photos</span>
                                    </div>
                                    <div className="lg:mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                            89
                                            </span>
                                        <span className="text-sm text-white">Comments</span>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="text-center mt-48">
                            <h4 className="text-5xl font-bold ">
                                Vikas Ukani
                            </h4>
                            <div className="text-sm leading-normal mt-0 mb-2 text-white font-bold uppercase">
                                <i className="fas fa-map-marker-alt mr-2 text-lg text-white"></i> Gujarat, India
                            </div>
                            <div className="mb-2 text-white mt-10">
                                <i className="fas fa-briefcase mr-2 text-lg "></i>
                                    Solution Engineer
                                    <br />- Maven
                            </div>
                            {/* <div className="mb-2 text-white">
                                <i className="fas fa-university mr-2 text-lg "></i>
                    University of Computer Science
                            </div> */}
                        </div>
                        <div className="mt-5 py-10 border-t text-white text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-10/12 px-4 text-justify text-gray-400">
                                    <p className="mb-4 text-2xl font-semibold leading-relaxed">
                                        Hello, I`m Vikas Ukani, As a profession,
                                        I`m a Full-Stack Web-App Developer who love to write well clean design, easy to understand and high quality code programs to design,
                                        build and develop a software or bunch of webpages.
                                        I have been completed my graduation for <span className="text-gray-100">Bachelor's of Computer Application from S.V. Patel of Computer Science Collage</span> from Surat, Gujarat, India and <b className="text-gray-100">Master of Computer Application</b> from Jaipur National University.
                                    </p>

                                    <p className="mb-4 text-2xl font-semibold leading-relaxed">
                                        I'm very passionate about my work and curious to work with big ideas.
                                        Also, I excited to work large scale applications and websites to <span className="text-gray-100">explore my skill-set and gain a high quality of product based knowledge.</span>
                                    </p>

                                    <div id="showMoreInfo" className={getMoreLessClass()}>
                                        <p className="mb-4 text-2xl font-semibold leading-relaxed">
                                            I have more than 3+ years of office experience working as a software development in local as well as multi-national companies.
                                            I've solid and hands-on experience with Backend Frameworks like Laravel/Lumen, NodeJS, Django/Flask to build an REST APIs, and as an Frontend Framework I use VueJS, ReactJS and AngularJS,
                                            I can handle my website information with several DB Tools, Such as MySQL, MongoDB, PostgreSQL, SQLite
                                        </p>
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
            </div>
        </section>
    )
}