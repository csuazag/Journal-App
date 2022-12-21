import { AddOutlined } from "@mui/icons-material";
import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteViews } from "../views";
import { NothingSelectedView } from "../views/NothingSelectedView";

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />
      {/* <NoteViews /> */}
      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": {
            backgroundColor: "error.main",
            opacity: 0.9,
          },
          position: "fixed",
          bottom: 50,
          right: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
