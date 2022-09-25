import Image from "next/image";
import Link from "next/link";
import React from "react";
import index from "../public/projects/index.png";
import home from "../public/projects/home.png";
import prop from "../public/projects/prop1.png";
import net from "../public/projects/net2.png";
import car from "../public/projects/car2.png";

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
							<Link href="/">
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
							<Link href="/">
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
							<Link href="/">
								<p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
									More Info
								</p>
							</Link>
						</div>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={net}
							alt="/"
						/>
						<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
							<h3 className="text-2xl text-white tracking-wider text-center">
								Network Infrastructure
							</h3>
							<p className="pb-4 pt-2 text-white text-center">
								30 users Network in Cisco Packet Tracer
							</p>
							<Link href="/">
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
							<Link href="/">
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
								Insurance Policy Portal
							</h3>
							<p className="pb-4 pt-2 text-white text-center">
								Spring Boot, Spring Security JSP, Bootstrap, MySQL
							</p>
							<Link href="/">
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
							<Link href="/">
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
