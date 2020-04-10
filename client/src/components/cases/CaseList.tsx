import React, { useEffect, useState, FunctionComponent } from 'react';
import * as Api from '../../service/CovidApi';
import CovidList from './List';
import '../../assets/scss/css/Style.css';
import * as CaseModel from '../../models/Case';
const CaseList: FunctionComponent<{ DiagnosisList: [] }> = () => {
	const [ list, setList ] = useState<CaseModel.IList[]>([]);
	const [ search, setSearch ] = useState<string>('');

	const fetchAll = async () => {
		Api.fetchAll().then((response) => {
			const caseList: CaseModel.IList[] = response;
			setList(caseList);
		});
	};

	const filterByParam = () => {
		let response: CaseModel.IList[] = [];

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

	useEffect(() => {
		fetchAll();
		window.document.title = 'Covid19 Pro';
	}, []);

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
				id="input"
			/>
			<br />
			<br />
			<CovidList covid={list} />
		</div>
	);
};

export default CaseList;
