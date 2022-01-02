import { Box } from "@mui/material";
import React from "react";
import NavBar from "../../components/NavBar";
import EnhancedTable from "../../components/EnhancedTable";

function index() {
  return (
    <>
      <NavBar></NavBar>
      <Box sx={{ flexGrow: 1 }}>
        <EnhancedTable></EnhancedTable>
      </Box>
    </>
  );
}
export default index;
