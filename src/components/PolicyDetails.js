import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import axios from "axios";

function PolicyDetails() {
  const [showData, setshowData] = useState([]);
  const apiUrl = "https://jsonplaceholder.typicode.com/todos/";
  // let displayData;
  useEffect(() => {
    displayJson();
  }, []);
  function displayJson() {
    axios(apiUrl).then((response) => {
      //console.log(response);
      setshowData(response.data); // data is coming fro response
    });
  };

  const columns = [
    {
      dataField: "id",
      text: "SNO",
    },
    {
      dataField: "title",
      text: "Title",
    },
  ];
  return (
    <div>
      <BootstrapTable keyField="id" data={showData} columns={columns} striped hover condensed /> 
    </div>
  );
}

export default PolicyDetails;
