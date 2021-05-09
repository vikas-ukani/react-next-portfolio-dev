import Link from 'next/link'

export default function Blogs() {
	return (
		<div>
			<div id="content" className="site-content">
				<section className="skewed-bottom-right">

					<div className="bg-green-600 pt-12 lg:pt-20 pb-20 radius-for-skewed">
						<div className="container mx-auto px-4">
							<div className="flex flex-wrap -mx-4">
								<div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
									<div className="w-full text-center lg:text-left">
										<div className="max-w-md mx-auto lg:mx-0 text-white">
											<h2 className="mb-3 text-4xl lg:text-5xl text-white font-bold">Build &amp; Launch without problems</h2>
										</div>
										<div className="max-w-sm mx-auto lg:mx-0">
											<p className="mb-6 text-gray-50 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
											<div>
												<a className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-white hover:bg-gray-50 text-green-600 font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="#">Get Started</a>
												<a className="inline-block w-full lg:w-auto py-2 px-6 leading-loose text-white font-semibold bg-green-600 border-2 border-green-400 hover:border-green-500 rounded-l-xl rounded-t-xl transition duration-200" href="#">How it works</a>
											</div>
										</div>
									</div>
								</div>
								<div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
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
					<div className="mr-for-radius">
						<svg className="h-8 md:h-12 lg:h-20 w-full text-green-600" viewBox="0 0 10 10" preserveAspectRatio="none">
							<polygon fill="currentColor" points="0 0 10 0 0 10">
							</polygon>
						</svg>
					</div>
					<div className="hidden navbar-menu relative z-50">
						<div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25">
						</div>
						<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
							<div className="flex items-center mb-8">
								<a className="mr-auto text-3xl font-bold leading-none" href="#">
									<img className="h-10" src="atis-assets/logo/atis/atis-mono-black.svg" alt="" width="auto" />
								</a>
								<button className="navbar-close">
									<svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12">
										</path>
									</svg>
								</button>
							</div>
							<div>
								<ul>
									<li className="mb-1">
										<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Start</a>
									</li>
									<li className="mb-1">
										<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">About Us</a>
									</li>
									<li className="mb-1">
										<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Services</a>
									</li>
									<li className="mb-1">
										<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Platform</a>
									</li>
									<li className="mb-1">
										<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Testimonials</a>
									</li>
								</ul>
							</div>
							<div className="mt-auto">
								<div className="pt-6">
									<a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl" href="#">Sign In</a>
									<a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-green-600 hover:bg-green-700 rounded-l-xl rounded-t-xl" href="#">Sign Up</a>
								</div>
								<p className="my-4 text-xs text-center text-gray-400">
									<span>© 2020 All rights reserved.</span>
								</p>
								<div className="text-center">
									<a className="inline-block px-1" href="#">
										<img src="atis-assets/social/facebook.svg" alt="" />
									</a>
									<a className="inline-block px-1" href="#">
										<img src="atis-assets/social/twitter.svg" alt="" />
									</a>
									<a className="inline-block px-1" href="#">
										<img src="atis-assets/social/instagram.svg" alt="" />
									</a>
								</div>
							</div>
						</nav>
					</div>
				</section>


				<div className="content-holder center-relative content-1300 post-186 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized">
					<article className="post-186 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized">
						<div className="post-wrapper center-relative">
							<div className="single-content-wrapper content-1170 center-relative">
								<h1 className="entry-title">Preserve and cherish that pale blue dot are creatures of the cosmos light years</h1>
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
								<img width="1150" height="450" src="https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/11/img_blog_02.jpg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" loading="lazy" srcset="https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/11/img_blog_02.jpg 1150w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/11/img_blog_02-300x117.jpg 300w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/11/img_blog_02-1024x401.jpg 1024w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/11/img_blog_02-768x301.jpg 768w" sizes="(max-width: 1150px) 100vw, 1150px" />
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
					<div className="nav-links content-750 center-relative">
						<div className="nav-previous">
							<p>PREVIOUS STORY</p>
							<a href="https://demo.cocobasic.com/volos-wp/demo-3/2019/11/26/great-turbulent-clouds-hearts-of-the-stars-stirred-by-starlight-sky-culture/" rel="prev">Great turbulent clouds hearts of the stars stirred by starlight sky culture</a>
							<div className="clear">
							</div>
						</div>
						<div className="nav-next">
							<p>NEXT STORY</p>
							<a href="https://demo.cocobasic.com/volos-wp/demo-3/2019/11/28/hundreds-of-thousands-a-still-more-glorious-nights-around-art-table/" rel="next">Hundreds of thousands a still more glorious nights around art table</a>
							<div className="clear">
							</div>
						</div>
						<div className="clear">
						</div>
					</div>
					<div id="comments" className="comments-holder">
						<div className="clear">
						</div>
					</div>
					<div className="clear">
					</div>
				</div>
			</div>
		</div>
	)
}