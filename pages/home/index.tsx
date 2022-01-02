import { Box, Button, Card, Container, Grid } from "@mui/material";
import React from "react";
import NavBar from "../../components/NavBar";
import Image from "next/image";

const consulta = async () => {
  let res = await fetch("http://localhost:3001/clients");
  let data = await res.json();
  console.log(data);
};

function index() {
  return (
    <>
      <NavBar></NavBar>

      <Box
        sx={{
          height: "100vh",
        }}
      ></Box>
    </>
  );
}

export default index;
