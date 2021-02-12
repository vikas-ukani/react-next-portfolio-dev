// import Clock from 'react-digital-clock'
export default function SideBar() {
    // let soundToggle = false



    // const audioToggle = (file) => {
    //     console.log('clicked');
    //     if (soundToggle == true) {
    //         // audio.pause()
    //         soundToggle = false
    //         // console.log('Play');
    //     } else {
    //         soundToggle = true
    //         // audio.play()
    //         // console.log('stop');
    //     }
    // }

    return (
        <div className="header-holder">
            <div className="header-wrapper">
                <header>
                    <div className="toggle-holder">
                        <div id="toggle">
                            <div className="menu-line"></div>
                        </div>
                    </div>
                    <div className="top-pagination">
                        <div className="current-num"> <span>01</span></div>
                        <div className="pagination-div"></div>
                        <div className="total-pages-num"></div>
                    </div>
                    <div className="my-info-wrapper">
                        <div data-elementor-type="page" data-elementor-id="20" className="elementor elementor-20"
                            data-elementor-settings="[]">
                            <div className="elementor-inner">
                                <div className="elementor-section-wrap">
                                    <section
                                        className="elementor-section elementor-top-section elementor-element elementor-element-64b73840 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                        data-id="64b73840" data-element_type="section">
                                        <div className="elementor-container elementor-column-gap-no">
                                            <div className="elementor-row">
                                                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1d868ca8"
                                                    data-id="1d868ca8" data-element_type="column">
                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                        <div className="elementor-widget-wrap">
                                                            <div className="elementor-element elementor-element-646ac3f7 global-color elementor-widget elementor-widget-text-editor"
                                                                data-id="646ac3f7" data-element_type="widget"
                                                                data-widget_type="text-editor.default">
                                                                <div className="elementor-widget-container">
                                                                    <div className="elementor-text-editor elementor-clearfix"> NAME</div>
                                                                </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-5ed3a12e elementor-widget elementor-widget-text-editor"
                                                                data-id="5ed3a12e" data-element_type="widget"
                                                                data-widget_type="text-editor.default">
                                                                <div className="elementor-widget-container">
                                                                    <div className="elementor-text-editor elementor-clearfix">Vikas Ukani</div>
                                                                </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-a4240e5 global-color elementor-widget elementor-widget-text-editor"
                                                                data-id="a4240e5" data-element_type="widget"
                                                                data-widget_type="text-editor.default">
                                                                <div className="elementor-widget-container">
                                                                    <div className="elementor-text-editor elementor-clearfix"> ROLE</div>
                                                                </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-6c435a6 elementor-widget elementor-widget-text-editor"
                                                                data-id="6c435a6" data-element_type="widget"
                                                                data-widget_type="text-editor.default">
                                                                <div className="elementor-widget-container">
                                                                    <div className="elementor-text-editor elementor-clearfix"> Software Engineer</div>
                                                                </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-36538e7f global-color elementor-widget elementor-widget-text-editor"
                                                                data-id="36538e7f" data-element_type="widget"
                                                                data-widget_type="text-editor.default">
                                                                <div className="elementor-widget-container">
                                                                    <div className="elementor-text-editor elementor-clearfix"> EMAIL</div>
                                                                </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-7c10dbf4 elementor-widget elementor-widget-text-editor"
                                                                data-id="7c10dbf4" data-element_type="widget"
                                                                data-widget_type="text-editor.default">
                                                                <div className="elementor-widget-container">
                                                                    <div className="elementor-text-editor elementor-clearfix wp-block-latest-posts__post-date">
                                                                        {/* <Link href="mailto:vikasukani5@gmail.com"> */}
                                                                        <a href="mailto:vikasukani5@gmail.com" className="__cf_email__" data-cfemail="7f0c0b10111a3f1a071e120f131a511c1012">vikasukani5@gmail.com</a>
                                                                        {/* </Link> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-4f135e30 global-color elementor-widget elementor-widget-text-editor"
                                                                data-id="4f135e30" data-element_type="widget"
                                                                data-widget_type="text-editor.default">
                                                                <div className="elementor-widget-container">
                                                                    <div
                                                                        className="elementor-text-editor elementor-clearfix">
                                                                        PHONE</div>
                                                                </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-7ff2e84b elementor-widget elementor-widget-text-editor"
                                                                data-id="7ff2e84b" data-element_type="widget"
                                                                data-widget_type="text-editor.default">
                                                                <div className="elementor-widget-container">
                                                                    <div
                                                                        className="elementor-text-editor elementor-clearfix">
                                                                        (+91) 99096 59030</div>
                                                                </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-6961185 elementor-widget elementor-widget-coco-music-waves"
                                                                data-id="6961185" data-element_type="widget"
                                                                data-widget_type="coco-music-waves.default">
                                                                <div className="elementor-widget-container">
                                                                    <div className="music-waves">
                                                                        {/* onClick={audioToggle(process.env.LINK + "/images/audio.mp3")} */}
                                                                        <div className="relative" >
                                                                            <audio id="musicWaves" src={process.env.LINK + "/images/audio.mp3"} loop >
                                                                                {/* autoPlay */}
                                                                                {/* <source src="/images/audio.mp3" /> */}
                                                                            </audio>
                                                                            <span
                                                                                className="global-background-color"></span>
                                                                            <span
                                                                                className="global-background-color"></span>
                                                                            <span
                                                                                className="global-background-color"></span>
                                                                            <span
                                                                                className="global-background-color"></span>
                                                                            <span
                                                                                className="global-background-color"></span>
                                                                        </div>
                                                                        <p className="music-waves-text">SOUND ON
                                                                        {/* {(soundToggle && soundToggle == true) ? ' ON' : ' OFF'} */}
                                                                        </p>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            {/* Time: <Clock format='hh-mm-ss' /> */}
                                                            {/* {showingCurrentTime()} */}
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
                    <div className="menu-holder">
                        <div className="menu-wrapper relative">
                            <nav id="header-main-menu" className="big-menu">
                                <ul id="menu-menu-1" className="main-menu sm sm-clean">
                                    <li id="menu-item-196"
                                        className="one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-196">
                                        <a href="#home">Home</a></li>
                                    <li id="menu-item-197"
                                        className="one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-197">
                                        <a href="#introduce">Introduce</a></li>
                                    <li id="menu-item-198"
                                        className="one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-198">
                                        <a href="#portfolio">Portfolio</a></li>
                                    <li id="menu-item-199"
                                        className="one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-199">
                                        <a href="#experience">Experience</a></li>
                                    <li id="menu-item-200"
                                        className="one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-200">
                                        <a href="#skills">Skills</a></li>
                                    <li id="menu-item-201"
                                        className="one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-201">
                                        <a href="#contact">Contact</a></li>
                                    <li id="menu-item-202"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-202">
                                        <a href="blog/index.html">Blog</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="big-num">
                        <div className="current-big-num">01</div>
                        <div className="icon-scroll"></div>
                    </div>
                </header>
            </div>
        </div>
    )
}