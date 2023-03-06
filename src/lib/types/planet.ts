export type planetType = {
	name: string;
	overview: contentType;
	structure: contentType;
	geology: contentType;
	statistics: {
		title: string;
		value: string;
	}[];
	images: {
		planet: string;
		internal: string;
		geology: string;
	};
};

export type contentType = {
	content: string;
	source: string;
};

export type contentNamesType = ['overview', 'structure', 'geology'];
