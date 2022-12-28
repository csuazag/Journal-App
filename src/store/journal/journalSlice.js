import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    activeNote: null,
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, { payload }) => {
      state.notes.push(payload);
      state.isSaving = false;
    },
    setActiveNote: (state, { payload }) => {
      state.activeNote = payload;
      state.messageSaved = "";
    },
    setNotes: (state, { payload }) => {
      state.notes = payload;
    },
    setSaving: (state, action) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    updatedNote: (state, { payload }) => {
      state.notes = state.notes.map((note) => {
        if (note.id === payload.id) return payload;
        return note;
      });

      state.isSaving = false;
      state.messageSaved = `${payload.title}, actualizado correctamente`;
    },
    setPhotosToActiveNote: (state, { payload }) => {
      state.activeNote.imageUrls = [...state.activeNote.imageUrls, ...payload];
      state.isSaving = false;
    },
    deleteNoteById: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updatedNote,
  setPhotosToActiveNote,
  deleteNoteById,
} = journalSlice.actions;
