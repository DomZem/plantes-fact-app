export type planetType = {
	name: string;
	overview: {
		content: string;
		source: string;
	};
	structure: {
		content: string;
		source: string;
	};
	geology: {
		content: string;
		source: string;
	};
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
