import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { api } from "../api/api";
import NavBar from "../../components/NavBar";
import TableContent from "../../components/TableClients/TableContent";

interface Data {
  detalle: string;
  email: string;
  nombre: string;
  apellido: string;
  balance: number;
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headers: readonly HeadCell[] = [
  {
    id: "nombre",
    numeric: false,
    disablePadding: true,
    label: "Nombre",
  },
  {
    id: "apellido",
    numeric: false,
    disablePadding: true,
    label: "Apellido",
  },
  {
    id: "email",
    numeric: false,
    disablePadding: true,
    label: "Email",
  },
  {
    id: "balance",
    numeric: true,
    disablePadding: false,
    label: "Balance",
  },

  {
    id: "detalle",
    numeric: true,
    disablePadding: false,
    label: "Detalle",
  },
];

function Index() {
  useEffect(() => {
    api.get("/clients").then((response) => {
      let clients = response.data;
      let owners = clients.filter((client: any) =>
        client.types.includes("OWNER")
      );
      setOwners(owners);
    });
  }, []);
  const [owners, setOwners] = useState([]);
  return (
    <>
      <NavBar></NavBar>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{ margin: "10px" }}
      >
        Crear Nuevo
      </Button>
      <Box sx={{ flexGrow: 1 }}>
        <TableContent
          hearders={headers}
          data={owners}
          title="Propietarios"
        ></TableContent>
      </Box>
    </>
  );
}

export default Index;
