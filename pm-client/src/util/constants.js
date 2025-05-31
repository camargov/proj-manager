export const DefaultProfile = {
	name: "Guest",
	email: "",
	theme: null,
};

export const DefaultProject = {
	name: "Project 1",
	phases: [
		{
			id: 1,
			name: "To Do",
		},
		{ id: 2, name: "In Progress" },
		{ id: 3, name: "Under Review" },
		{ id: 4, name: "Testing" },
		{ id: 5, name: "Completed" },
	],
	tasks: [],
	users: [],
	owners: [],
};

export const DefaultUser = {
	id: 1,
	profile: DefaultProfile,
	projects: [DefaultProject],
};
