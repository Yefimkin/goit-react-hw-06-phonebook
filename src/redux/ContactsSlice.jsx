import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, { payload: { name, number } }) {
      state.every(item => item.name.toLowerCase() !== name.toLowerCase())
        ? state.push({
            name: name,
            number: number,
            id: nanoid(),
          })
        : alert(`${name} is already in contacts`);
    },

    deleteContact(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
});
export const { addContact, deleteContact } = ContactsSlice.actions;
