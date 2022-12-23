import { Link as RouterLink } from "react-router-dom";

import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useState } from "react";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "Should contain @"],
  password: [(value) => value.length >= 6, "Should contain 6+ characters"],
  displayName: [(value) => value.length >= 1, "It's mandatory"],
};

export const SignupPage = () => {
  const {
    onInputChange,
    password,
    email,
    displayName,
    formState,
    passwordValid,
    emailValid,
    displayNameValid,
    isFormValid,
  } = useForm(formData, formValidations);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <AuthLayout title="Signup">
      <h1>IsFormValid: {isFormValid ? "VALID" : "Invalid"}</h1>

      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Full Name"
              type="text"
              placeholder="Name"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
              fullWidth
            />
          </Grid>

          <Grid container sx={{ mt: 2, mb: 2 }}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Create an account
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Grid item xs={12}>
              <Typography sx={{ mr: 1 }}>
                Do you already have an account?
              </Typography>

              <Link component={RouterLink} color="inherit" to="/auth/login">
                Login
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
