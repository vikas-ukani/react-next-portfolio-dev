import Slider from "react-slick";

// const SampleNextArrow = (props) => {
//     const { className, style } = props;
//     return (
//         <button className={className + ' btn btn-left slick-arrow'} style={{ ...style }}><i className="fas fa-angle-left"></i></button>
//     );
// }


const ProjectsList = ({ projects }) => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        swipeToSlide: true,
        autoplay: true,

        centerPadding: "60px",
        slidesToShow: 2,
        speed: 500
        // nextArrow: <SampleNextArrow />

    };

    return (
        <div>
            <Slider {...settings}>
                {projects.map((project, key) => (
                    <div key={key} id={key}
                        className="grid-item element-item p_one_third transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-110"
                    >
                        <a className="item-link"
                            href=""
                            data-id={key}
                        >
                            <img width="500" height="400" src='https://picsum.photos/500/500'
                                className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                alt={project.name}
                                sizes="(max-width: 500px) 80vw, 500px" />
                            <p className="portfolio-text text-center ">
                                <small
                                    onMouseEnter={e => e.target.className = 'text-light-green'}
                                    onMouseLeave={e => e.target.className = 'text-light-orange'}>{project.name}</small>
                            </p>
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ProjectsList;