

export default function PortfolioSection() {
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
                                                <div className="grid" id="portfolio-grid">
                                                    <div className="grid-sizer"> </div>
                                                    <div id="p-item-65"
                                                        className="grid-item element-item p_one_third text">
                                                        <a className="item-link ajax-portfolio"
                                                            href="portfolio/item-1/index.html"
                                                            data-id="65">
                                                            <img width="600" height="600"
                                                                src={process.env.LINK + "images/portfolio_item_01.jpg"}
                                                                className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                                alt="portfolio" loading="lazy"
                                                                srcSet="https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_01.jpg 600w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_01-300x300.jpg 300w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_01-150x150.jpg 150w"
                                                                sizes="(max-width: 600px) 100vw, 600px" />
                                                            <div className="portfolio-text-holder">
                                                                <div className="portfolio-text-wrapper">
                                                                    <p className="portfolio-text">Work</p>
                                                                    <p className="portfolio-cat">Text</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="grid-item element-item p_one_third image">
                                                        <a className="item-link"
                                                            href="wp-content/uploads/2019/11/img_blog_01.jpg"
                                                        >
                                                            {/* data-rel="prettyPhoto[portfolio1]" */}
                                                            <img
                                                                width="600" height="600"
                                                                src={process.env.LINK + "images/portfolio_item_02.jpg"}
                                                                className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                                alt="portfolio-design" loading="lazy"
                                                                srcSet="https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_02.jpg 600w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_02-300x300.jpg 300w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_02-150x150.jpg 150w"
                                                                sizes="(max-width: 600px) 100vw, 600px" />
                                                            <div className="portfolio-text-holder">
                                                                <div className="portfolio-text-wrapper">
                                                                    <p className="portfolio-text">Plants</p>
                                                                    <p className="portfolio-cat">Image</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div
                                                        className="grid-item element-item p_one_third video">
                                                        <a className="item-link"
                                                            href="https://vimeo.com/199192931"
                                                        >
                                                            {/* data-rel="prettyPhoto[portfolio1]" */}
                                                            <img
                                                                width="600" height="600"
                                                                src={process.env.LINK + "images/portfolio_item_03.jpg"}
                                                                className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                                alt="portfolio-item" loading="lazy"
                                                                srcSet="https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_03.jpg 600w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_03-300x300.jpg 300w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_03-150x150.jpg 150w"
                                                                sizes="(max-width: 600px) 100vw, 600px" />
                                                            <div className="portfolio-text-holder">
                                                                <div className="portfolio-text-wrapper">
                                                                    <p className="portfolio-text">Handmade
                                                                                    </p>
                                                                    <p className="portfolio-cat">Video</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div id="p-item-94"
                                                        className="grid-item element-item p_one_third text">
                                                        <a className="item-link ajax-portfolio"
                                                            href="portfolio/item-4/index.html"
                                                            data-id="94">
                                                            <img width="600" height="600"
                                                                src={process.env.LINK + "images/portfolio_item_04.jpg"}
                                                                className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                                alt="portfolio-content" loading="lazy"
                                                                srcSet="https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_04.jpg 600w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_04-300x300.jpg 300w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_04-150x150.jpg 150w"
                                                                sizes="(max-width: 600px) 100vw, 600px" />
                                                            <div className="portfolio-text-holder">
                                                                <div className="portfolio-text-wrapper">
                                                                    <p className="portfolio-text">
                                                                        Architecture</p>
                                                                    <p className="portfolio-cat">Text</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div
                                                        className="grid-item element-item p_one_third image">
                                                        <a className="item-link"
                                                            href="wp-content/uploads/2019/11/img_blog_03.jpg"
                                                        >
                                                            {/* data-rel="prettyPhoto[portfolio1]" */}
                                                            <img
                                                                width="600" height="600"
                                                                src={process.env.LINK + "images/portfolio_item_05.jpg"}
                                                                className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                                alt="portfolio-items" loading="lazy"
                                                                srcSet="https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_05.jpg 600w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_05-300x300.jpg 300w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_05-150x150.jpg 150w"
                                                                sizes="(max-width: 600px) 100vw, 600px" />
                                                            <div className="portfolio-text-holder">
                                                                <div className="portfolio-text-wrapper">
                                                                    <p className="portfolio-text">
                                                                        Photography</p>
                                                                    <p className="portfolio-cat">Image</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div id="p-item-92"
                                                        className="grid-item element-item p_one_third text">
                                                        <a className="item-link ajax-portfolio"
                                                            href="portfolio/item-6/index.html"
                                                            data-id="92">
                                                            <img width="600" height="600"
                                                                src={process.env.LINK + "images/portfolio_item_06.jpg"}
                                                                className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                                alt="portfolio-data" loading="lazy"
                                                                srcSet="https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_06.jpg 600w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_06-300x300.jpg 300w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_06-150x150.jpg 150w"
                                                                sizes="(max-width: 600px) 100vw, 600px" />
                                                            <div className="portfolio-text-holder">
                                                                <div className="portfolio-text-wrapper">
                                                                    <p className="portfolio-text">Art</p>
                                                                    <p className="portfolio-cat">Text</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
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
        </div>
    )
}