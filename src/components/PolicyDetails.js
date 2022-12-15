import React, { useEffect, useState } from "react";
import datajson from "../datajson.json";
import Stack from "react-bootstrap/Stack";


function PolicyDetails() {
  const [showData, setshowData] = useState([]);
  const [status, setstatus] = useState("active");
  //const apiUrl = "https://jsonplaceholder.typicode.com/todos/";
  let displayData;
  useEffect(() => {
    displayJson();
  }, []);
  function displayJson() {
    displayData = datajson.map((object) => {
      return (
        <div key={object.policyID}>
          <h6>Name</h6>
          <Stack spacing={2} className="mx-auto" width='250px'>
            <div className="bg-light border">{object.name}</div>
          </Stack>
          <br />
          <h6>Policy Status</h6>
          <select  className="custom-select" onChange={(event) => {
            const selectedstatus = event.target.value;
            setstatus(selectedstatus);
          }}>
            <option value="active">Active</option>
            <option value="block">Block</option>
          </select>
          
          <br />
          <br />
          <h6>Description</h6>
          <Stack gap={3} className="mx-auto">
            <div className="bg-light border">{object.description}</div>
          </Stack>
          <br />
        </div>
      );
    });
    setshowData(displayData);
  }

  
  return <div>{showData}</div>;
}

export default PolicyDetails;
