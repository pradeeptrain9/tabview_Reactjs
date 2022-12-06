import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabPanel, TabContext } from "@mui/lab";
import Assests, { } from "./Resources";
import PolicyDetails from "./PolicyDetails";
import PolicyConfigurations from "./PolicyConfiguration";
import Association from "./Association";
import AssignedNodes from "./AssignedNodes";

export default function MultiTabView() {
  const [value, setValue] = React.useState("1")

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
            <Tab label="PolicyDetails" value="1" />
            <Tab label="PolicyConfigurations" value="2" />
            <Tab label="Associstion" value="3" />
            <Tab label="AssignedNodes" value="4" />
            <Tab label="Resources" value="5" />
          </Tabs>
        </Box>
        <TabPanel value="1"><PolicyDetails/></TabPanel>
        <TabPanel value="2"><PolicyConfigurations/></TabPanel>
        <TabPanel value="3"><Association/></TabPanel>
        <TabPanel value="4"><AssignedNodes/></TabPanel>
        <TabPanel value="5"><Assests/></TabPanel>
      </TabContext>
    </Box>
  );
}
