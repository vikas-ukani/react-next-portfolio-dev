import ExperienceCoverLetterSection from "./ExperienceCoverLetterSection";


export default function ExperienceSection() {

    return (
        <div>
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-3c638419 op-section elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="3c638419" data-element_type="section" id="experience">
                <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-45f4744f"
                            data-id="45f4744f" data-element_type="column">
                            <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-element-8225bc2 elementor-widget elementor-widget-heading"
                                        data-id="8225bc2" data-element_type="widget"
                                        data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                            <h2 className="elementor-heading-title elementor-size-default">
                                                Experience</h2>
                                        </div>
                                    </div>
                                    <div className="elementor-element elementor-element-670172ec elementor-widget elementor-widget-coco-timeline"
                                        data-id="670172ec" data-element_type="widget"
                                        data-widget_type="coco-timeline.default">
                                        <div className="elementor-widget-container">
                                            <ul className="timeline-holder">
                                                <li className="timeline-event">

                                                    <span className="timeline-circle"> </span>
                                                    <div className="timeline-event-content" onMouseEnter={(e) => {
                                                        e.target.children.jobTitle.className = 'text-light-green';
                                                        e.target.children.companyClass.className = 'text-light-green';
                                                        e.target.children.programAnalyst.className = 'text-light-orange';
                                                        e.target.children.AngularJS.className = 'text-light-orange';
                                                    }}
                                                        onMouseLeave={(e) => {
                                                            e.target.children.jobTitle.className = 'text-white';
                                                            e.target.children.companyClass.className = 'text-light-orange';
                                                            e.target.children.programAnalyst.className = 'text-white';
                                                            e.target.children.AngularJS.className = 'text-white';
                                                        }}
                                                    >
                                                        <b className='text-light-orange'>2017 - 2019 </b> <i id='jobTitle' className='text-white'><b>Program Analyst</b></i> <br />
                                                        After my graduation completed.
                                                        I Started my journey as <span className="text-white" id='programAnalyst'>Program Analyst</span> at <span id='companyClass' className='text-light-orange' >Coruscate Solutions Pvt Ptd</span>, Where I learn first JAVASCRIPT framework which is <span id='AngularJS' className="text-white">AngularJS</span> to make a dynamic content and user interactive websites.
                                                        Moreover, I learn Laravel backend framework to handle backend logic of website. </div>
                                                    <div className="timeline-event-date">17-19</div>
                                                </li>
                                                <li className="timeline-event">
                                                    <span className="timeline-circle">
                                                    </span>
                                                    <div className="timeline-event-content"
                                                        onMouseEnter={(e) => {
                                                            e.target.children.jobTitle.className = 'text-light-green';
                                                            e.target.children.companyClass.className = 'text-light-green';
                                                            e.target.children.vueJS.className = 'text-white';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.target.children.jobTitle.className = 'text-white';
                                                            e.target.children.companyClass.className = 'text-light-orange';
                                                            e.target.children.vueJS.className = 'text-light-orange';
                                                        }}
                                                    >
                                                        <b className='text-light-orange'>2019 - 2020</b> - <i id='jobTitle'><b>Junior Web Developer</b></i> <br />
                                                        Working as FrontEnd and Backend Development at <span id='companyClass' className='text-light-orange' >Dignizant Technology</span>.
                                                        Exploring skills in <span id='vueJS' className='text-light-orange'>VueJS Framework</span> to build powerful and animated UI&UX.
                                                    </div>
                                                    <div className="timeline-event-date">19-20</div>
                                                </li>
                                                <li className="timeline-event"> <span
                                                    className="timeline-circle">
                                                </span>
                                                    <div className="timeline-event-content" onMouseEnter={(e) => {
                                                        e.target.children.jobTitle.className = 'text-light-green';
                                                        e.target.children.companyClass.className = 'text-light-green';
                                                        e.target.children.reactJS.className = 'text-light-orange';
                                                    }}
                                                        onMouseLeave={(e) => {
                                                            e.target.children.jobTitle.className = 'text-white';
                                                            e.target.children.companyClass.className = 'text-light-orange';
                                                            e.target.children.reactJS.className = 'text-light-green';
                                                        }}
                                                    >
                                                        <b className='text-light-orange'>2020-2021</b> - <i id='jobTitle'><b>Software Engineer</b></i> <br />
                                                        Currently, I'm working as full-stack developer at <span id='companyClass' className='text-light-orange' >Maven Agency</span>
                                                        Creating frontend and backend platform to develop and maintain a website that can help to enhance my client's business.
                                                        Exploring technical skills in <span id='reactJS' className="text-light-green">ReactJS and NextJS</span> frontend frameworks.
                                                    </div>
                                                    <div className="timeline-event-date">20-21</div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <ExperienceCoverLetterSection /> */}
                    </div>
                </div>
            </section>
        </div>
    )
}