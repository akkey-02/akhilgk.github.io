import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import abc1 from "../public/projects/abc/index.png";
import abc2 from "../public/projects/abc/Capture1.png";
import abc3 from "../public/projects/abc/Capture2.png";
import abc4 from "../public/projects/abc/Capture3.png";
import abc5 from "../public/projects/abc/Capture4.png";
import abc6 from "../public/projects/abc/Capture5.png";
import abc7 from "../public/projects/abc/Capture7.png";
import abc8 from "../public/projects/abc/registration.png";

const abc = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
				<div className="absolute max-w-[1240px] w-full top-[70%] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">ABC Learning Center</h2>
					<h3>HTML, CSS, JavaScript</h3>
				</div>
			</div>
			<div className="max-w-[1240px] p-2 mx-auto grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p className="uppercase text-xl tracking-widest text-[#5651e5]">
						Project
					</p>
					<h2 className="py-4">Overview</h2>
					<p>
						This is our first project where we built a website using HTML, CSS,
						also created a registration form using JavaScript and inserted
						details in MySQL Database.
					</p>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
					<p className="font-bold text-center pb-2">Technologies</p>
					<div>
						<p className="text-gray-600 py-2 flex items-center">
							<RiRadioButtonFill className="pr-1" /> HTML
						</p>
						<p className="text-gray-600 py-2 flex items-center">
							<RiRadioButtonFill className="pr-1" /> CSS
						</p>
						<p className="text-gray-600 py-2 flex items-center">
							<RiRadioButtonFill className="pr-1" /> JavaScript
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
							src={abc1}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={abc2}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={abc2}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={abc3}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={abc4}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={abc5}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={abc6}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={abc7}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={abc8}
							alt="/"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default abc;
