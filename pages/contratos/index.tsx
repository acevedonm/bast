import { Box } from "@mui/material";
import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";
import EnhancedTable from "../../components/EnhancedTable";
import { api } from "../api/api";

function index() {
  useEffect(() => {
    api.get("/contracts").then((response) => console.log({ response }));
  }, []);
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
