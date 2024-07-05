import React from "react";
import cunstruction from "../assets/cunstruction/under_construction-2.jpeg";

function UnderConstruction() {
	return (
		<div className="relative flex items-center justify-center min-h-screen bg-gray-100">
			<img
				src={cunstruction}
				alt="Under Construction"
				className="absolute inset-0 object-cover w-full h-full"
			/>
			<div className="flex flex-col items-center justify-center z-10 p-8  bg-black bg-opacity-75 rounded-xl mx-4 md:w-3/5 lg:w-1/2 lg:h-96">
				<h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white text-center">
					Under Construction
				</h1>
				<br />
				<p className="mt-4 text-2xl xl:text-3xl   text-white text-center ">
					I am working hard to bring you a new and improved portfolio.
					<br />
					<br />
					<span className="text-3xl md:text-3xl xl:text-4xl  font-semibold">
						Stay tuned!
					</span>
				</p>
			</div>
		</div>
	);
}

export default UnderConstruction;
