import { createSlice } from "@reduxjs/toolkit"; // Імпортуємо createSlice з Redux Toolkit для створення slice.

const filtersSlice = createSlice({
  name: "filters", // Ім'я slice для фільтрів, яке буде використовуватись для доступу до цього розрізу стану.
  initialState: {
    name: "", // Початковий стан фільтра: порожнє значення для фільтру за іменем.
  },
  reducers: {
    // Опис редюсера для зміни значення фільтра.
    changeFilter: (state, action) => {
      state.name = action.payload; // Оновлюємо фільтр, замінюючи значення на payload з екшену.
    },
  },
});

export const { changeFilter } = filtersSlice.actions; 
// Експортуємо екшен changeFilter, який можна використовувати для зміни стану фільтра.
export default filtersSlice.reducer; 
// Експортуємо редюсер для використання в Redux store.
