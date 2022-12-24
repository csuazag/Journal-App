import { Link as RouterLink, useFormAction } from "react-router-dom";
import { Google } from "@mui/icons-material";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  startGoogleSignIn,
  startLoginEmailWithPassword,
} from "../../store/auth";
import { useMemo, useState } from "react";

const formData = {
  email: "",
  password: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "Should contain @"],
  password: [(value) => value.length >= 6, "Should contain 6+ characters"],
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const [isFormSent, setIsFormSent] = useState(false);

  const {
    onInputChange,
    password,
    email,
    isFormValid,
    passwordValid,
    emailValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setIsFormSent(true);

    if (!isFormValid) return;

    dispatch(startLoginEmailWithPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@google.com"
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && isFormSent}
              helperText={emailValid}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && isFormSent}
              helperText={passwordValid}
              fullWidth
            />
          </Grid>

          <Grid container display={!!errorMessage ? "" : "none"} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <Alert severity="error"> {errorMessage}</Alert>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={12} md={6}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isAuthenticating}
              >
                Login
              </Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <Button
                variant="contained"
                onClick={onGoogleSignIn}
                fullWidth
                disabled={isAuthenticating}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/signup">
              Create an account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
