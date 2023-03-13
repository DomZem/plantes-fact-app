export type planetType = {
	name: planetNameType;
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

export type contentNameType = 'overview' | 'structure' | 'geology';

export type planetNameType = 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune';
