export default function () {
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
                                        src={process.env.LINK + "images/Vikas-Ukani.jpg"}
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
                                <div className="w-full lg:w-9/12 px-4">
                                    <p className="mb-4 text-lg leading-relaxed">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, quos nobis nisi quas qui inventore cupiditate doloribus, fugiat earum ratione animi dolorem aperiam sapiente saepe? Consequuntur vitae hic voluptas ut!
                                        Minus labore quo ipsa pariatur dolorem neque doloremque, autem quis deserunt quae velit, nostrum voluptates temporibus quia, eum iste repellat. Sint neque molestias repudiandae maxime voluptatem exercitationem quasi quas quisquam?
                                        Ab rerum commodi nihil asperiores dolorem? Beatae a, alias suscipit vitae impedit sequi. Perspiciatis animi eos dolor vero, magnam quae sed voluptate. Ducimus, fuga recusandae? Ipsum porro beatae distinctio natus.
                                        Fugit in quos, adipisci non alias eaque. Libero veniam aliquam facilis eius aut dicta. Illo eaque deleniti ab a dolorem doloremque at. Fuga saepe modi, in deleniti asperiores eaque dicta.
                                        Quam amet, est quod odio fuga impedit porro sed expedita facere explicabo nostrum suscipit corrupti totam! Laudantium similique repellat possimus! Ratione quo ipsum delectus placeat, error voluptatum debitis dignissimos laborum?
                                    </p>
                                    <a
                                        href="#pablo"
                                        className="font-normal text-pink-600"
                                        onClick={e => e.preventDefault()}
                                    >
                                        Show more
                      </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}