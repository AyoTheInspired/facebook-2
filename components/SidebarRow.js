import React from "react";
import Image from "next/image";

function SidebarRow({ src, Icon, title }) {
	return (
		<div>
			{src && (
				<Image
					src={src}
					className="rounded-full"
					width={30}
					height={30}
					layout="fixed"
				/>
			)}
		</div>
	);
}

export default SidebarRow;
