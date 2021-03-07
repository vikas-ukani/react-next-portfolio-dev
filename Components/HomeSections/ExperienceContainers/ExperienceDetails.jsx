
const CoruscateExperience = () => {
    var year = '2017-19'
    var companyName = 'Coruscate Solutions Pvt. Ptd.'
    return (
        <li className="timeline-event transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-105">
            <span className="timeline-circle"> </span>
            <div className="timeline-event-content text-justify shadow-xl bg- rounded-lg h-18" >
                <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0"
                    onMouseEnter={(e) => {
                        if (e.target.children && e.target.children.jobTitle && e.target.children.jobTitle.className) {
                            e.target.children.jobTitle.className = 'text-light-green';
                        }
                        if (e.target.children && e.target.children.companyClass && e.target.children.companyClass.className) {
                            e.target.children.companyClass.className = 'text-light-green';
                        }
                        if (e.target.children && e.target.children.programAnalyst && e.target.children.programAnalyst.className) {
                            e.target.children.programAnalyst.className = 'text-light-orange';
                        }
                        if (e.target.children && e.target.children.AngularJS && e.target.children.AngularJS.className) {
                            e.target.children.AngularJS.className = 'text-light-orange';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (e.target.children && e.target.children.jobTitle && e.target.children.jobTitle.className) {
                            e.target.children.jobTitle.className = 'text-white';
                        }
                        if (e.target.children && e.target.children.companyClass && e.target.children.companyClass.className) {
                            e.target.children.companyClass.className = 'text-light-orange';
                        }
                        if (e.target.children && e.target.children.programAnalyst && e.target.children.programAnalyst.className) {
                            e.target.children.programAnalyst.className = 'text-white';
                        }
                        if (e.target.children && e.target.children.AngularJS && e.target.children.AngularJS.className) {
                            e.target.children.AngularJS.className = 'text-white';
                        }
                    }
                    }
                >
                    <img className="h-45 md:w-5/12 md:h-auto md:rounded-none rounded-full mx-auto"
                        width="40%"
                        style={{ minWidth: '40%' }}
                        src={process.env.LINK + "images/company/coruscate-logo.jpg"} alt={companyName} width="384" height="512" />
                    <div className="text-2xl bg-black pt-6 md:p-8 text-center md:text-left space-y-4">
                        <p className="pt-5 pb-5 pl-2 pr-2 text-justify leading-relaxed">
                            After my graduation completed.
                            I Started my journey as <span className="text-white" id='programAnalyst'>Program Analyst</span> at <span id='companyClass' className='text-light-orange' >Coruscate Solutions Pvt Ptd</span>,
                            Where I learn first JAVASCRIPT framework which is <span id='AngularJS' className="text-white">AngularJS</span> to make a dynamic content and user interactive websites.
                            Moreover, I learn Laravel backend framework to handle backend logic of website.
                        </p>
                        <div className="font-medium bottom-10 inline-block md:align-text-bottom ">
                            <div className="text-cyan-600 mt-10">
                                <b className='text-light-orange'>{year}</b>
                                <br />

                                <i id='companyClass' className='text-white'>
                                    <b>{companyName}</b>
                                </i>
                            </div>
                            <div className="text-gray-500 mt-2" id='jobTitle' >
                                <b>Program Analyst</b>
                            </div>
                            <div className="text-gray-600 mt-2">
                                <b>Gujarat, India</b>
                            </div>
                        </div>
                    </div>
                </figure>
            </div>
            <div className="timeline-event-date">{year}</div>
        </li>
        // <li className="timeline-event text-justify">

        //     <span className="timeline-circle"> </span>
        //     <div className="timeline-event-content text-justify"
        //         onMouseEnter={(e) => {
        //             if (e.target.children && e.target.children.jobTitle && e.target.children.jobTitle.className) {
        //                 e.target.children.jobTitle.className = 'text-light-green';
        //             }
        //             if (e.target.children && e.target.children.companyClass && e.target.children.companyClass.className) {
        //                 e.target.children.companyClass.className = 'text-light-green';
        //             }
        //             if (e.target.children && e.target.children.programAnalyst && e.target.children.programAnalyst.className) {
        //                 e.target.children.programAnalyst.className = 'text-light-orange';
        //             }
        //             if (e.target.children && e.target.children.AngularJS && e.target.children.AngularJS.className) {
        //                 e.target.children.AngularJS.className = 'text-light-orange';
        //             }
        //         }}
        //         onMouseLeave={(e) => {
        //             if (e.target.children && e.target.children.jobTitle && e.target.children.jobTitle.className) {
        //                 e.target.children.jobTitle.className = 'text-white';
        //             }
        //             if (e.target.children && e.target.children.companyClass && e.target.children.companyClass.className) {
        //                 e.target.children.companyClass.className = 'text-light-orange';
        //             }
        //             if (e.target.children && e.target.children.programAnalyst && e.target.children.programAnalyst.className) {
        //                 e.target.children.programAnalyst.className = 'text-white';
        //             }
        //             if (e.target.children && e.target.children.AngularJS && e.target.children.AngularJS.className) {
        //                 e.target.children.AngularJS.className = 'text-white';
        //             }
        //         }
        //         }
        //     >
        //         <b className='text-light-orange'>2017 - 2019 </b>  - <i id='jobTitle' className='text-white'><b>Program Analyst</b></i> <br />
        //                                                         After my graduation completed.
        //                                                         I Started my journey as <span className="text-white" id='programAnalyst'>Program Analyst</span> at <span id='companyClass' className='text-light-orange' >Coruscate Solutions Pvt Ptd</span>, Where I learn first JAVASCRIPT framework which is <span id='AngularJS' className="text-white">AngularJS</span> to make a dynamic content and user interactive websites.
        //                                                     Moreover, I learn Laravel backend framework to handle backend logic of website. </div>
        //     <div className="timeline-event-date">17-19</div>
        // </li>
    )
}

const DignizantExperience = () => {
    var companyName = 'Dignizant Technology'
    var year = '2019-20'
    return (
        <li className="timeline-event transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-105">
            <span className="timeline-circle"> </span>
            <div className="timeline-event-content text-justify shadow-xl bg- rounded-lg h-18" >
                <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0"
                    onMouseEnter={(e) => {
                        if (e.target.children && e.target.children.jobTitle && e.target.children.jobTitle.className) {
                            e.target.children.jobTitle.className = 'text-light-green';
                        }
                        if (e.target.children && e.target.children.companyClass && e.target.children.companyClass.className) {
                            e.target.children.companyClass.className = 'text-light-green';
                        }
                        if (e.target.children && e.target.children.vueJS && e.target.children.vueJS.className) {
                            e.target.children.vueJS.className = 'text-light-green';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (e.target.children && e.target.children.jobTitle && e.target.children.jobTitle.className) {
                            e.target.children.jobTitle.className = 'text-white';
                        }
                        if (e.target.children && e.target.children.companyClass && e.target.children.companyClass.className) {
                            e.target.children.companyClass.className = 'text-light-orange';
                        }
                        if (e.target.children && e.target.children.className && e.target.children.className.className) {
                            e.target.children.vueJS.className = 'text-light-orange';
                        }
                    }
                    }>
                    <img className="h-45 md:w-5/12 md:h-auto md:rounded-none rounded-full mx-auto"
                        width="40%"
                        style={{ minWidth: '40%' }}
                        src={process.env.LINK + "images/company/dignizant-logo.jpg"} alt={companyName} width="384" height="512" />
                    <div className="text-2xl bg-black pt-6 md:p-8 text-center md:text-left space-y-4">
                        <p className="pt-5 pb-5 pl-2 pr-2 text-justify leading-relaxed">
                            Working as FrontEnd and Backend Development at < span id='companyClass' className='text-light-orange' > {companyName}</span>.
                            Exploring skills in <span id='vueJS' className='text-light-orange'>VueJS Framework</span> to build powerful and animated UI&UX.
                            Also, Handling servers to manage and maintain project on productions. Such as AWS, Digital Ocean etc ...
                            </p>
                        <div className="font-medium bottom-10 inline-block md:align-text-bottom ">
                            <div className="text-cyan-600 mt-10">
                                <b className='text-light-orange'>{year}</b>
                                <br />

                                <i id='companyClass' className='text-white'>
                                    <b>{companyName}</b>
                                </i>
                            </div>
                            <div className="text-gray-500 mt-2" id='jobTitle' >
                                <b>Junior Web Developer</b>
                            </div>
                            <div className="text-gray-600 mt-2">
                                <b>Gujarat, India</b>
                            </div>
                        </div>
                    </div>
                </figure>
            </div>
            <div className="timeline-event-date">{year}</div>
        </li>
    )
}


const MavenExperience = () => {
    let companyName = "Maven Agency"
    let year = "2020-21"
    return (
        <li className="timeline-event transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-105">            <span className="timeline-circle"> </span>
            <div className="timeline-event-content text-justify shadow-xl bg- rounded-lg h-18" >
                <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0"
                    onMouseEnter={(e) => {
                        if (e.target.children && e.target.children.jobTitle && e.target.children.jobTitle.className) {
                            e.target.children.jobTitle.className = 'text-light-green';
                        }
                        if (e.target.children && e.target.children.className && e.target.children.className.className) {
                            console.log('e.target.children', e.target.children);
                            e.target.children.companyClass.className = 'text-light-green';
                        }
                        if (e.target.children && e.target.children.className && e.target.children.className.className) {
                            e.target.children.reactJS.className = 'text-light-orange';
                        }
                    }
                    }
                    onMouseLeave={(e) => {
                        if (e.target.children && e.target.children.jobTitle && e.target.children.jobTitle.className) {
                            e.target.children.jobTitle.className = 'text-white';
                        }
                        if (e.target.children && e.target.children.companyClass && e.target.children.companyClass.className) {
                            e.target.children.companyClass.className = 'text-light-orange';
                        }
                        if (e.target.children && e.target.children.reactJS && e.target.children.reactJS.className) {
                            e.target.children.reactJS.className = 'text-light-green';
                        }
                    }
                    }>
                    <img className="h-45 md:w-5/12 md:h-auto md:rounded-none rounded-full mx-auto"
                        width="40%"
                        style={{ minWidth: '40%' }}
                        src={process.env.LINK + "images/company/maven-agency-logo.jpg"} alt={companyName} width="384" height="512" />
                    <div className="text-2xl bg-black pt-6 md:p-8 text-center md:text-left space-y-4">
                        <p className="pt-5 pb-5 pl-2 pr-2 text-justify leading-relaxed">
                            Currently, I'm working as full-stack developer at <span id='companyClass' className='text-light-orange' >{companyName} </span>
                                    Creating frontend and backend platform to develop and maintain a website that can help to enhance my client's business.
                                    Exploring technical skills in <span id='reactJS' className="text-light-green">ReactJS with NextJS and VueJS</span> as frontend-development.
                        </p>
                        <div className="font-medium bottom-10 inline-block md:align-text-bottom ">
                            <div className="text-cyan-600 mt-10">
                                <b className='text-light-orange'>{year}</b>
                                <br />

                                <i id='jobTitle' className='text-white'>
                                    <b>{companyName}</b> ( Present ) </i>
                            </div>
                            <div className="text-gray-500 mt-2">
                                <b>Software Engineer</b>
                            </div>
                            <div className="text-gray-600 mt-2">
                                <b>Gujarat, India</b>
                            </div>
                        </div>
                    </div>
                </figure>

            </div>
            <div className="timeline-event-date">{year}</div>
        </li>
    )
}

export { CoruscateExperience, DignizantExperience, MavenExperience }