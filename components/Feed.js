import InputBox from "./InputBox";
import PostsCollection from "./posts/PostsCollection";
import Stories from "./stories/Stories";

function Feed({ posts }) {
	return (
		<div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
			<div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
				<Stories />
				<InputBox />
				<PostsCollection posts={posts} />
			</div>
		</div>
	);
}

export default Feed;
