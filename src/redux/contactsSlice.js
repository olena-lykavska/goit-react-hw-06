import { createSlice } from "@reduxjs/toolkit"; // Імпортуємо createSlice з Redux Toolkit для створення slice.

const contactsSlice = createSlice({
  name: "contacts", // Ім'я slice, яке буде використовуватися для доступу до цього розрізу стану в Redux.
  initialState: {
    items: [], // Початковий стан: масив, що містить контакти. Спочатку він порожній.
  },
  reducers: {
    // Опис редюсерів для додавання і видалення контактів.
    addContact: (state, action) => {
      // Додавання контакту в масив items.
      state.items.push(action.payload); // action.payload містить новий контакт, який додається в масив.
    },
    deleteContact: (state, action) => {
      // Видалення контакту за id з масиву items.
      state.items = state.items.filter(contact => contact.id !== action.payload); 
      // Фільтруємо масив і повертаємо новий масив, в якому немає контакту з id, що дорівнює action.payload.
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions; 
// Експортуємо екшени (addContact, deleteContact), які можна буде використовувати для зміни стану.
export default contactsSlice.reducer; 
// Експортуємо редюсер для використання в Redux store.
