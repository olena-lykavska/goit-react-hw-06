import React from "react"; // Імпортуємо React для створення компонента
import ContactForm from "../ContactForm/ContactForm"; // Імпортуємо компонент для додавання нового контакту
import ContactList from "../ContactList/ContactList"; // Імпортуємо компонент для відображення списку контактів
import SearchBox from "../SearchBox/SearchBox"; // Імпортуємо компонент для пошуку контактів
import css from "./App.module.css"; // Імпортуємо файл зі стилями для компонента App

// Основний компонент застосунку
const App = () => {
  return (
    <div className={css.container}> {/* Головний контейнер застосунку */}
      <h1>Phonebook</h1> {/* Заголовок сторінки */}
      <ContactForm /> {/* Форма для додавання нового контакту */}
      <SearchBox /> {/* Поле пошуку контактів */}
      <ContactList /> {/* Список контактів */}
    </div>
  );
};

export default App;// Експортуємо компонент для використання в інших частинах застосунку
