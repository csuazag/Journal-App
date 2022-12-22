import { Link as RouterLink } from "react-router-dom";

import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

const formData = {
  email: "camilo@gmail.com",
  password: "123456",
  displayName: "Camilo Suaza",
};

export const SignupPage = () => {
  const { onInputChange, password, email, displayName, formState } =
    useForm(formData);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <AuthLayout title="Signup">
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
