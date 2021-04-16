import { useState } from "react";
import Typed from 'react-typed';
// import './../../../styles/AboutMe.module.css'

export default function index() {
    const [isShowMore, setIsShowMore] = useState(true)
    const getMoreLessClass = () => {
        return ' ' + (isShowMore == true ? 'fadeOut hidden' : 'fadeIn show');
    }
    return (
        <section
            className="elementor-section elementor-top-section elementor-element elementor-element-3c638111 op-section elementor-section-boxed elementor-section-height-default relative py-16 mt-16"
            data-id="3c638111" data-element_type="section" id="about_me">
            <div className="container mx-auto px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-light-dark text-white w-full mb-6 shadow-xl rounded-lg mt-32">
                    <div className="px-6">
                        <div className="text-center  flex flex-wrap justify-center">
                            {/* <div className="flex flex-wrap justify-center"> */}
                            {/* <div className="w-full lg:w-3/12 lg:order-2 flex" > */}
                            <img
                                alt="Vikas Ukani"
                                src={process.env.LINK + "/images/Vikas-Ukani.jpg"}
                                className={"custom-image-shadow h-auto align-middle border-none absolute -top-40"}
                                style={{ maxWidth: "300px" }}
                            />
                            <div className="circle">
                            </div>
                            {/* </div> */}
                            {/* </div> */}
                        </div>
                        <div className="mt-2 border-t text-white text-center bottom-50">
                            <h2 className="text-5xl font-extrabold fontComic"> Vikas Ukani </h2>
                            <div className="mb-2 text-white mt-3 text-2xl fontComic">
                                <i className="fas fa-briefcase mr-2 text-lg "></i>
                                Solution Engineer - Maven
                            </div>
                            <div className="text-sm leading-normal mt-0 mb-2 text-white font-bold uppercase text-1xl fontComic">
                                <i className="fas fa-map-marker-alt mr-2 text-lg text-white"></i> Gujarat, India
                            </div>
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-10/12 px-4 text-justify text-gray-400">
                                    <span className="font-extrabold text-4xl text-light-green fontComic ">Who I am,</span>
                                    <br />
                                    <div className="mb-4 font-semibold mt-5 fontComic text-base font-18">
                                        Hello, I`m Vikas Ukani,
                                        As a professional, I`m a {" "}
                                        <Typed
                                            className={"text-gray-100"}
                                            strings={[
                                                'Front-End',
                                                'Back-End',
                                                'Full-Stack Web Application'
                                            ]}
                                            typeSpeed={100}
                                            backSpeed={80}
                                            loop
                                        >
                                            <span> </span>
                                        </Typed>
                                        Developer who loves to write well clean design, easy to readable, and high-quality code blocks to design, build and develop a software or bunch of webpages.
                                        I also have a <b className="text-gray-100">Master of Computer Application degree from Jaipur National University and Bachelors of Computer Application degree from S. V. Patel of Computer Science Collage</b>.
                                    </div>

                                    <div className="mb-4  font-semibold mt-10 text-base font-18">
                                        I'm very passionate about my work and curious to work with big ideas.
                                        Also, I excited to work on large-scale applications and websites to <span className="text-gray-100">explore my skill-set and gain a high quality of product-based knowledge.</span>
                                    </div>

                                    <div className="mt-10 font-extrabold text-4xl text-light-green fontComic">What I do,</div>
                                    {/* <div id="showMoreInfo" className={getMoreLessClass()}> */}
                                    <div className="mb-4 font-semibold mt-5 text-base font-18   ">
                                        I currently work as a <span className="text-gray-100">FullStack Developer for Maven Company in Gujarat, India</span>.
                                        I have more than <span className="text-gray-100">4+ years of office experience</span> working in software development in local as well as multi-national companies.
                                        I  have in-depth knowledge of backend frameworks like <span className="text-gray-100">Laravel/Lumen, NodeJS, Django/Flask to Build REST APIs</span>, and as a Frontend Framework I use <span className="text-gray-100">VueJS, ReactJS, and AngularJS</span>,
                                        I can handle my website information with several databases, Such as <span className="text-gray-100">MySQL, MongoDB, PostgreSQL, SQLite</span>.
                                    </div>
                                    {/* </div> */}

                                    {/* <button
                                        className="text font-normal text-pink-600"
                                        onClick={e => {
                                            setIsShowMore(!isShowMore)
                                        }}
                                    >
                                        <span>{isShowMore == true ? 'More' : 'Less'}</span>
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}