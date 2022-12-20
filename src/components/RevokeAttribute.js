import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Association from "./Association";
import AssignedNodes from "./AssignedNodes";
import PolicyConfiguration from "./PolicyConfiguration";
import { Stack } from "@mui/system";



export default function RevokeAttribute() {
  
  const [Value, setValue] = useState("");
//   const [assignments, setassignments] = useState(false);
  
  const Deletetype = [
    { label: "Delete Association", value:"1"},
    { label: "Delete Assignment", value:"2" },
    { label: "Delete Attribute", value:"3" },
    ];
    const SelectType = () => {
        
        if ( Value  === Deletetype[0].label) {
            return <Association/>
        }
        else if (Value === Deletetype[1].label) {
            return <AssignedNodes/>
        }
        else if (Value === Deletetype[2].label) {
            return <PolicyConfiguration/>
        }
        
    }
  return (
    <>
      Select deletion type
      <br></br>
      <br></br>
      <Stack>
        <Autocomplete
          value={Value}
          onChange={(event, newValue) => {
              setValue(newValue.label);
            
          }}
          disablePortal
          id="combo-box-demo"
          options={Deletetype}
          sx={{ width: 250 }}
          renderInput={(params) => (
            <TextField {...params} label="Select Type" />
          )}
        />
      </Stack>
      <>
        <br></br>
        <SelectType />
      </>
    </>
  );
}
