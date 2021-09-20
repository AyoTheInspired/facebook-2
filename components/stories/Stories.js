import StoryCard from "./StoryCard";

const stories = [
	{
		name: "Ayo Abimbola",
		src: "https://links.papareact.com/zcf",
		profile: "https://links.papareact.com/l4v",
	},
	{
		name: "Charles Cole",
		src: "https://links.papareact.com/4zn",
		profile: "https://links.papareact.com/kxk",
	},
	{
		name: "John Doe",
		src: "https://links.papareact.com/k2j",
		profile: "https://links.papareact.com/f0p",
	},
	{
		name: "Bill Gates",
		src: "https://links.papareact.com/xql",
		profile: "https://links.papareact.com/snf",
	},
	{
		name: "Elon Musk",
		src: "https://links.papareact.com/4u4",
		profile: "https://links.papareact.com/zvy",
	},
];

function Stories() {
	return (
		<div className="flex justify-center space-x-3 mx-auto">
			{stories.map((story) => (
				<StoryCard
					name={story.name}
					key={story.name}
					src={story.src}
					profile={story.profile}
				/>
			))}
		</div>
	);
}

export default Stories;
