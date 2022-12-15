import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabPanel, TabContext } from "@mui/lab";
import Assests from "./Assests";
import PolicyDetails from "./PolicyDetails";
import PolicyConfigurations from "./PolicyConfiguration";
import Association from "./Association";
import AssignedNodes from "./AssignedNodes";
import { Button } from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function MultiTabView() {
  const navigate = useNavigate();
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
            centered
          >
            <Tab label="Policy Details" value="1" />
            <Tab label="Policy Configurations" value="2" />
            <Tab label="Associstion" value="3" />
            <Tab label="Assigned Nodes" value="4" />
            <Tab label="Assets" value="5" />
            <Button onClick={() => {
              navigate('/edit');
            }}>edit</Button>
          </Tabs>
        </Box>
        <TabPanel value="1">
          <PolicyDetails />
        </TabPanel>
        <TabPanel value="2">
          <PolicyConfigurations />
        </TabPanel>
        <TabPanel value="3">
          <Association />
        </TabPanel>
        <TabPanel value="4">
          <AssignedNodes />
        </TabPanel>
        <TabPanel value="5">
          <Assests />
        </TabPanel>
        
        
      </TabContext>
    </Box>
  );
}
