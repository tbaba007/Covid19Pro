import React, { FunctionComponent, useState } from 'react';
import * as CaseModel from '../../models/Case';
import Details from './Details';

const CovidList: FunctionComponent<{ covid: CaseModel.IList[] }> = ({ covid }, props) => {
	const [showDetails,setShowDetails]=useState<boolean>(false)
	const [obj,setObjDetails]=useState<CaseModel.IList>(Object);
	const viewDetails = (obj: CaseModel.IList) => {
		setShowDetails(true);
		setObjDetails(obj);
	return	false;
	};
	const closeDetails=()=>{
		
		setShowDetails(false);
	}
	return (
		
		<div id="div">

		{showDetails?<Details details={obj} userdetails={closeDetails} />:null}
		
			{covid.length > 0 && !showDetails ? (
				<table id="table">
					<thead id="thead">
						<tr>
							<th>S/N</th>
							<th>Country</th>
							<th>Flag</th>
							<th>Cases</th>
							<th>Deaths</th>
							<th>Recovered</th>
							
						</tr>
					</thead>
					<tbody id="tbody">
						{covid.map((item, index) => {
							return (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>
										<a href="!#" onClick={()=>{
											 viewDetails(item)
										}}>{item.country}</a>
										 
									</td>
									<td>
									<img src={item.countryInfo.flag} alt="" style={{ width: 20 }} />
									</td>
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
