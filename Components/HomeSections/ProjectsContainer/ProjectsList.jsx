import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../../styles/ProjectList.module.css";
const ProjectsList = ({ projects }) => {
	return (
		<div >
			<div className={styles.projectCardList}>
				{projects.map((project, key) => (
					<div key={key} id={key} className={`${styles.projectCard}  fadeInUp`} >
						{project.image_url && (
							<img
								className="w-full"
								src={process.env.LINK + project.image_url}
								alt={project.name}
							/>
						)}
						{!project.image_url && (
							<img
								className="w-full"
								src="https://picsum.photos/200/300"
								alt="Mountain"
							/>
						)}
						<div className={styles.projectCardInformation}>
							<div className="px-6 py-4">
								<div className="text-sm text-light-green flex items-center">
									<svg
										className="fill-current w-3 h-3 mr-1 mb-1"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
									</svg>
									Private
								</div>
								{project.url ? (
									<Link href="/">
										<a>
											<div className="font-bold font-18 mb-2  text-light-orange">
												{project.name}
											</div>
										</a>
									</Link>
								) : (
									<div className="font-bold text-xl mb-2 text-center text-light-orange">
										{project.name}
									</div>
								)}
								{project.short_description && (
									<p className="text-grey-darker text-base">
										{project.short_description}
									</p>
								)}
							</div>
							{project.tags && (
								<div className="px-6 pt-4 pb-2">
									{project.tags.map((tag, key) => (
										<span
											key={key}
											className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
										>
											#{tag}
										</span>
									))}
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProjectsList;
