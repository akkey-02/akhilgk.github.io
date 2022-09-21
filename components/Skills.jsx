import Image from "next/image";
import React from "react";

const Skills = () => {
	return (
		<div id="skills" className="w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="uppercase text-xl tracking-widest text-[#5651e5]">
					Skills
				</p>
				<h2 className="py-4">What I Can Do</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/skills/html.png"
									alt="/"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>HTML</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/skills/css.png"
									alt="/"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>CSS</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/skills/javascript.png"
									alt="/"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>JavaScript</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/skills/java.png"
									alt="/"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Java</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/skills/spring.png"
									alt="/"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Spring Boot</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/skills/node.png"
									alt="/"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Node.js</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/skills/react.png"
									alt="/"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>React.js</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/skills/nextjs.png"
									alt="/"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Next.js</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/skills/mongo.png"
									alt="/"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>MongoDB</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/skills/mysql.png"
									alt="/"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>MySQL</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
