import { initialState } from './initialState';
import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleFetchFulfilled = (state, { payload }) => {
  state.contacts.items = payload;
  state.contacts.isLoading = false;
  state.contacts.error = '';
};

const handleRejected = state => {
  state.contacts.isLoading = false;
  state.contacts.error = true;
};

const handleAddFulfilled = (state, { payload }) => {
  state.contacts.items = [...state.contacts.items, payload];
  state.contacts.isLoading = false;
  state.contacts.error = '';
};

const handleDeleteFulfilled = (state, { payload }) => {
  state.contacts.items = state.contacts.items.filter(
    el => el.id !== payload.id
  );
  state.contacts.isLoading = false;
  state.contacts.error = '';
};

const phonebookSlice = createSlice({
  name: 'contacts',
  initialState: initialState,

  reducers: {
    completeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFetchFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleAddFulfilled)
      .addCase(addContact.rejected, handlePending)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleDeleteFulfilled)
      .addCase(deleteContact.rejected, handlePending);
  },
});

export const phonebookReducer = phonebookSlice.reducer;

export const { completeFilter } = phonebookSlice.actions;