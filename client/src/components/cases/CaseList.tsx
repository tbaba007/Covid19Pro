

import React, { useEffect, useState, FunctionComponent } from "react";
import * as Api from "../../service/CovidApi";
import CovidList from "./List";
import "../../assets/scss/css/Style.css";
import * as CaseModel from "../../models/Case";
const CaseList: FunctionComponent<{ DiagnosisList: [] }> = () => {
  const [list, setList] = useState<CaseModel.IList[]>([]);
  const [search, setSearch] = useState<string>("");
  const [totalCases, setTotalCases] = useState<number>(0);
  const [totalRecoveries, setTotalRecoveries] = useState<number>(0);
  const [totalDeaths, setTotalDeaths] = useState<number>(0);

  const fetchAll = async () => {
    Api.fetchAll().then(response => {
      const caseList: CaseModel.IList[] = response;
      setList(caseList);
      sumTotalCases(caseList);
      sumTotalDeaths(caseList);
      sumTotalRecoveries(caseList);
    });

  };

  const filterByParam = (searchValue: string) => {
    let response: CaseModel.IList[] = [];

    if (searchValue.trim().length === 0) {
      response.length = 0;
      fetchAll();
      return;
    }
    list.map(item => {
      return item.country
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase())
        ? response.push(item)
        : setList(response);
    });
  };

  useEffect(() => {
    let mounted=true;
    fetchAll();
    window.document.title = "Covid19 Pro";
  
    return ()=>{
      mounted=false;
    }
  }
  ,[]);

  const sumTotalCases = (caselist:CaseModel.IList[]) => {
    let sum = 0;
    caselist.map(item => {
      return (sum = sum + item.cases);
    });

    setTotalCases(sum);
  };

  const sumTotalRecoveries = (caselist:CaseModel.IList[]) => {
    let totalRecoveries = 0;
    caselist.map(item => {
      return (totalRecoveries = totalRecoveries + item.recovered);
    });
    setTotalRecoveries(totalRecoveries);
  };

  const sumTotalDeaths = (caselist:CaseModel.IList[]) => {
    let totalDeaths = 0;
    caselist.map(item => {
      return (totalDeaths = totalDeaths + item.deaths);
    });
    setTotalDeaths(totalDeaths);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Country"
        onChange={e => {
          setSearch(e.target.value);
          filterByParam(e.target.value);
        }}
        value={search}
        id="input"
      />
      <br />
      <label>
        Total Cases World Wide:
        <b>{totalCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b>
      </label>
      <br />
      <label>
        Total Recoveries World Wide:
        <b>
          {totalRecoveries.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </b>
      </label>
      <br />
      <label>
        Total Death(s) World Wide:
        <b>{totalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b>
      </label>
      <br />
      <CovidList covid={list} />
    </div>
  );
};

export default CaseList;