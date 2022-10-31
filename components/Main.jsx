import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Main = () => {
	return (
		<div id="main" className="w-full h-screen text-center">
			<div className="msx-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<h1 className="py-4 text-gray-700">
						{"Hi I'm"} <span className="text-[#5651e5]">Akhil</span>
					</h1>
					<h1 className="py-2 text-gray-700">A Full-Stack Developer</h1>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						{"I'm a full-stack web developer"}
					</p>
					<div className="flex items-center justify-center m-auto py-4 max-w-[330px]">
						<a
							href="https://docs.google.com/document/d/1HnyJ5N08E9h6LuchOXN-mMeSo-2eTLyG/edit?usp=sharing&ouid=102588667644885675332&rtpof=true&sd=true"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p className="text-center py-3 rounded-3xl bg-[#5651e5] text-white px-16 font-bold text-lg cursor-pointer">
								Resume
							</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
