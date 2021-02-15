import CircularProgress from "../Extra/CircularProgress";
import SkillBar from "./SkillsContainers/SkillBar";

export default function SkillSection() {
    return (
        <div>
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-5f97ac3 op-section elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-element_type="section" id="skills">
                <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4aba0a3a" data-element_type="column">
                            <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-element-b60e394 elementor-widget elementor-widget-heading"
                                        data-element_type="widget" data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                            <h2 className="elementor-heading-title elementor-size-default"> Skills</h2>
                                        </div>
                                    </div>
                                    <div className="elementor-element elementor-element-571699cd elementor-widget elementor-widget-coco-skills-circle"
                                        data-element_type="widget"
                                        data-widget_type="coco-skills-circle.default">
                                        <div className="elementor-widget-container">
                                            <div className="skill-circle-holder">
                                                <div className="custom-skill-circle">
                                                    <CircularProgress fillColor="#6db363" outColor="#232329" textColor="#f37b83" percentage={80} title="Laravel" />
                                                    <p className="skill-circle-text">
                                                        <b className="text-light-orange"
                                                            onMouseEnter={(e) => { e.target.className = 'text-light-green'; }}
                                                            onMouseLeave={(e) => { e.target.className = 'text-light-orange'; }} >
                                                            Laravel
                                                        </b>
                                                    </p>
                                                </div>
                                                <div className="custom-skill-circle" style={{ marginRight: '6% !important' }}>
                                                    <CircularProgress fillColor="#f37b83" outColor="#232329" textColor="#6db363" percentage={65} title="NodeJS" />
                                                    <p className="skill-circle-text">
                                                        <b className="text-light-orange"
                                                            onMouseEnter={(e) => { e.target.className = 'text-light-orange'; }}
                                                            onMouseLeave={(e) => { e.target.className = 'text-light-green'; }}>
                                                            NodeJS
                                                        </b>
                                                    </p>
                                                </div>

                                                <div className="custom-skill-circle">
                                                    <CircularProgress fillColor="#6db363" outColor="#232329" textColor="#f37b83" percentage={70} title="VueJS" />
                                                    <p className="skill-circle-text">
                                                        <b className="text-light-orange"
                                                            onMouseEnter={(e) => { e.target.className = 'text-light-green'; }}
                                                            onMouseLeave={(e) => {
                                                                e.target.className = 'text-light-orange';
                                                            }}>
                                                            VueJS</b>
                                                    </p>
                                                </div>
                                                <div className="custom-skill-circle">
                                                    <CircularProgress fillColor="#f37b83" outColor="#232329" textColor="#6db363" percentage={60} title="DJango" />
                                                    <p className="skill-circle-text">
                                                        <b className="text-light-orange"
                                                            onMouseEnter={(e) => { e.target.className = 'text-light-orange'; }}
                                                            onMouseLeave={(e) => { e.target.className = 'text-light-green'; }}>
                                                            DJango
                                                            </b>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <section
                                        className="elementor-section elementor-inner-section elementor-element elementor-element-768b497c elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                        data-element_type="section">
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div className="elementor-row">
                                                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5d765e1c"
                                                    data-element_type="column">
                                                    <div
                                                        className="elementor-column-wrap elementor-element-populated">
                                                        <div className="elementor-widget-wrap">
                                                            <div className="elementor-element elementor-element-473d749 elementor-widget elementor-widget-coco-skills-lines"
                                                                data-element_type="widget"
                                                                data-widget_type="coco-skills-lines.default">
                                                                <div className="elementor-widget-container">
                                                                    <div className="skills-holder">
                                                                        <SkillBar title="HTML / CSS" percentage={80} />
                                                                        <SkillBar title="PHP" percentage={90} />
                                                                        <SkillBar title="PHP" percentage={90} />
                                                                        <SkillBar title="ReactJS" percentage={65} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-238c58ec"
                                                    data-element_type="column">
                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                        <div className="elementor-widget-wrap">
                                                            <div className="elementor-element elementor-element-218ea304 elementor-widget elementor-widget-coco-skills-lines"
                                                                data-element_type="widget" data-widget_type="coco-skills-lines.default">
                                                                <div className="elementor-widget-container">
                                                                    <div className="skills-holder">
                                                                        <div className="skills-holder">
                                                                            <SkillBar title="JavaScript" percentage={85} />
                                                                            <SkillBar title="Python" percentage={80} />
                                                                            <SkillBar title="Database Management" percentage={80} />
                                                                            <SkillBar title="Machine Learning" percentage={65} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}