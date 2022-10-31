import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import merry1 from "../public/projects/merry/merry1.png";
import merry2 from "../public/projects/merry/merry2.png";
import merry3 from "../public/projects/merry/merry3.png";
import merry4 from "../public/projects/merry/merry4.png";
import merry5 from "../public/projects/merry/merry5.png";
import merry6 from "../public/projects/merry/merry6.png";
import merry7 from "../public/projects/merry/merry7.png";
import merry8 from "../public/projects/merry/merry8.png";

const meals = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
				<div className="absolute max-w-[1240px] w-full top-[70%] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">Meals-on-Wheels Application</h2>
					<h3>React.js, Node.js, MongoDB</h3>
				</div>
			</div>
			<div className="max-w-[1240px] p-2 mx-auto grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p className="uppercase text-xl tracking-widest text-[#5651e5]">
						Project
					</p>
					<h2 className="py-4">Overview</h2>
					<p>
						Developed a food delivery application using MERN stack where the
						application allows -
					</p>
					<ul className="list-disc ml-5 mt-1">
						<li>Member registration with their requirements</li>
						<li>Restaurant Partners registration with their details</li>
						<li>Menu Planning and Preparation</li>
						<li>Meal Delivery Management of partners and riders</li>
						<li>Food Safety Management</li>
					</ul>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
					<p className="font-bold text-center pb-2">Technologies</p>
					<div>
						<p className="text-gray-600 py-2 flex items-center">
							<RiRadioButtonFill className="pr-1" /> Node.js
						</p>
					</div>
					<div>
						<p className="text-gray-600 py-2 flex items-center">
							<RiRadioButtonFill className="pr-1" /> Express.js
						</p>
					</div>
					<div>
						<p className="text-gray-600 py-2 flex items-center">
							<RiRadioButtonFill className="pr-1" /> React.js
						</p>
					</div>
					<div>
						<p className="text-gray-600 py-2 flex items-center">
							<RiRadioButtonFill className="pr-1" /> React Redux
						</p>
					</div>
					<div>
						<p className="text-gray-600 py-2 flex items-center">
							<RiRadioButtonFill className="pr-1" /> MongoDB Atlas
						</p>
					</div>
					<div>
						<p className="text-gray-600 py-2 flex items-center">
							<RiRadioButtonFill className="pr-1" /> Material UI
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
							src={merry1}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={merry2}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={merry3}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={merry4}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={merry5}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={merry6}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={merry7}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={merry8}
							alt="/"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default meals;
