import Link from 'next/link'

const LeftDroverNavBar = () => {
    return (<div className="menu-holder">
        <div className="menu-wrapper relative">
            <nav id="header-main-menu" className="big-menu">
                <ul id="menu-menu-1" className="main-menu sm sm-clean">
                    <li id="menu-item-196"
                        className="one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-196">
                        <a href={process.env.LINK + "/#home"} >Home</a></li>
                    <li id="menu-item-197"
                        className="one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-197">
                        <a href={process.env.LINK + "/#about_me"}>About Me</a></li>
                    <li id="menu-item-198"
                        className="one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-198">
                        <a href={process.env.LINK + "/#portfolio"}>Portfolio</a></li>
                    <li id="menu-item-199"
                        className="one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-199">
                        <a href={process.env.LINK + "/#experience"}>Experience</a></li>
                    <li id="menu-item-200"
                        className="one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-200">
                        <a href={process.env.LINK + "/#skills"}>Skills</a></li>
                    <li id="menu-item-201"
                        className="one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-201">
                        <a href={process.env.LINK + "/#contact"}>Contact</a></li>
                    <li id="menu-item-202"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-202">
                        <Link href={process.env.LINK + "/blogs"}>
                            <a >Blog</a>
                        </Link></li>
                </ul>
            </nav>
        </div>
    </div>
    );
}

export default LeftDroverNavBar;