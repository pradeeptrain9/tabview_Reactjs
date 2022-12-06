import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import axios from "axios";
import { useEffect, useState } from "react";
import paginationFactory from "react-bootstrap-table2-paginator";

function Resources() {
  const [showData, setshowData] = useState([]);
  const apiUrl = "https://jsonplaceholder.typicode.com/todos/";
  // let displayData;
  useEffect(() => {
    displayJson();
  }, []);
  function displayJson() {
    axios(apiUrl).then((response) => {
      //console.log(response);
      setshowData(response.data); // data is coming from response
    });
  }

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
      <BootstrapTable
        keyField="id"
        data={showData}
        columns={columns}
        striped
        hover
        condensed
        pagination={paginationFactory({
          sizePerPage: 15,
        })}
      />
    </div>
  );
}

export default Resources;
