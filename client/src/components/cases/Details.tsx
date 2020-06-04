import React,{FunctionComponent} from 'react';
import * as CaseModel from '../../models/Case';



const Details:FunctionComponent<{details:CaseModel.IList,userdetails:Function}>=(model,prop)=>{

    console.log(model)
    return (
        <div>
            <label><b>Country: </b>{model.details.country}</label>
            <br/>
            <img src={model.details.countryInfo.flag} alt=""/>
            <br/>
            
{/* 
            <table>
                <th>Cases</th>
                <td>{model.details.cases}</td>
                <br/>
                <th>Active Cases</th>
                <td>{model.details.active}</td>
                <br/>
                <th>Critical Cases</th>
                <td>{model.details.critical}</td>
                <br/>
                <th>Death(s)</th>
                <td>{model.details.deaths}</td>
                <br/>
                <th>Recoveries</th>
                <td>{model.details.recovered}</td>
                <br/>
                <th>Today's Cases</th>
                <td>{model.details.todayCases}</td>
                <br/>
                <th>Today's Deaths</th>
                <td>{model.details.todayDeaths}</td>
                <br/>
                <th>Tests</th>
                <td>{model.details.tests}</td>
            </table> */}

           
                <li>Cases: {model.details.cases}</li>
                <li>Active Cases: {model.details.active}</li>
                <li>Critical Cases: {model.details.critical}</li>
                <li>Death(s): {model.details.deaths}</li>
                <li>Recoveries: {model.details.recovered}</li>
                <li>Today's Cases: {model.details.todayCases}</li>
                <li>Today's Deaths: {model.details.todayDeaths}</li>
                <li>Total Tests: {model.details.tests}</li>
           

            <a href="!#" onClick={()=>{
               return  model.userdetails();
            }} >Back</a>
        </div>
    )
}

export default Details;