import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Association from "./Association";
import AssignedNodes from "./AssignedNodes";
import PolicyConfiguration from "./PolicyConfiguration";
import { Stack } from "@mui/system";



export default function RevokeAttribute() {
  const options = [
    "Delete Association",
    "Delete Assignment",
    "Delete Attribute",
  ];
  const [value, setValue] = React.useState(options[0]);
  const [assignments, setassignments] = useState(false);
  
  const top100Films = [
    { label: "Delete Association" },
    { label: "Delete Assignment" },
    { label: "Delete Attribute" },
    ];
    const Test = () => {
        if (assignments === true) {
            return <AssignedNodes/>
        }
        
    }
  return (
    <>
      Select deletion type
      <br></br>
      <br></br>
      <Stack>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
              setValue(newValue);
              console.log(event.target);
            setassignments(true);
          }}
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 250 }}
          renderInput={(params) => (
            <TextField {...params} label="Select Type" />
          )}
        />
      </Stack>
      <>
        <br></br>
        <Test/>
        
      </>
    </>
  );
}
