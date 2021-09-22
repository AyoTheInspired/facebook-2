import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import SinglePost from "./SinglePost";

function PostsCollection() {
	const [realtimePosts, loading, error] = useCollection(
		db.collection("posts").orderBy("timestamp", "desc")
	);

	return (
		<div>
			{realtimePosts?.docs.map((post) => (
				<SinglePost
					key={post.id}
					name={post.data().name}
					message={post.data().message}
					email={post.data().email}
					timestamp={post.data().timestamp}
					image={post.data().image}
					postImage={post.data().postImage}
				/>
			))}
		</div>
	);
}

export default PostsCollection;
