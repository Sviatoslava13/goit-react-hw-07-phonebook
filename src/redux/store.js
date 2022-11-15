import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contactsSlice/contactsSlice'


export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
  },
});