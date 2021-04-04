import Slider from "react-slick";
import Link from 'next/link'
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
        autoplay: false,

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
                        className="grid-item element-item p_one_third transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-105 hover:rounded-lg "
                    >
                        <div className="max-w-sm overflow-hidden shadow-lg bg-light-dark text-white w-full mb-6 rounded-lg">
                            {project.image_url && (
                                <img className="w-full " src={"https://raw.githubusercontent.com/vikas-ukani/photo-point/master/public/images/photo-point-image.jpg?token=ANXLAGUOKZYBVMGMD5QGJLTANBT3I"} height="400" width="500" alt={project.name} />
                            )}
                            {!project.image_url && (
                                <img className="w-full min-h-full" src="https://picsum.photos/400/400" width="400" height="400" alt="Mountain" />
                            )}
                            <div className="px-6 py-4">
                                {/* If url found then */}
                                {project.url && (
                                    <Link href="">
                                        <a >
                                            <div className="font-bold text-xl mb-2 text-center">{project.name}</div>
                                        </a>
                                    </Link>

                                )}
                                {/* If url not found then */}
                                {!project.url && (
                                    <div className="font-bold text-xl mb-2 text-center">{project.name}</div>
                                )}
                                {project.short_description &&
                                    (
                                        <p className="text-gray-700 text-base">
                                            {project.short_description}
                                        </p>
                                    )
                                }
                            </div>
                            {project.tags && (
                                <div className="px-6 pt-4 pb-2">
                                    {project.tags.map((tag, key) => (
                                        <span key={key} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            #{tag}
                                        </span>
                                    )
                                    )}
                                </div>
                            )}

                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ProjectsList;