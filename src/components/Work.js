import React from "react";
import Tesla from "../assets/projects/tesla.png";
import Acme from "../assets/projects/acmer.png";
import Apple from "../assets/projects/apple.png";
import Movie from "../assets/projects/movie-site.png";
import NFlix from "../assets/projects/nflix.png";
import Loading from "../assets/projects/loading.png";

const Work = () => {
	return (
		<div name="work" className="w-full md:h-screen text-gray-700 bg-[#ffffff]]">
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-[#010c1e] pb-1.5 text-[#010c1e]">
						Work
					</p>
					<p className="py-6 text-[#010c1e]">Check out some of my recent work</p>
				</div>
				{/* Container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{/* Grid Items */}
					<div
						style={{ backgroundImage: `url(${Tesla})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
					>
						{/* Hover Effect */}
						<div className="opacity-0 group-hover:opacity-100 ">
							<span className="text-2xl font-bold text-white tracking-wider">
								ReactJS Application
							</span>
							<div className="flex justify-center">
								<a
									href="https://tesla-landing-page-eight.vercel.app/#model3"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="/" target="_blank" rel="noreferrer">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${Acme})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
					>
						{/* Hover Effect */}
						<div className="opacity-0 group-hover:opacity-100 ">
							<span className="text-2xl font-bold text-white tracking-wider">
								ReactJS Application
							</span>
							<div className="flex justify-center">
								<a
									href="https://acme-dusky.vercel.app/"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="/" target="_blank" rel="noreferrer">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${Apple})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
					>
						{/* Hover Effect */}
						<div className="opacity-0 group-hover:opacity-100 ">
							<span className="text-2xl font-bold text-white tracking-wider">
								ReactJS Application
							</span>
							<div className="flex justify-center">
								<a
									href="https://apple-site-ecru.vercel.app/"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="/" target="_blank" rel="noreferrer">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${Movie})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
					>
						{/* Hover Effect */}
						<div className="opacity-0 group-hover:opacity-100 ">
							<span className="text-2xl font-bold text-white tracking-wider">
								ReactJS Application
							</span>
							<div className="flex justify-center">
								<a
									href="https://movie-site-five.vercel.app/"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="/" target="_blank" rel="noreferrer">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${NFlix})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
					>
						{/* Hover Effect */}
						<div className="opacity-0 group-hover:opacity-100 ">
							<span className="text-2xl font-bold text-white tracking-wider">
								ReactJS Application
							</span>
							<div className="flex justify-center">
								<a
									href="https://netflix-redo.vercel.app/"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="/" target="_blank" rel="noreferrer">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${Loading})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
					>
						{/* Hover Effect */}
						<div className="opacity-0 group-hover:opacity-100 ">
							<span className="text-2xl font-bold text-white tracking-wider">
								HTML5/CSS
								<br />
								Loading Animation
							</span>
							<div className="flex justify-center">
								<a
									href="https://loading-animation-effect.vercel.app/"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/SauelAlmonte/loading_animation_effect"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
