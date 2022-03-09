import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Grid,
  Typography,
} from "@mui/material";
import { LoginLayout } from "../components/Layout/LoginLayout";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const login = () => {
    router.push("/home");
  };
  return (
    <LoginLayout>
      <Container sx={{ height: "100vh", width: "50%" }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid columns={12}>
            <Typography variant="h4" align="center">
              Bast! Sistema inmobiliario
            </Typography>
          </Grid>
          <FormControl>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl sx={{ margin: "10px" }}>
            <InputLabel htmlFor="my-input">Contraseña</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">
              Nunca le pediremos su contraseña
            </FormHelperText>
          </FormControl>
          <Button onClick={login}>Login</Button>
        </Grid>
      </Container>
    </LoginLayout>
  );
}
