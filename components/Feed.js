import InputBox from "./InputBox";
import PostsCollection from "./posts/PostsCollection";
import Stories from "./stories/Stories";

function Feed() {
	return (
		<div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
			<div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
				<Stories />
				<InputBox />
				<PostsCollection />
			</div>
		</div>
	);
}

export default Feed;
