
const DignizantExperience = () => {
    var companyName = 'Dignizant Technology'
    var year = '2019-20'
    return (
        <li className="timeline-event transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-105">
            <span className="timeline-circle"> </span>
            <div className="timeline-event-content text-justify shadow-xl bg- rounded-lg h-18" >
                <figure className="md:flex bg-black rounded-xl p-8 md:p-0"
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
                    <img className="h-45 md:w-5/12 md:h-auto md:rounded-none  mx-auto"
                        width="40%"
                        style={{ minWidth: '40%' }}
                        src={process.env.LINK + "/images/company/dignizant-logo.jpg"} alt={companyName} width="384" height="512" />
                    <div className="  bg-black pt-2 md:p-8 text-center md:text-left space-y-4">
                        <p className=" pl-1 pr-1 text-justify leading-relaxed fontComic text-base font-18">
                            Working as FrontEnd and Backend Development at < span id='companyClass' className='text-light-orange' > {companyName}</span>.
                            Exploring skills in <span id='vueJS' className='text-light-orange'>VueJS Framework</span> to build powerful and animated UI&UX.
                            Also, Handling servers to manage and maintain project on productions. Such as AWS, DigitalOcean etc ...
                        </p>
                        <div className="  ">
                            <div className="text-cyan-600 mt-10">
                                <p className='text-light-orange fontComic text-base font-bold'>{year}</p>
                                <i id='companyClass' className='text-white fontComic text-base'>
                                    <b>{companyName}</b>
                                </i>
                            </div>
                            <div className="text-gray-500 mt-1 fontComic text-base">
                                <b>Junior Web Developer</b>
                            </div>
                            <div className="text-gray-600 mt-1 fontComic text-base">
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
export default DignizantExperience