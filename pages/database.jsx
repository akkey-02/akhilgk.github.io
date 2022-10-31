import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import dd1 from "../public/projects/net/dd1.png";
import dd2 from "../public/projects/net/dd2.png";
import dd3 from "../public/projects/net/dd3.png";
import dd4 from "../public/projects/net/dd4.png";
import dd5 from "../public/projects/net/dd5.png";

const network = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
				<div className="absolute max-w-[1240px] w-full top-[70%] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">MySQL Database Design and Development</h2>
					<h3>phpMyAdmin</h3>
				</div>
			</div>
			<div className="max-w-[1240px] p-2 mx-auto grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p className="uppercase text-xl tracking-widest text-[#5651e5]">
						Project
					</p>
					<h2 className="py-4">Overview</h2>
					<p>
						Designed Entity Relationship Diagram, conceptual and logical
						diagrams and developed a MySQL database according to the designs for
						ABC Jobs Web Application
					</p>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
					<p className="font-bold text-center pb-2">Technologies</p>
					<div>
						<p className="text-gray-600 py-2 flex items-center">
							<RiRadioButtonFill className="pr-1" /> phpMyAdmin
						</p>
					</div>
				</div>
			</div>
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="uppercase text-xl tracking-widest text-[#5651e5] pb-4">
					Screenshots
				</p>
				<div className="grid md:grid-cols-2 gap-8">
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={dd1}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={dd2}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={dd3}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={dd4}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={dd5}
							alt="/"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default network;
