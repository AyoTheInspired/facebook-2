import Image from "next/image";
import { useSession } from "next-auth/client";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { useRef } from "react";

function InputBox() {
	const [session] = useSession();
	const inputRef = useRef(null);

	const sendPost = (e) => {
		e.preventDefault();
	};

	return (
		<div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
			<div className="flex space-x-4 p-4 items-center">
				<Image
					src={session.user.image}
					className="rounded-full"
					width={40}
					height={40}
					layout="fixed"
				/>

				<form className="flex flex-1">
					<input
						ref={inputRef}
						className="rounded-full flex-grow h-12 bg-gray-100 px-5 focus:outline-none"
						type="text"
						placeholder={`What's on your mind, ${session.user.name} ?`}
					/>

					<button hidden type="submit" onClick={sendPost}>
						Submit
					</button>
				</form>
			</div>

			<div className="flex justify-evenly p-3 border-1">
				<div className="inputIcon">
					<VideoCameraIcon className="h-7 text-red-500" />
					<p className="text-xs sm:text-sm xl:text-base">Live Video</p>
				</div>

				<div className="inputIcon">
					<EmojiHappyIcon className="h-7 text-green-400" />
					<p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
				</div>

				<div className="inputIcon">
					<EmojiHappyIcon className="h-7 text-yellow-300" />
					<p className="text-xs sm:text-sm xl:text-base">FeelingActivity</p>
				</div>
			</div>
		</div>
	);
}

export default InputBox;
