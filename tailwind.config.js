module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			backgroundColor: ["active"],
			// ...
			borderColor: ["focus-visible", "first"],
			// ...
			textColor: ["visited", "group-hover"],
		},
	},
	plugins: [],
};
