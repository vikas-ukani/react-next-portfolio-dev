import Link from "next/link";


export default function FrontSection() {
    const imageURL = process.env.LINK + '/images/Vikas-Ukani.jpg';
    const imageURLStyle = {
        paddingTop: '10px',
        backgroundImage: `url('${imageURL}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
    }

    const firstName = 'Vikas'.split('')
    const lastName = 'Ukani'.split('')
    // console.log('nameList', nameList);
    return (
        <div>
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-4da9be6a elementor-section-full_width op-section elementor-section-height-default elementor-section-height-default pt"
                style={imageURLStyle}
                data-element_type="section" id="home"
                data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-background-overlay"> </div>
                <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-69ec8709"
                            data-element_type="column">
                            <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                    <section
                                        className="elementor-section elementor-inner-section elementor-element elementor-element-d5c7df1 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-element_type="section">
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div className="elementor-row">
                                                <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-7bc9328"
                                                    data-element_type="column">
                                                    <div
                                                        className="elementor-column-wrap elementor-element-populated">
                                                        <div className="elementor-widget-wrap">
                                                            <div className="elementor-element elementor-element-21f3bf1 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-heading"

                                                                data-element_type="widget"
                                                                data-settings="{&quot;_position&quot;:&quot;absolute&quot;}"
                                                                data-widget_type="heading.default">
                                                                <div className="elementor-widget-container">

                                                                    {/* onMouseLeave={(e) => e.target.className = ''} */}

                                                                    <h1 className={"elementor-heading-title elementor-size-default"} >

                                                                        Hey, I’m
                                                                        <br />

                                                                        <div className={'d-flex text-light-green cursor-none animated'}>
                                                                            {firstName.map((name, idx) => (
                                                                                <div key={idx}
                                                                                    onMouseLeave={(e) => e.target.className = 'animated rubberBand'}
                                                                                    onMouseEnter={(e) => e.target.className = 'animated  text-white'}> {name} </div>
                                                                            ))}
                                                                        &nbsp;
                                                                         {lastName.map((name, idx) => (
                                                                                <div key={idx}
                                                                                    onMouseLeave={(e) => e.target.className = 'animated rubberBand'}
                                                                                    onMouseEnter={(e) => e.target.className = ' text-b'}> {name} </div>
                                                                            ))}
                                                                        </div>
                                                                    </h1>
                                                                </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-8cd91c8 elementor-widget__width-auto elementor-absolute elementor-hidden-phone elementor-widget elementor-widget-button"

                                                                data-element_type="widget"
                                                                data-settings="{&quot;_position&quot;:&quot;absolute&quot;}"
                                                                data-widget_type="button.default">
                                                                <div className="elementor-widget-container">
                                                                    <div
                                                                        className="elementor-button-wrapper">
                                                                        <Link href="#experience">
                                                                            <a href="#experience"
                                                                                className="elementor-button-link elementor-button elementor-size-sm"
                                                                                role="button">
                                                                                <span className="elementor-button-content-wrapper">
                                                                                    <span className="elementor-button-text">My Experience </span>
                                                                                </span>
                                                                            </a>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-6e43dc7 elementor-widget__width-auto elementor-absolute elementor-hidden-phone elementor-widget elementor-widget-button"

                                                                data-element_type="widget"
                                                                data-settings="{&quot;_position&quot;:&quot;absolute&quot;}"
                                                                data-widget_type="button.default">
                                                                <div className="elementor-widget-container">
                                                                    <div className="elementor-button-wrapper">
                                                                        <Link href="#skills">
                                                                            <a href="#skills"
                                                                                className="elementor-button-link elementor-button elementor-size-sm"
                                                                                role="button">
                                                                                <span className="elementor-button-content-wrapper">
                                                                                    <span className="elementor-button-text">Skills </span>
                                                                                </span>
                                                                            </a>
                                                                        </Link>
                                                                        {/* <Link href="/blogs" as={process.env.LINK + "blogs"}>
                                                                            <a href=""
                                                                                className="elementor-button-link elementor-button elementor-size-sm"
                                                                                role="button">
                                                                                <span className="elementor-button-content-wrapper">
                                                                                    <span className="elementor-button-text"> My Blog </span>
                                                                                </span>
                                                                            </a>
                                                                        </Link> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-d1c470a elementor-widget__width-auto elementor-absolute elementor-hidden-phone elementor-widget elementor-widget-button"
                                                                data-element_type="widget"
                                                                data-settings="{&quot;_position&quot;:&quot;absolute&quot;}"
                                                                data-widget_type="button.default">
                                                                <div className="elementor-widget-container">
                                                                    <div
                                                                        className="elementor-button-wrapper">
                                                                        <a href="#contact"
                                                                            className="elementor-button-link elementor-button elementor-size-sm"
                                                                            role="button">
                                                                            <span className="elementor-button-content-wrapper">
                                                                                <span className="elementor-button-text">  Contact Me </span>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-85d47ce elementor-widget__width-auto elementor-absolute elementor-hidden-phone elementor-widget elementor-widget-button"
                                                                data-element_type="widget"
                                                                data-settings="{&quot;_position&quot;:&quot;absolute&quot;}"
                                                                data-widget_type="button.default">
                                                                <div className="elementor-widget-container">
                                                                    <div
                                                                        className="elementor-button-wrapper">
                                                                        <a href="#portfolio"
                                                                            className="elementor-button-link elementor-button elementor-size-sm"
                                                                            role="button"> <span
                                                                                className="elementor-button-content-wrapper">
                                                                                <span className="elementor-button-text">Check My Projects</span>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-62c46cf elementor-widget elementor-widget-image"

                                                                data-element_type="widget"
                                                                data-widget_type="image.default">
                                                                <div className="elementor-widget-container">
                                                                    <div className="elementor-image">
                                                                        <img
                                                                            style={{ height: '95vh' }}
                                                                            width="536" height="830"
                                                                            src={process.env.LINK + "/images/vikas-ukani-vertical-image.jpg"}
                                                                            className="attachment-full size-full"
                                                                            alt="vikas-ukani" loading="lazy"
                                                                            sizes="(max-width: 536px) 100vw, 536px" />
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
            </section >
        </div >
    )
}