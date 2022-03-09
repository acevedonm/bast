import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";
import { LoginLayout } from "../components/Layout/LoginLayout";
import { useRouter } from "next/router";
import { LoginCard } from "../components/LoginCard";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/home");
  };

  return (
    <LoginLayout>
      <LoginCard>
        <h2>BIENVENIDO! @User</h2>
        <FormControl>
          <InputLabel htmlFor="my-input">Email</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Contraseña</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            Nunca le pediremos su contraseña
          </FormHelperText>
        </FormControl>
        <Button onClick={handleLogin}>Login</Button>
      </LoginCard>
    </LoginLayout>
  );
}
