import Link from 'next/link'
import RecentArticles from '../../Components/Blogs/RecentArticals'

export default function Blogs() {
	return (
		<div>
			<div id="content" className="site-content">
				<section className="skewed-bottom-right">
					<div className=" pt-12 lg:pt-20 pb-20 radius-for-skewed">
						<div className="container mx-auto px-4">
							<div className="flex flex-wrap -mx-1">
								<div className="w-full lg:w-2/4 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
									<div className="w-full text-center lg:text-left">
										<div className="max-w-md mx-auto lg:mx-0 text-white">
											<h1 className="mb-3 text-4xl lg:text-5xl text-white font-bold">
												Build &amp; Launch without problems
											</h1>
										</div>
										{/* <div className="max-w-sm mx-auto lg:mx-0">
											<p className="mb-6 text-gray-50 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
											<div>
												<a className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-white hover:bg-gray-50 text-green-600 font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="#">Get Started</a>
												<a className="inline-block w-full lg:w-auto py-2 px-6 leading-loose text-white font-semibold bg-green-600 border-2 border-green-400 hover:border-green-500 rounded-l-xl rounded-t-xl transition duration-200" href="#">How it works</a>
											</div>
										</div> */}
									</div>
								</div>
								<div className="w-full lg:w-2/4  px-4 flex items-center justify-center">
									<div className="relative" style={{ zIndex: 0 }}>
										<img className="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none" src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" />
										<img className="hidden md:block absolute" style={{ top: "-2rem", right: "3rem", zIndex: "-1" }} src="atis-assets/elements/green-up.svg" alt="" />
										<img className="hidden md:block absolute" style={{ bottom: "-2rem", right: "-2rem", zIndex: -1 }} src="atis-assets/elements/wing-green-down.svg" alt="" />
										<img className="hidden md:block absolute" style={{ bottom: "3rem", right: "-3rem", zIndex: -1 }} src="atis-assets/elements/bullets-green-right.svg" alt="" />
										<img className="hidden md:block absolute" style={{ bottom: "2.5rem", left: "-4.5rem", zIndex: -1 }} src="atis-assets/elements/bullets-green-left.svg" alt="" />
									</div>
								</div>
							</div>

						</div>

					</div>
					<div className="center-text">
						<ul className="entry-info">
							<li className="author-nickname-holder">
								<div className="entry-info-text"> AUTHOR</div>
								<div className="author-nickname">
									<a href="https://demo.cocobasic.com/volos-wp/demo-3/author/ricky-stone/" title="Posts by Ricky Stone" rel="author">Ricky Stone</a>
								</div>
							</li>
							<li className="entry-date-holder">
								<div className="entry-info-text"> DATE</div>
								<div className="entry-date published"> Nov 27, 2019</div>
							</li>
							<li className="cat-links-holder">
								<div className="entry-info-text"> CATEGORY</div>
								<div className="cat-links-wrapper">
									<ul className="cat-links">
										<li>
											<a href="https://demo.cocobasic.com/volos-wp/demo-3/category/uncategorized/">Uncategorized</a>
										</li>
									</ul>
								</div>
							</li>
							<li className="num-comments-holder">
								<div className="entry-info-text"> COMMENTS</div>
								<div className="num-comments">
									<a href="https://demo.cocobasic.com/volos-wp/demo-3/2019/11/27/preserve-and-cherish-that-pale-blue-dot-are-creatures-of-the-cosmos-light-years/#respond">No Comments</a>
								</div>
							</li>
						</ul>
					</div>
					<article className=" w-full text-white px-40 mt-10 text-2xl line-height content-center px-4 flex ">
						<div className="post-wrapper center-relative">
							<div className="single-content-wrapper content-1170 center-relative">

								<div className="single-content-wrapper content-960 center-relative">
									<div className="entry-content">
										<p>Bearable only through love hydrogen atoms bits of moving fluff culture shores of the cosmic ocean paroxysm of global death rich in heavy atoms with pretty stories for which there’s little good evidence something incredible is waiting to be known not a sunrise but a galaxyrise shores of the cosmic ocean inconspicuous motes of rock.</p>
										<p>Galaxies network of wormholes birth extraplanetary Apollonius of Perga adipisci velit! Muse about descended from astronomers shores of the cosmic ocean across the centuries encyclopaedia galactica Euclid intelligent beings. As a patch of light Apollonius of Perga, rings of Uranus network of wormholes bits of moving fluff, consciousness the only home we’ve ever known. Galaxies, corpus callosum radio telescope. Globular star cluster, light years made in the interiors of collapsing stars cosmic ocean with pretty stories for which there’s little good evidence something incredible is waiting to be known explorations!</p>
										<blockquote className="wp-block-quote">
											<p>Birth dispassionate terrestrial for observer star stuff harvesting light something incredible</p>
										</blockquote>
										<p>Brain is the seed of intelligence ship of the imagination hearts of the stars realm of the galaxies. At the edge of forever. Hearts of the stars of brilliant syntheses astonishment not a sunrise but a galaxyrise. Finite but unbounded how far away, corpus callosum nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Encyclopaedia galactica are creatures of the cosmos shores of the cosmic ocean. Cosmic ocean the sky calls to us consectetur cosmic ocean and billions upon billions upon billions upon billions upon billions upon billions upon!</p>
										<div className="clear">
										</div>
									</div>
									<div className="clear">
									</div>
								</div>
							</div>
						</div>
					</article>

					<RecentArticles />
				</section>
			</div>
		</div>
	)
}