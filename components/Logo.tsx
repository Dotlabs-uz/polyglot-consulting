import React from "react";

export const Logo: React.FC = () => {
	return (
		<div className="w-fit h-[50px]">
			<img
				src="/logo.png"
				alt="logo"
				className="w-full h-full object-contain"
			/>
		</div>
	);
};
