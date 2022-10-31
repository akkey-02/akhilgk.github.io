import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import cars1 from "../public/projects/cars/car1.png";
import cars2 from "../public/projects/cars/car2.png";
import cars3 from "../public/projects/cars/car3.png";
import cars4 from "../public/projects/cars/car4.png";
import cars5 from "../public/projects/cars/car5.png";
import cars6 from "../public/projects/cars/car6.png";

const abccars = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
				<div className="absolute max-w-[1240px] w-full top-[70%] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">ABC Cars</h2>
					<h3>Spring Boot, ReactJS, REST API, MySQL</h3>
				</div>
			</div>
			<div className="max-w-[1240px] p-2 mx-auto grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p className="uppercase text-xl tracking-widest text-[#5651e5]">
						Project
					</p>
					<h2 className="py-4">Overview</h2>
					<p>
						Developed a Used Cars Sales Portal using Spring Boot, Spring Data
						JPA, REST API and ReactJS
					</p>
					<ul className="list-disc ml-5 mt-1">
						<li>
							Users will be able to register in the portal using the
							Registration Page.
						</li>
						<li>
							Users of the portal can search for Cars using Make, Model,
							Registration & Price Range.
						</li>
						<li>
							Users will be able to view the Car information after searching
							them.
						</li>
						<li>The portal allow users to login, post Car for sale.</li>
					</ul>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
					<p className="font-bold text-center pb-2">Technologies</p>
					<div>
						<p className="text-gray-600 py-2 flex items-center">
							<RiRadioButtonFill className="pr-1" /> Spring Boot
						</p>
					</div>
					<div>
						<p className="text-gray-600 py-2 flex items-center">
							<RiRadioButtonFill className="pr-1" /> Spring Data JPA
						</p>
					</div>
					<div>
						<p className="text-gray-600 py-2 flex items-center">
							<RiRadioButtonFill className="pr-1" /> Spring Security
						</p>
					</div>
					<div>
						<p className="text-gray-600 py-2 flex items-center">
							<RiRadioButtonFill className="pr-1" /> ReactJS
						</p>
					</div>
					<div>
						<p className="text-gray-600 py-2 flex items-center">
							<RiRadioButtonFill className="pr-1" /> REST API
						</p>
					</div>
					<div>
						<p className="text-gray-600 py-2 flex items-center">
							<RiRadioButtonFill className="pr-1" /> MySQL
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
							src={cars1}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={cars2}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={cars3}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={cars4}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={cars5}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={cars6}
							alt="/"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default abccars;
