import { AddOutlined } from "@mui/icons-material";
import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteViews } from "../views";
import { NothingSelectedView } from "../views/NothingSelectedView";

export const JournalPage = () => {
  const { isSaving, activeNote } = useSelector((state) => state.journal);

  console.log({ isSaving });
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };
  return (
    <JournalLayout>
      {activeNote ? <NothingSelectedView /> : <NoteViews />}

      <IconButton
        onClick={onClickNewNote}
        disabled={isSaving}
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
