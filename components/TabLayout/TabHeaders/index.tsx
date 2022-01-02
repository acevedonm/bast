import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

//Datos para las clases en css material ui
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabHeaders({ labels, children, state, handleChange }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={state}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {labels.map((label, index) => (
            <Tab label={label} key={index} {...a11yProps(index)} />
          ))}
        </Tabs>
        {children}
      </Box>
    </Box>
  );
}
