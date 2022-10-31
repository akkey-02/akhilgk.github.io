import Image from "next/image";
import Link from "next/link";
import React from "react";
import index from "../public/projects/abc/index.png";
import home from "../public/projects/home.png";
import prop from "../public/projects/prop1.png";
import dd5 from "../public/projects/net/dd5.png";
import car from "../public/projects/car2.png";
import insurance from "../public/projects/insurance/i7.png";
import meals from "../public/projects/merry/merry2.png";
import plugins from "../public/projects/plugins/plugins1.png";

const Projects = () => {
	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="uppercase text-xl tracking-widest text-[#5651e5]">
					Projects
				</p>
				<h2 className="py-4">{"What I've Built"}</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={index}
							alt="/"
						/>
						<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
							<h3 className="text-2xl text-white tracking-wider text-center">
								ABC Learning Center
							</h3>
							<p className="pb-4 pt-2 text-white text-center">
								HTML, CSS, JavaScript
							</p>
							<Link href="/abc">
								<p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
									More Info
								</p>
							</Link>
						</div>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={dd5}
							alt="/"
						/>
						<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
							<h3 className="text-2xl text-white tracking-wider text-center">
								MySQL Database Design
							</h3>
							<p className="pb-4 pt-2 text-white text-center">phpMyAdmin</p>
							<Link href="/database">
								<p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
									More Info
								</p>
							</Link>
						</div>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={prop}
							alt="/"
						/>
						<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
							<h3 className="text-2xl text-white tracking-wider text-center">
								Prototype Development
							</h3>
							<p className="pb-4 pt-2 text-white text-center">
								High-Fidelity Prototype using Axure
							</p>
							<Link href="/prop">
								<p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
									More Info
								</p>
							</Link>
						</div>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={home}
							alt="/"
						/>
						<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
							<h3 className="text-2xl text-white tracking-wider text-center">
								Community Portal
							</h3>
							<p className="pb-4 pt-2 text-white text-center">
								Struts, JSP, Bootstrap, MySQL
							</p>
							<Link href="/abc-portal">
								<p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
									More Info
								</p>
							</Link>
						</div>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={car}
							alt="/"
						/>
						<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
							<h3 className="text-2xl text-white tracking-wider text-center">
								ABC Cars Portal
							</h3>
							<p className="pb-4 pt-2 text-white text-center">
								Spring Boot, ReactJS, REST API, MySQL
							</p>
							<Link href="/abc-cars">
								<p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
									More Info
								</p>
							</Link>
						</div>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={insurance}
							alt="/"
						/>
						<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
							<h3 className="text-2xl text-white tracking-wider text-center">
								Insurance Policy Portal
							</h3>
							<p className="pb-4 pt-2 text-white text-center">
								Spring Boot, Spring Security JSP, Bootstrap, MySQL
							</p>
							<Link href="/insurance">
								<p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
									More Info
								</p>
							</Link>
						</div>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={meals}
							alt="/"
						/>
						<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
							<h3 className="text-2xl text-white tracking-wider text-center">
								Meals on Wheels
							</h3>
							<p className="pb-4 pt-2 text-white text-center">
								Node.js, Express.js, React.js, React Redux, MongoDB Atlas
							</p>
							<Link href="/meals-on-wheels">
								<p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
									More Info
								</p>
							</Link>
						</div>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={plugins}
							alt="/plugins"
						/>
						<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
							<h3 className="text-2xl text-white tracking-wider text-center">
								Bubble Plugins
							</h3>
							<p className="pb-4 pt-2 text-white text-center">
								Bubble.io, JavaScript
							</p>
							<Link href="/plugins">
								<p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
									More Info
								</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
