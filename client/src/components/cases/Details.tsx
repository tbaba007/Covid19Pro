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