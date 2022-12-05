import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function MultiTabView() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        centered
      >
        <Tab value="one" label="PolicyDetails"></Tab>
        <Tab value="two" label="PolicyConfigurations" />
        <Tab value="three" label="Associations" />
        <Tab value="four" label="Assigned Nodes"></Tab>
        <Tab value="five" label="Assests"></Tab>
      </Tabs>
    </Box>
  );
}
