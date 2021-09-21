function Post({ name, message, email, timestamp, postImage, image }) {
	return (
		<div className="flex flex-col">
			<div className="">
				<div>
					<img
						src={image}
						width={40}
						height={40}
						className="rounded-full"
						alt={name}
					/>

					<div>
						<p>{name}</p>

						<p className="text-xs text-gray-400">
							{new Date(timestamp.toDate()).toLocaleString()}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Post;
