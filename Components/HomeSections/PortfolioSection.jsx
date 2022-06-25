import data from '../../data.json'
import { useState } from "react";
import ProjectsList from "./ProjectsContainer/ProjectsList";

export default function PortfolioSection() {
    const projects = data.projects;
    let categories = []
    projects.filter(pro => {
        if (!categories.includes(pro.category)) {
            categories.push(pro.category);
        }
    });
    const defaultCategory = 'all';
    /** State for current active status wise projects listing. */
    const [selectedCategory, setSelectedCategory] = useState(defaultCategory)
    categories.unshift(defaultCategory);

    /** creating filter for category wise projects listing... */
    const filteredProjects = () => {
        var filteredData = projects;
        if (selectedCategory !== categories[0]) {
            filteredData = filteredData.filter(pro => selectedCategory == pro.category)
        }
        filteredData = filteredData.sort((a, b) => a.id - b.id);
        return filteredData.slice(0, 6)
    }

    const classCategoryNames = category => {
        let classNames = " button categories_button mx-5 text-1xl bg-light-dark font-bold py-2 px-5 rounded-xl "
        classNames = classNames + (category == selectedCategory ? " text-light-green " : " text-light-orange ")
        return classNames
    }

    return (
        <div>
            <section id="portfolio" data-id="62519493" data-element_type="section"
                className="elementor-section elementor-top-section elementor-element elementor-element-62519493 op-section elementor-section-boxed elementor-section-height-default elementor-section-height-default "
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
                                                    {categories.sort().map((category, key) => (
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

                                                <div className="pt-10">
                                                    <div className="text-center pb-5">
                                                        {categories.map(category => (
                                                            <span onClick={() => setSelectedCategory(category)} key={category}
                                                                className={classCategoryNames(category)}>
                                                                {category.toUpperCase()}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <ProjectsList projects={filteredProjects()} />
                                                </div>

                                                <div className="clear"> </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button className=" text-white font-bold py-4 px-6 rounded-full wp-block-button__link  mx-auto  hover:bg-red-400">
                                        View More
                                    </button>
                                    {/* <div className="elementor-element elementor-element-4b0da0b elementor-widget__width-auto elementor-widget elementor-widget-button"
                                        data-element_type="widget"
                                        data-widget_type="button.default">
                                        <div className="elementor-widget-container">
                                            <div className="elementor-button-wrapper ">
                                                <a href="https://drive.google.com/file/d/1WmfPSKGoWq7TyBJYWngpACDm5QZmqdrE/view"
                                                    target="_blank" 
                                                    className="elementor-button-link elementor-button1 wp-block-button elementor-size-sm " >
                                                    <span className="elementor-button-content-wrapper download-button-custom hover:bg-white hover:text-black ">
                                                        <span className="elementor-button-text">
                                                            View More
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}