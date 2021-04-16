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

            <div className="max-w-md w-full lg:flex">
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('https://tailwindcss.com/img/card-left.jpg')" title="Woman holding a mug">
                </div>
                <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <p className="text-sm text-grey-dark flex items-center">
                            <svg className="text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                            </svg>
                            Members only
                        </p>
                        <div className="text-black font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                        <p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                    </div>
                    <div className="flex items-center">
                        <img className="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink" />
                        <div className="text-sm">
                            <p className="text-black leading-none">Jonathan Reinink</p>
                            <p className="text-grey-dark">Aug 18</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsList;