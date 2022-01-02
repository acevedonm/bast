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
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const login = () => {
    router.push("/home");
  };
  return (
    <>
      <Container sx={{ height: "100vh", width: "50%" }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid columns={12}>
            {" "}
            <Typography
              variant="h4"
              align="center" /*className={styles.title}*/
            >
              Bienvenido a{" "}
              <a href="https://nextjs.org">Bast! Sistema inmobiliario</a>
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
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by @Acevedonm
        </a>
      </footer>
    </>
  );
}
