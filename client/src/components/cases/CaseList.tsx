import React, { useEffect, useState, FunctionComponent } from 'react';
import * as Api from '../../service/CovidApi';
import CovidList from './List';
import '../../assets/scss/css/Style.css';
import * as CaseModel from '../../models/Case';
const CaseList: FunctionComponent<{ DiagnosisList: [] }> = () => {
  const [ list, setList ] = useState<CaseModel.IList[]>([]);
  const [ search, setSearch ] = useState<string>('');
  const [totalCases,setTotalCases]=useState<number>(0);
  
  const fetchAll = async () => {
    Api.fetchAll().then((response) => {
      const caseList: CaseModel.IList[] = response;
      setList(caseList);
    });
    sumTotalCases()
  };

  const filterByParam = (searchValue:string) => {
    
    let response: CaseModel.IList[] = [];

    if (searchValue.trim().length === 0) {
      response.length = 0;
      fetchAll();
      return;
    }
     list.map((item) => {

      return (
        item.country.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        ?
        (response.push(item))
        :
        setList(response)
      )
      
      
    });
  };

  useEffect(() => {
    fetchAll();
    window.document.title = 'Covid19 Pro';
  });

  const sumTotalCases=()=>{
    let sum=0;
    list.map(item=>{
      return (
        sum=sum+item.cases
      )
    })
    
    setTotalCases(sum);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Country"
        onChange={(e) => {
          setSearch(e.target.value);
          filterByParam(e.target.value);
        }}
        value={search}
        id="input"
      />
      <br />
      <label>Total Cases World Wide:<b>{totalCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b></label>
      <br />
      <CovidList covid={list}  />
	  {list.length<1?
	  <img src="https://media.giphy.com/media/dBwr79sH0mHt0f7cIB/giphy.gif" alt=""/>
	  :null}
    </div>
  );
};

export default CaseList;

