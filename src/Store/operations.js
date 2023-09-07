import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64f97a7a4098a7f2fc147686.mockapi.io/Contacts';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await axios.get('/Contacts');
  return data;
});


export const addContact = createAsyncThunk(
  'contacts/addContact',
  async item => {
    const { data } = await axios.post('/Contacts', item);
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const { data } = await axios.delete(`/Contacts/${id}`);
    return data;
  }
);