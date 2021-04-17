const ContactMeForm = () => {
    return (
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-14aa74ce"
            data-id="14aa74ce" data-element_type="column"
            data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">

            <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">

                    <div className="w-full flex social-link-icon-holder">
                        <a className="social-link-icon" href="https://www.linkedin.com/in/vikas-ukani-a02499167/" target="_blank">
                            <img src={process.env.LINK + "/social-icons/linkedin.png"} alt="Linked In" />
                        </a>
                        <a className="social-link-icon" href="https://github.com/vikas-ukani" target="_blank">
                            <img src={process.env.LINK + "/social-icons/github.png"} alt="GitHub" />
                        </a>
                        <a className="social-link-icon" href="https://www.kaggle.com/vikasukani" target="_blank">
                            <img src={process.env.LINK + "/social-icons/kaggle.png"} alt="Kaggle Master" />
                        </a>
                        <a className="social-link-icon" href="https://stackoverflow.com/users/8744576/vikas-ukani" target="_blank">
                            <img src={process.env.LINK + "/social-icons/stack-overflow.png"} alt="Stack Overflow" />
                        </a>
                        <a className="social-link-icon" href="https://twitter.com/vikas_ukani5" target="_blank">
                            <img src={process.env.LINK + "/social-icons/twitter.png"} alt="Twitter" />
                        </a>
                    </div>
                    <p className="justify-center center-text w-full pb-5 text-white text-base">OR</p>
                    <hr />
                    <div className="elementor-element elementor-element-330f316b global-background-color elementor-widget elementor-widget-shortcode"
                        data-id="330f316b" data-element_type="widget"
                        data-widget_type="shortcode.default">
                        <div className="elementor-widget-container">
                            <div className="elementor-shortcode">
                                <div role="form" className="wpcf7" id="wpcf7-f207-p9-o1"
                                    lang="en-US" dir="ltr">
                                    <form action="https://demo.cocobasic.com/volos-wp/demo-3/#wpcf7-f207-p9-o1"
                                        method="post" className="wpcf7-form init demo"
                                        noValidate="novalidate" data-status="init">
                                        <div style={{ display: 'none' }}>
                                            <input
                                                type="hidden" name="_wpcf7"
                                                defaultValue="207" />
                                            <input type="hidden"
                                                name="_wpcf7_version" defaultValue="5.3.2" />
                                            <input type="hidden" name="_wpcf7_locale"
                                                defaultValue="en_US" />
                                            <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f207-p9-o1" />
                                            <input
                                                type="hidden"
                                                name="_wpcf7_container_post"
                                                defaultValue="9" />
                                            <input type="hidden" name="_wpcf7_posted_data_hash" defaultValue="" />
                                        </div>
                                        <p>
                                            <span
                                                className="wpcf7-form-control-wrap your-name">
                                                <input type="text" name="your-name"
                                                    size="40"
                                                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                    aria-required="true"
                                                    aria-invalid="false"
                                                    placeholder="Name" />
                                            </span>
                                        </p>
                                        <p>
                                            <span
                                                className="wpcf7-form-control-wrap your-email">
                                                <input
                                                    type="email" name="your-email"
                                                    size="40"
                                                    className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                    aria-required="true"
                                                    aria-invalid="false"
                                                    placeholder="Email" />
                                            </span>
                                        </p>
                                        <p>
                                            <span
                                                className="wpcf7-form-control-wrap your-subject">
                                                <input
                                                    type="text" name="your-subject"
                                                    defaultValue="" size="40"
                                                    className="wpcf7-form-control wpcf7-text"
                                                    aria-invalid="false"
                                                    placeholder="Subject" />
                                            </span>
                                        </p>
                                        <p>
                                            <span
                                                className="wpcf7-form-control-wrap your-message">
                                                <textarea
                                                    name="your-message" cols="40"
                                                    rows="10"
                                                    className="wpcf7-form-control wpcf7-textarea"
                                                    aria-invalid="false"
                                                    placeholder="Message...">
                                                </textarea>
                                            </span>
                                        </p>
                                        <p className="contact-submit-holder">
                                            <input
                                                type="submit" defaultValue="SEND"
                                                className="wpcf7-form-control wpcf7-submit" />
                                        </p>
                                        <div className="wpcf7-response-output"
                                            aria-hidden="true">
                                        </div>

                                        <div className="wpcf7-response-output"
                                            aria-hidden="true">
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMeForm;