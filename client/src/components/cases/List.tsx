import React, { FunctionComponent } from 'react';

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

interface IProps {
	viewDetails: object;
}

const CovidList: FunctionComponent<{ covid: IList[] }> = ({ covid }, props) => {
	return (
		<div id="div">
			{covid.length > 0 ? (
				<table id="table">
					<thead id="thead">
						<tr>
							<th>S/N</th>
							<th>Country</th>
							<th>cases</th>
							<th>deaths</th>
							<th>recovered</th>
						</tr>
					</thead>
					<tbody id="tbody">
						{covid.map((item, index) => {
							return (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{item.country}</td>
									<td> {item.cases}</td>
									<td>{item.deaths}</td>
									<td>{item.recovered}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			) : (
				''
			)}
		</div>
	);
};

export default CovidList;
