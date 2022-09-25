import Link from "next/link";
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Main = () => {
	return (
		<div id="main" className="w-full h-screen text-center">
			<div className="msx-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="uppercase text-sm tracking-widest text-gray-600">
						Lets Build Something Better
					</p>
					<h1 className="py-4 text-gray-700">
						{"Hi I'm"} <span className="text-[#5651e5]">Akhil</span>
					</h1>
					<h1 className="py-2 text-gray-700">A Full-Stack Developer</h1>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						{"I'm a full-stack web developer"}
					</p>
					<div className="flex items-center justify-between m-auto py-4 max-w-[330px]">
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<a
								href="https://www.linkedin.com/in/akhil-gopakumar-3b570918a/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaLinkedin />
							</a>
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<a
								href="https://twitter.com/Akhilgopakumar2"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaTwitter />
							</a>
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<a
								href="https://github.com/akkey-02"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaGithub />
							</a>
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<a href="mailto:akhilgkumar01@gmail.com?subject=subject&cc=cc@example.com">
								<FaEnvelope />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
