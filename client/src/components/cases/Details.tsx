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
            <label> <b>Cases: </b> {model.details.cases}</label>
            <br/>
            <label> <b>Active Cases: </b> {model.details.active}</label>
            <br/>
            <label> <b>Critical Cases: </b> {model.details.critical}</label>
            <br/>
            <label> <b>Death(s): </b> {model.details.deaths}</label>
            <br/>
            <label> <b>Recoveries: </b> {model.details.recovered}</label>
            <br/>
            <label> <b>Today's Cases: </b> {model.details.todayCases}</label>
            <br/>
            <label> <b>Today's Deaths: </b> {model.details.todayDeaths}</label>
            <br/>

            <a href="!#" onClick={()=>{
               return  model.userdetails();
            }} >Back</a>
        </div>
    )
}

export default Details;