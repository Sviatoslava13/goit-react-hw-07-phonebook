import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  fetchContact,
  removeContact,
} from '../../utils/mockapiApi';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
        filterContact(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder => { builder
      .addCase(fetchContact.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = payload;
      })
      .addCase(fetchContact.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      })

      .addCase(addContact.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.push(payload);
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      })

      .addCase(removeContact.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(removeContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = state.contacts.items.filter(
          el => el.id !== payload
        );
      })
      .addCase(removeContact.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      });
  },
});
export const { filterContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
/*extraReducers: {
     [fetchContact.pending] (state){
      state.contacts.isLoading = true;
    },
    [fetchContact.fulfilled](state, { payload }){
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = payload;
    },
    [fetchContact.rejected] (state, { payload }){
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },
    [addContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled] (state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      console.log(state.contacts.items.push(payload));
    },
    [addContact.rejected] (state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },
        [removeContact.pending] (state)  {
      state.contacts.isLoading = true;
    },
    [removeContact.fulfilled](state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
       state.contacts.items = state.contacts.items.filter(el => el.id !== payload);
    },
    [removeContact.rejected] (state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },
    filterContact(state, { payload }) {
      state.filter = payload;
    },
  }, */
/* builder => {
     builder.addCase(fetchContact.pending, (state) => { state.contacts.isLoading = true; })
       .addCase(fetchContact.fulfilled, (state, { payload }) => {
         state.contacts.isLoading = false;
         state.contacts.error = null;
         state.contacts.items = payload
       })
     .addCase(fetchContact.rejected, (state, { payload })=>{
      state.contacts.isLoading = false;
      state.contacts.error = payload;
     })
     

     .addCase(addContact.pending, (state) => { state.contacts.isLoading = true; })
       .addCase(addContact.fulfilled, (state, { payload }) => {
         state.contacts.isLoading = false;
         state.contacts.error = null;
     state.contacts.items.push(payload)
       })
     .addCase(addContact.rejected, (state, { payload })=>{
      state.contacts.isLoading = false;
      state.contacts.error = payload;
     })
     

      .addCase(removeContact.pending, (state) => { state.contacts.isLoading = true; })
       .addCase(removeContact.fulfilled, (state, { payload }) => {
         state.contacts.isLoading = false;
         state.contacts.error = null;
     state.contacts.items = state.contacts.items.filter(el => el.id !== payload);
       })
     .addCase(removeContact.rejected, (state, { payload })=>{
      state.contacts.isLoading = false;
      state.contacts.error = payload;
     }) */
