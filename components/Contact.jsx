import Link from "next/link";
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
	return (
		<div id="contacts" className="w-full">
			<div className="max-w-[1240px] m-auto px-2 py-16 w-full">
				<p className="uppercase text-xl tracking-widest text-[#5651e5]">
					Contact
				</p>
				<h2 className="py-4">Get In Touch</h2>
				<p className="py-2">
					I will be available for any freelance or full-time positions. Contact
					me anytime and I will be there.
				</p>
				<div className="pt-2">
					{/* <p className="uppercase tracking-widest text-[#5651e5]">
						Connect with Me
					</p> */}
					<div className="flex items-center justify-between my-2 w-full max-w-[300px] sm:w-[80%]">
						<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
							<a
								href="https://www.linkedin.com/in/akhil-gopakumar-3b570918a/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaLinkedin />
							</a>
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
							<a
								href="https://twitter.com/Akhilgopakumar2"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaTwitter />
							</a>
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
							<a
								href="https://github.com/akkey-02"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaGithub />
							</a>
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
							<a href="mailto:akhilgkumar01@gmail.com?subject=subject">
								<FaEnvelope />
							</a>
						</div>
					</div>
				</div>
				<div className="flex justify-center py-12">
					<Link href="/#main">
						<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
							<HiOutlineChevronDoubleUp />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
