import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

export const SideBar = ({ drawerWith }) => {
  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWith, flexShrink: { sm: 0 } },
      }}
    >
      <Drawer
        open
        variant="permanent"
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWith },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Camilo Suaza
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {["January", "February", "March"].map((month) => (
            <ListItem key="month" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={month} />
                  <ListItemText secondary={"Text text text text text"} />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
