const GitHubCalanderSection = () => {
    return (
        <section
            className="elementor-section elementor-top-section elementor-element elementor-element-10b2843 op-section elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-element_type="section" id="github_calander">
            <section className="elementor-container elementor-column-gap-default">
                <div className="elementor-row">
                    <div className="elementor-element elementor-element-6787711 elementor-widget elementor-widget-heading elementor-widget-container"
                    >
                        <h2 className="elementor-heading-title elementor-size-default">
                            GitHub Contrib.
                        </h2>
                        <div className="elementor-element elementor-element-0c2719b global-color elementor-widget elementor-widget-text-editor"
                            data-element_type="widget"
                            data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                                {/* <GitHubCalendar username="vikas-ukani" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default GitHubCalanderSection;