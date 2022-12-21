import { Link as RouterLink } from "react-router-dom";

import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const SignupPage = () => {
  return (
    <AuthLayout title="Signup">
      <form action="">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Full Name"
              type="text"
              placeholder="Name"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="password"
              type="password"
              placeholder="email@google.com"
              fullWidth
            />
          </Grid>

          <Grid container sx={{ mt: 2, mb: 2 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Login
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
