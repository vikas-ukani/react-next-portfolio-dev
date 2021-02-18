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

                    <div key={key} id={key}
                        className="grid-item element-item p_one_third text">
                        <a className="item-link " href="" data-id={key} >
                            {/* https://picsum.photos/200/300 */}
                            {/* src={process.env.LINK + "images/portfolio_item_06.jpg"} */}
                            <img width="600" height="600" src='https://picsum.photos/600/600'
                                className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                alt={project.name}
                                sizes="(max-width: 600px) 100vw, 600px" />
                            <div className="portfolio-text-holder">
                                <div className="portfolio-text-wrapper">
                                    <p className="portfolio-text">{project.name}</p>
                                    <p className="portfolio-cat">{project.id}</p>
                                </div>
                            </div>
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

                                                {categories
                                                    .map((category, key) => (
                                                        <button onClick={() => {
                                                            setSelectedCategory(category)
                                                            // console.log("click", selectedCategory, category)
                                                        }} key={category}>{category.toUpperCase()}</button>
                                                    ))}

                                                <div className="category-filter-list button-group filters-button-group">
                                                    <div className="button is-checked" data-filter="*"> All</div>
                                                    <div className="button" data-filter=".image">Image</div>
                                                    <div className="button" data-filter=".text">Text</div>
                                                    <div className="button" data-filter=".video">Video</div>
                                                    {/* <div className="button is-checked" data-filter="*"> All</div>
                                                    <div className="button" data-filter=".image">Image</div>
                                                    <div className="button" data-filter=".text">Text</div>
                                                    <div className="button" data-filter=".video">Video</div> */}
                                                </div>

                                                <div className="portfolio-load-content-holder"> </div>

                                                <FlipMove staggerDurationBy="30"
                                                    duration={500}>
                                                    {filteredProjects()}

                                                </FlipMove>

                                                {/* <ProjectsHolder /> */}
                                                <div className="clear">
                                                </div>
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