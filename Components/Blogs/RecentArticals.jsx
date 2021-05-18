import { data } from '../../blogs.json'

const RecentArticles = () => {

	const getDateFormat = date => {
		let newDate = new Date(date).getDate() + "/" + new Date(date).getMonth() + "/" + new Date(date).getFullYear()
		return newDate
	}

	return (
		<div className="pt-6 pb-12 mt-36 ">
			<div id="card" className="">
				<h2 className="text-center uppercase text-3xl xl:text-3xl font-bold">Find More Blogs</h2>
				<div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
					{data.map(blog => {
						return (
							<div className="flex flex-col md:flex-row overflow-hidden  bg-white rounded-lg shadow-xl  mt-6 w-100 mx-2 h-80">
								<div className=" w-auto md:w-1/2">
									<img className="inset-0 h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="Image 1" />
								</div>

								<div className="w-full py-6 px-12 text-gray-800  flex flex-col justify-between">
									<h3 className=" leading-tight truncate text-2xl font-bold">
										{blog.title}
									</h3>
									<div className="text-justify" dangerouslySetInnerHTML={{ __html: blog.excerpt }} />

									<p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
										<span className="text-light-green">Vikas Ukani</span> &bull; <span className="text-light-green">{getDateFormat(blog.date)}</span>
									</p>
								</div>
							</div>
						)
					})}

				</div>
			</div>
		</div>
	);
}

export default RecentArticles;