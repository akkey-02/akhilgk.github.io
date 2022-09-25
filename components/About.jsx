/* eslint-disable @next/next/no-img-element */
import React from "react";

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1260px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#5651e5]">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-700">
						I am a student studying IT and enjoys developing web applications
						passionately, also I have a few months of experience in working as a
						developer in a company, so I am confident in my technical skills
						such as Javascript, Spring Boot, React.js, Redux, REST API, Node.js
						etc. as well as professional skills such as problem solving,
						teamwork, analytical skills etc.
					</p>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<img className="rounded-xl" src="/profile.png" alt="profile" />
				</div>
			</div>
		</div>
	);
};

export default About;
