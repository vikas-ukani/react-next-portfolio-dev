
const SkillBar = ({ title, percentage }) => (
    <div className="skill-holder">
        <div className="skill-text">
            <div className="skill">
                <div className="skill-fill" data-fill={percentage + '%'}> </div>
            </div>
            <span>
                <b className={percentage >= 70 ? 'text-light-orange' : ''}>{title}</b>
            </span>
        </div>
        <div className="skill-percent text-light-orange">
            <b className={percentage >= 70 ? 'text-light-orange' : ''}> {percentage}</b>%
        </div>
    </div >
)

export const LeftSkillHolder = () => (
    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5d765e1c"
        data-element_type="column">
        <div className="elementor-column-wrap elementor-element-populated">
            <div className="elementor-widget-wrap">
                <div className="elementor-element elementor-element-473d749 elementor-widget elementor-widget-coco-skills-lines"
                    data-element_type="widget"
                    data-widget_type="coco-skills-lines.default">
                    <div className="elementor-widget-container">
                        <div className="skills-holder">
                            <SkillBar title="HTML / CSS" percentage={75} />
                            <SkillBar title="PHP" percentage={85} />
                            <SkillBar title="Server Management" percentage={65} />
                            <SkillBar title="Python" percentage={60} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export const RightSkillHolder = () => (
    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-238c58ec"
        data-element_type="column">
        <div className="elementor-column-wrap elementor-element-populated">
            <div className="elementor-widget-wrap">
                <div className="elementor-element elementor-element-218ea304 elementor-widget elementor-widget-coco-skills-lines"
                    data-element_type="widget" data-widget_type="coco-skills-lines.default">
                    <div className="elementor-widget-container">
                        <div className="skills-holder">
                            <div className="skills-holder">
                                <SkillBar title="JavaScript" percentage={65} />
                                <SkillBar title="ReactJS" percentage={60} />
                                <SkillBar title="Database Management" percentage={80} />
                                <SkillBar title="Machine Learning" percentage={45} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)