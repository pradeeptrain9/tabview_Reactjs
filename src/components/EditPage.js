import React from 'react';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabPanel, TabContext } from "@mui/lab";
import RevokeAttribute from './RevokeAttribute';

function EditPage() {
 
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "70%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            
          >
            <Tab label="Add Attribute" value="1" />
            <Tab label="Revoke Attribute" value="2" />
            <Tab label="Condition" value="3" />
            
           
          </Tabs>
        </Box>
        <TabPanel value="1">
          
        </TabPanel>
        <TabPanel value="2">
         <RevokeAttribute/>
        </TabPanel>
        <TabPanel value="3">
          
        </TabPanel>
        
      </TabContext>
    </Box>
  );
}

export default EditPage;
