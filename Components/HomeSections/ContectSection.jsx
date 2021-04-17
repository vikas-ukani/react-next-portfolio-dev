import ContactMeForm from './ContactMe/ContactMeForm'
import ContactMeSideDetails from './ContactMe/ContactMeSideDetails'
export default function ContactSection() {
    return (
        <div>
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-22c0e006 op-section elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="22c0e006" data-element_type="section" id="contact">
                <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                        <ContactMeSideDetails />
                        <ContactMeForm />
                    </div>
                </div>
            </section>
        </div>
    )
}