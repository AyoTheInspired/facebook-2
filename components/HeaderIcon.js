import React from "react";

function HeaderIcon({ Icon }) {
	return (
		<div className="cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 flex items-center rounded-xl active:border-b-2 active:border-blue-500 group">
			<Icon className="h-5 group-hover:text-red-500" />
		</div>
	);
}

export default HeaderIcon;
