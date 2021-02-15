import CircularGraphs from "./SkillsContainers/CircularGraphs";
import { LeftSkillHolder, RightSkillHolder } from "./SkillsContainers/SkillGraphs";

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
                                        <CircularGraphs />
                                    </div>
                                    <section
                                        className="elementor-section elementor-inner-section elementor-element elementor-element-768b497c elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                        data-element_type="section">
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div className="elementor-row">
                                                <LeftSkillHolder />
                                                <RightSkillHolder />

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