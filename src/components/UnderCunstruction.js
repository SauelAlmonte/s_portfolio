import React from "react";

function UnderConstruction() {
	return (
		<div className="relative flex items-center justify-center min-h-screen bg-gray-100">
			<img
				src="../assets/cunstruction/under_construction-1.jpg"
				alt="Under Construction"
				className="absolute inset-0 object-cover w-full h-full"
			/>
			<div className="relative z-10 p-4 bg-black bg-opacity-50 rounded">
				<h1 className="text-4xl font-bold text-white">Under Construction</h1>
				<p className="mt-4 text-xl text-white">
					I am working hard to bring you a new and improved portfolio. Stay
					tuned!
				</p>
			</div>
		</div>
	);
}

export default UnderConstruction;
