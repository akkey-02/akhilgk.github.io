import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import i1 from "../public/projects/insurance/i1.png";
import i2 from "../public/projects/insurance/i2.png";
import i3 from "../public/projects/insurance/i3.png";
import i4 from "../public/projects/insurance/i4.png";
import i5 from "../public/projects/insurance/i5.png";
import i6 from "../public/projects/insurance/i6.png";
import i7 from "../public/projects/insurance/i7.png";
import i8 from "../public/projects/insurance/i8.png";
import i9 from "../public/projects/insurance/i9.png";
import i10 from "../public/projects/insurance/i10.png";
import i11 from "../public/projects/insurance/i11.png";

const insurance = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
				<div className="absolute max-w-[1240px] w-full top-[70%] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">Insurance Policy Portal</h2>
					<h3>HTML, CSS, Spring Boot</h3>
				</div>
			</div>
			<div className="max-w-[1240px] p-2 mx-auto grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p className="uppercase text-xl tracking-widest text-[#5651e5]">
						Project
					</p>
					<h2 className="py-4">Overview</h2>
					<p>
						Developed an Insurance Policy Portal using HTML, CSS, Java-Spring
						Framework and MySQL
					</p>
					<ul className="list-disc ml-5 mt-1">
						<li>
							Users will be able to register in the portal using the
							Registration Page.
						</li>
						<li>
							Users of the portal can search for hospitals with Google Maps API
							and create a discussion forum.
						</li>
						<li>Users can view some news feeds using Spring Feed.</li>
						<li>
							The portal allow users to login, add and claim their policy.
						</li>
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
							<RiRadioButtonFill className="pr-1" /> JSP
						</p>
					</div>
					<div>
						<p className="text-gray-600 py-2 flex items-center">
							<RiRadioButtonFill className="pr-1" /> Bootstrap
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
							src={i1}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={i2}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={i3}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={i4}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={i5}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={i6}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={i7}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={i8}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={i9}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={i10}
							alt="/"
						/>
					</div>
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<Image
							className="rounded-xl group-hover:opacity-10"
							src={i11}
							alt="/"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default insurance;
