import ProjectsHolder from "./ProjectsContainer/ProjectsHolder";
import FlipMove from 'react-flip-move'
import data from '../../data.json'
import { useState } from "react";

export default function PortfolioSection() {
    const projects = data.projects;
    /** State for current active status wise projects listing. */
    const [selectedCategory, setSelectedCategory] = useState('all')
    /** creating list of filters for all projects */
    const categories = ['all', 'php', 'javascript', 'machine', 'python']

    /** creating filter for category wise projects listing... */
    const filteredProjects = () => {
        var filteredData = projects;
        if (selectedCategory !== categories[0]) {
            filteredData = filteredData.filter(pro => selectedCategory == pro.category)
        }
        filteredData = filteredData.slice(0, 6)
        return (
            filteredData
                .map((project, key) => (
                    //  id="p-item-65"
                    <div key={key} id={key}
                        className="grid-item element-item p_one_third">
                        <a className="item-link ajax-portfolio"
                            href="portfolio/item-1/index.html"
                            data-id={key}>
                            <img width="600" height="600" src='https://picsum.photos/600/600'
                                className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                alt={project.name}
                                sizes="(max-width: 600px) 100vw, 600px" />
                            {/* portfolio-text text-center */}

                            <p className="portfolio-text text-center ">
                                <small onMouseEnter={e => e.target.className = 'text-light-green'}
                                    onMouseLeave={e => e.target.className = 'text-light-orange'}>{project.name}</small>
                            </p>

                        </a>
                    </div>

                ))
        )
    }

    return (
        <div>
            <section id="portfolio" data-id="62519493" data-element_type="section"
                className="elementor-section elementor-top-section elementor-element elementor-element-62519493 op-section elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            >
                <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5d65034a"
                            data-id="5d65034a" data-element_type="column">
                            <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-element-3a789d58 elementor-widget elementor-widget-coco-portfolio"
                                        data-id="3a789d58" data-element_type="widget"
                                        data-widget_type="coco-portfolio.default">
                                        <div className="elementor-widget-container">
                                            <div id="portfolio-wrapper" className="relative">
                                                <div className="category-filter">
                                                    <div className="category-filter-icon"> </div>
                                                </div>

                                                {/* {categories.map((category, key) => (
                                                    <button onClick={() => setSelectedCategory(category)} key={category}>
                                                        {category.toUpperCase()}
                                                    </button>
                                                ))} */}

                                                <div className="category-filter-list button-group filters-button-group">
                                                    {categories.map((category, key) => (
                                                        <div onClick={() => setSelectedCategory(category)} key={category}
                                                            className="button" data-filter="*">
                                                            {category.toUpperCase()}
                                                        </div>
                                                        // <button onClick={() => setSelectedCategory(category)} key={category}>
                                                        //     {category.toUpperCase()}
                                                        // </button>
                                                    ))}
                                                    {/* <div className="button is-checked" data-filter="*"> All</div>
                                                    <div className="button" data-filter=".image">Image</div>
                                                    <div className="button" data-filter=".text">Text</div>
                                                    <div className="button" data-filter=".video">Video</div> */}
                                                    {/* <div className="button is-checked" data-filter="*"> All</div>
                                                    <div className="button" data-filter=".image">Image</div>
                                                    <div className="button" data-filter=".text">Text</div>
                                                    <div className="button" data-filter=".video">Video</div> */}
                                                </div>

                                                {/*  */}
                                                <div className="grid" id="portfolio-grid">
                                                    <div className="grid-sizer"> </div>
                                                    <FlipMove staggerDurationBy="30"
                                                        duration={500}>
                                                        {filteredProjects()}
                                                    </FlipMove>
                                                </div>
                                                {/*  */}



                                                {/* <ProjectsHolder /> */}
                                                {/* <div className="clear"> </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}