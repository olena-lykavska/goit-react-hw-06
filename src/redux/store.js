import { configureStore } from '@reduxjs/toolkit'; // Імпортуємо функцію для конфігурації Redux store.
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'; 
// Імпортуємо функції та константи з redux-persist для налаштування збереження стану в локальному сховищі.
import storage from 'redux-persist/lib/storage'; // Використовуємо локальне сховище як механізм для збереження даних.
import contactsReducer from './contactsSlice'; // Імпортуємо редюсер для контактів.
import filtersReducer from './filtersSlice'; // Імпортуємо редюсер для фільтрів.


// Конфігурація persist для контактів
const persistConfig = {
  key: 'contacts', // Ключ, під яким будуть зберігатися контакти в локальному сховищі.
  storage, // Вказуємо, що для збереження будемо використовувати локальне сховище (localStorage).
  whitelist: ['items'], // Зберігаємо тільки масив контактів (властивість 'items') — інші властивості стану не зберігаються.
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);
// Огортаємо редюсер для контактів в persistReducer, щоб налаштувати збереження цього стану.


// Конфігурація store
const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer, // Встановлюємо редюсер для контактів з підтримкою persist.
    filters: filtersReducer, // Редюсер для фільтрів.
  },
  // Додаємо middleware для обробки persist дій
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ігноруємо дії persist, оскільки вони не є серіалізованими.
      },
    }),
});

// Створення persistor для контролю за станом збереження в локальному сховищі
const persistor = persistStore(store);

export { store, persistor }; // Експортуємо store та persistor, щоб використовувати їх в компоненті.
