import React, { useState } from "react";
import BasicInfoContract from "../../../components/BasicInfoContract";
import TabHeaders from "../../../components/TabLayout/TabHeaders";
import NavBar from "../../../components/NavBar";
import TabPanel from "../../../components/TabLayout/TabPanel";
import { Typography } from "@mui/material";
import EnhancedTable from "../../../components/EnhancedTable";
import TableContent from "../../../components/TableLayout/TableContent";

/*Otros componentes */
interface Data {
  importe: number;
  vencimiento: string;
  comision: number;
  propietario: string;
  inquilino: string;
  detail: number;
}

function createData(
  propietario: string,
  inquilino: string,
  importe: number,
  comision: number,
  vencimiento: string,
  detail: number
): Data {
  return {
    propietario,
    inquilino,
    importe,
    comision,
    vencimiento,
    detail,
  };
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRows() {
  let array = [];
  for (let index = 0; index < 15; index++) {
    const date = new Date(Date.UTC(2021, 0, getRandomInt(1, 12), 3, 0, 0));
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    let r = (Math.random() + 1).toString(36).substring(7);
    array.push(
      createData(
        "Nicolas Acevedo" + r,
        "Jose Rodriguez" + r,
        getRandomInt(10000, 20000),
        getRandomInt(500, 1500),
        date.toLocaleDateString(),
        4.3
      )
    );
  }
  return array;
}

const rows = getRows();

type Order = "asc" | "desc";

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headers: readonly HeadCell[] = [
  {
    id: "propietario",
    numeric: false,
    disablePadding: true,
    label: "Propietario",
  },
  {
    id: "inquilino",
    numeric: false,
    disablePadding: true,
    label: "Inquilino",
  },
  {
    id: "importe",
    numeric: true,
    disablePadding: false,
    label: "Importe",
  },
  {
    id: "comision",
    numeric: true,
    disablePadding: false,
    label: "Comision",
  },
  {
    id: "vencimiento",
    numeric: true,
    disablePadding: false,
    label: "Vencimiento",
  },
  {
    id: "detail",
    numeric: true,
    disablePadding: false,
    label: "Detalle",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function index() {
  const array = ["Detalle", "Transacciones"];
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <NavBar></NavBar>
      <TabHeaders labels={array} handleChange={handleChange} state={value}>
        <TabPanel value={value} index={0}>
          <BasicInfoContract></BasicInfoContract>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TableContent
            data={rows}
            hearders={headers}
            title="Transacciones"
          ></TableContent>
        </TabPanel>
      </TabHeaders>
    </>
  );
}

export default index;
