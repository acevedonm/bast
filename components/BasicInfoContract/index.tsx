import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CardClient from "../CardClient";

function BasicInfoContract() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CardClient typeClient={"Propietario"}></CardClient>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardClient typeClient={"Inquilino"}></CardClient>
        </Grid>

        <Grid item xs={12} md={4}>
          <CardClient typeClient={"Contrato"}></CardClient>
        </Grid>
        <Grid item xs={12} md={4}>
          <CardClient typeClient={"Garante"}></CardClient>
        </Grid>
        <Grid item xs={12} md={4}>
          <CardClient typeClient={"Garante"}></CardClient>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BasicInfoContract;
