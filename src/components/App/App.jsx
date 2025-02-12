import React from "react"; // Імпортуємо бібліотеку React, щоб використовувати JSX та компоненти.
import ContactForm from "../ContactForm/ContactForm"; // Імпортуємо компонент форми для додавання контактів.
import ContactList from "../ContactList/ContactList"; // Імпортуємо компонент списку контактів.
import SearchBox from "../SearchBox/SearchBox"; // Імпортуємо компонент для пошуку контактів.
import css from "./App.module.css"; // Імпортуємо стилі для компонента App, що знаходяться у файлі App.module.css.
import { useDispatch, useSelector } from "react-redux"; // Імпортуємо хуки для роботи з Redux: useDispatch для відправки екшенів та useSelector для отримання стану.
import { addContact, deleteContact } from "../../redux/contactsSlice"; // Імпортуємо екшени для додавання та видалення контактів.
import { changeFilter } from "../../redux/filtersSlice"; // Імпортуємо екшен для зміни фільтру.

const App = () => {
  // Використовуємо useDispatch для отримання функції відправки екшенів до Redux.
  const dispatch = useDispatch();

  // Використовуємо useSelector для отримання списку контактів зі стану Redux.
  const contacts = useSelector((state) => state.contacts.items); 

  // Використовуємо useSelector для отримання поточного значення фільтру зі стану Redux.
  const filter = useSelector((state) => state.filters.name);

  // Фільтруємо контакти на основі введеного фільтру.
  const filteredContacts = Object.values(contacts).filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()) // Перевіряємо, чи ім'я контакту містить рядок фільтру, без урахування регістру.
  );

  // Обробник зміни фільтру, відправляє екшен з новим значенням фільтру.
  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value)); // Відправляє екшен зі значенням фільтру.
  };

  return (
    <div className={css.container}> {/* Основний контейнер для додатку, з використанням класу з CSS модуля */}
      <h1>Phonebook</h1> {/* Заголовок додатку */}
      <ContactForm /> {/* Компонент форми для додавання нового контакту */}
      <SearchBox value={filter} onChange={handleFilterChange} /> {/* Компонент пошуку, передаємо значення фільтру та обробник зміни */}
      <ContactList contacts={filteredContacts} onDeleteContact={(id) => dispatch(deleteContact(id))} /> {/* Компонент списку контактів, передаємо відфільтровані контакти та функцію для видалення */}
    </div>
  );
};

export default App; // Експортуємо компонент App для використання в інших частинах додатку.
