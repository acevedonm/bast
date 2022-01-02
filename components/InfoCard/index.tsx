import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function InfoCard({ propietario, inquilino }) {
  return (
    <Card sx={{ minWidth: 275, marginTop: "5px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Propietario
        </Typography>
        <Typography variant="h5" component="div">
          {propietario}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Inquilino
        </Typography>
        <Typography variant="h5" component="div">
          {inquilino}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver Contrato</Button>
      </CardActions>
    </Card>
  );
}
