import React, { FunctionComponent } from 'react';
import * as CaseModel from '../../models/Case';

const CovidList: FunctionComponent<{ covid: CaseModel.IList[] }> = ({ covid }, props) => {
	const viewDetails = (obj: CaseModel.IList) => {
		debugger;
	};
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
							<th>Action</th>
						</tr>
					</thead>
					<tbody id="tbody">
						{covid.map((item, index) => {
							return (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>
										{item.country} <img src={item.countryInfo.flag} alt="" style={{ width: 20 }} />
									</td>
									<td> {item.cases}</td>
									<td>{item.deaths}</td>
									<td>{item.recovered}</td>
									<td>
										<button id="button" onClick={() => viewDetails(item)}>
											View
										</button>
									</td>
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
