export interface IList {
	country: string;
	cases?: number;
	todayCases?: number;
	deaths?: number;
	todayDeaths?: number;
	recovered?: number;
	active?: number;
	critical?: number;
	countryInfo: {
		flag: string;
	};
}
