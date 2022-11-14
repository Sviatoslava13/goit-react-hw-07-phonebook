import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
       state.contacts.push(payload);
      },
      prepare: data => {
        return {
          payload: { ...data, id: nanoid() },
        };
      },
    },
    removeContact(state, { payload }) {
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },
    filterContact(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { addContact, removeContact, filterContact } =
  contactsSlice.actions;

export default contactsSlice.reducer;
