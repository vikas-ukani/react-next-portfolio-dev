import { EducationSection } from "./EducationSection";
import ExperienceContainers from "./ExperienceContainers";


export default function ExperienceSection() {

    return (
        <div>
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-3c638419 op-section elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="3c638419" data-element_type="section" id="experience">
                <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element " data-element_type="column">
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
                                        data-element_type="widget"
                                        data-widget_type="coco-timeline.default">
                                        <div className="elementor-widget-container">
                                            <ul className="timeline-holder">
                                                <ExperienceContainers />
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <EducationSection /> */}
                        {/* <ExperienceCoverLetterSection /> */}
                    </div>
                </div>
            </section>
        </div >
    )
}