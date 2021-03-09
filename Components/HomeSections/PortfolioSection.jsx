import ProjectsHolder from "./ProjectsContainer/ProjectsHolder";
import FlipMove from 'react-flip-move'
import data from '../../data.json'
import { useState } from "react";
import ProjectsList from "./ProjectsContainer/ProjectsList";

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
        return filteredData
        // return (
        //     filteredData
        //         .map((project, key) => (
        //             <div key={key} id={key}
        //                 className="grid-item element-item p_one_third">
        //                 <a className="item-link ajax-portfolio"
        //                     href="portfolio/item-1/index.html"
        //                     data-id={key}>
        //                     <img width="600" height="600" src='https://picsum.photos/600/600'
        //                         className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
        //                         alt={project.name}
        //                         sizes="(max-width: 600px) 100vw, 600px" />

        //                     <p className="portfolio-text text-center ">
        //                         <small onMouseEnter={e => e.target.className = 'text-light-green'}
        //                             onMouseLeave={e => e.target.className = 'text-light-orange'}>{project.name}</small>
        //                     </p>

        //                 </a>
        //             </div>

        //         ))
        // )
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

                                                <div className="category-filter-list button-group filters-button-group">
                                                    {categories.map((category, key) => (
                                                        <div onClick={() => setSelectedCategory(category)} key={category}
                                                            className="button" data-filter="*">
                                                            <b>{category.toUpperCase()}</b>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="elementor-element elementor-element-8225bc2 elementor-widget elementor-widget-heading">
                                                    <div className="elementor-widget-container">
                                                        <h2 className="elementor-heading-title elementor-size-default">
                                                            My Projects</h2>
                                                    </div>
                                                </div>
                                                <div className="text-2xl font-bold ">{selectedCategory.toUpperCase()}</div>
                                                <div className="pt-20">
                                                    <ProjectsList projects={filteredProjects()} />
                                                </div>
                                                <div className="clear"> </div>
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