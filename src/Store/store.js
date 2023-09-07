import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { phonebookReducer } from './phonebookSlice';

const customizeMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: phonebookReducer,
  middleware: customizeMiddleware,
});