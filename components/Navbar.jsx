import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

const NavBar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState("transparent");
	const [navColor, setNavColor] = useState("#ecf0f3");

	const router = useRouter();

	useEffect(() => {
		if (router.asPath === "/" || router.asPath.includes("/#")) {
			setNavColor("#1f2937");
		} else {
			setNavColor("#ecf0f3");
		}

		window.onscroll = function () {
			if (router.asPath === "/" || router.asPath.includes("/#")) {
				setNavBg("#ecf0f3");
			} else {
				setNavBg("transparent");
			}

			if (
				router.asPath !== "/" &&
				!router.asPath.includes("/#") &&
				window.scrollY >= 250
			) {
				console.log(router.asPath !== "/" || !router.asPath.includes("/#"));
				setNavColor("#1f2937");
				setNavBg("#ecf0f3");
			} else if (!router.asPath.includes("/#") && window.scrollY >= 250) {
				console.log("condition 2");
				setNavColor("#1f2937");
				setNavBg("#ecf0f3");
			} else if (
				!router.asPath.includes("/#") &&
				router.asPath !== "/" &&
				window.scrollY <= 250
			) {
				console.log("condition 3");
				setNavColor("#ecf0f3");
			}
		};

		// if (
		// 	(router.asPath === "/abc" ||
		// 		router.asPath === "/prop" ||
		// 		router.asPath === "/abc-cars" ||
		// 		router.asPath === "abc-portal" ||
		// 		router.asPath === "/insurance" ||
		// 		router.asPath === "/liferay" ||
		// 		router.asPath === "/meals-on-wheels" ||
		// 		router.asPath === "/network" ||
		// 		router.asPath === "/plugins") &&
		// 	window.scrollY >= 220
		// ) {
		// 	console.log("white");
		// 	setNavBg("#ecf0f3");
		// 	setNavColor("#1f2937");
		// }
	}, [router]);

	const handleNavBar = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else setShadow(false);
		};
		window.addEventListener("scroll", handleShadow);
	}, [router]);

	return (
		<div
			style={{ background: `${navBg}` }}
			className={
				shadow
					? "fixed w-full h-20 shadow-xl z-[100]"
					: "fixed w-full h-20 z-[100]"
			}
		>
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				<Image src="/logo1.png" alt="/" width="125" height="60" />
				<div>
					<ul style={{ color: `${navColor}` }} className="hidden md:flex">
						<Link href="/#main">
							<li className="ml-10 text-sm uppercase hover:border-b">Home</li>
						</Link>
						<Link href="/#about">
							<li className="ml-10 text-sm uppercase hover:border-b">About</li>
						</Link>
						<Link href="/#skills">
							<li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
						</Link>
						<Link href="/#projects">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Projects
							</li>
						</Link>
						<Link href="/#contacts">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Contact
							</li>
						</Link>
					</ul>
					<div onClick={handleNavBar} className="md:hidden">
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			<div
				className={
					nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
				}
			>
				<div
					className={
						nav
							? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-500"
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Image src="/logo1.png" alt="/" width="87" height="35" />
							<div
								onClick={handleNavBar}
								className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4">Welcome to my Portfolio</p>
						</div>
					</div>
					<div className="py-4 flex flex-col">
						<ul className="uppercase">
							<Link href="/#main">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									Home
								</li>
							</Link>
							<Link href="/#about">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									About Me
								</li>
							</Link>
							<Link href="/#skills">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									Skills
								</li>
							</Link>
							<Link href="/#projects">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									Projects
								</li>
							</Link>
							<Link href="/#contacts">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									Contact
								</li>
							</Link>
						</ul>
						<div className="pt-40">
							<p className="uppercase tracking-widest text-[#5651e5]">
								{"Let's Connect"}
							</p>
							<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
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
									<a href="mailto:akhilgkumar01@gmail.com?subject=subject&cc=cc@example.com">
										<FaEnvelope />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
