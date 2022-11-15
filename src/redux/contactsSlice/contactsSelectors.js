export const getContacts = state => state.contacts.contacts.items;
export const getIsContacts =(state) => getContacts(state).length > 0;
export const getContactsFilter = state => state.contacts.filter;
