import React, { useEffect, useState, FunctionComponent } from 'react';
import * as Api from '../../service/CovidApi';
import CovidList from './List';
import '../../assets/scss/css/Style.css';
const CaseList: FunctionComponent<{ DiagnosisList: [] }> = () => {
	interface IList {
		country: string;
		cases?: number;
		todayCases?: number;
		deaths?: number;
		todayDeaths?: number;
		recovered?: number;
		active?: number;
		critical?: number;
		countryInfo: [];
	}

	const [ list, setList ] = useState<IList[]>([]);
	const [ search, setSearch ] = useState<string>('');

	const fetchAll = async () => {
		Api.fetchAll().then((response) => {
			const caseList: IList[] = response;
			setList(caseList);
		});
	};
	useEffect(() => {
		fetchAll();
	}, []);

	const filterByParam = () => {
		let response: IList[] = [];

		if (search.trim().length === 1) {
			response.length = 0;
			fetchAll();
			return;
		}
		list.map((item) => {
			if (item.country.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
				response.push(item);
			}
			return setList(response);
		});
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Enter Country"
				onChange={(e) => {
					setSearch(e.target.value);
					filterByParam();
				}}
				value={search}
				id="search"
			/>
			<br />
			<br />
			<CovidList covid={list} />
		</div>
	);
};

export default CaseList;
