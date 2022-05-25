import { init } from '@emailjs/browser';
init("YH-EO2DfjHOouhQ3X");
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';



const ContactMeForm = () => {
    const form = useRef();
    const [contactForm, setContactForm] = useState({
        emailTo: '',
        name: '',
        subject: '',
        body: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('contactForm::', contactForm);

        // {
        //     from_name: contactForm.subject || '',
        //     to_name: "Vikas Ukani",
        //     message: contactForm.body || '',
        //     reply_to: contactForm.emailTo || '',
        // }
        /** sending EMAIL */
        // emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPlATE_ID, form.current, process.env.USER_ID
        emailjs.sendForm('service_91bziyi', 'template_471854m', form.current, process.env.USER_ID
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

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
                    <p className="justify-center center-text w-full pb-5 text-white text-base"><b>OR</b></p>
                    <hr />
                    <div className="rounded-3xl hover:bg-red-500 elementor-element elementor-element-330f316b global-background-color elementor-widget elementor-widget-shortcode"
                        data-id="330f316b" data-element_type="widget"
                        data-widget_type="shortcode.default">
                        <div className="elementor-widget-container  ">
                            <div className="elementor-shortcode">
                                <div role="form" className="wpcf7"
                                    lang="en-US" dir="ltr">
                                    <form ref={form} 
                                        onSubmit={onSubmit}
                                        method="post" className="wpcf7-form init demo"
                                        noValidate="novalidate" data-status="init">
                                        <p>
                                            <span
                                                className="wpcf7-form-control-wrap your-name">
                                                <input type="text"
                                                    size="40"
                                                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                    aria-required="true"
                                                    aria-invalid="false"
                                                    placeholder="Name"
                                                    name="name"
                                                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                                                />
                                            </span>
                                        </p>
                                        <p>
                                            <span
                                                className="wpcf7-form-control-wrap your-email">
                                                <input
                                                    type="email" name="emailTo"
                                                    size="40"
                                                    className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                    aria-required="true"
                                                    aria-invalid="false"
                                                    onChange={(e) => setContactForm({ ...contactForm, emailTo: e.target.value })}
                                                    placeholder="Email" />
                                            </span>
                                        </p>
                                        <p>
                                            <span
                                                className="wpcf7-form-control-wrap your-subject">
                                                <input
                                                    type="text" name="subject"
                                                    defaultValue="" size="40"
                                                    className="wpcf7-form-control wpcf7-text"
                                                    aria-invalid="false"
                                                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                                                    placeholder="Subject" />
                                            </span>
                                        </p>
                                        <p>
                                            <span
                                                className="wpcf7-form-control-wrap your-message">
                                                <textarea
                                                    name="body" cols="40"
                                                    rows="10"
                                                    className="wpcf7-form-control wpcf7-textarea"
                                                    aria-invalid="false"
                                                    onChange={(e) => setContactForm({ ...contactForm, body: e.target.value })}
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