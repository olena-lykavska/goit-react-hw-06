import React from "react"; // Імпортуємо React для використання JSX.
import { useDispatch } from "react-redux"; // Імпортуємо хук useDispatch з Redux для відправки екшенів.
import { changeFilter } from "../../redux/filtersSlice"; // Імпортуємо екшен changeFilter для зміни фільтра контактів.
import css from "./SearchBox.module.css"; // Імпортуємо стилі для SearchBox з CSS модуля.

const SearchBox = ({ value, onChange }) => {
  // Оголошуємо компонент SearchBox, який приймає пропси: value (поточне значення фільтру) і onChange (функція для обробки зміни).
  
  const dispatch = useDispatch(); // Ініціалізуємо хук dispatch для відправки екшенів Redux.

  const handleChange = (e) => {
    // Обробник зміни значення в полі вводу, який відправляє екшен changeFilter в Redux.
    dispatch(changeFilter(e.target.value)); // Відправляємо нове значення фільтру до Redux.
  };

  return (
    <input
      id="search" // Унікальний id для елемента input
      type="text" // Тип інпуту — текстовий.
      value={value} // Значення інпуту передається через пропс value.
      onChange={handleChange} // Викликається handleChange при зміні значення інпуту.
      className={css.searchInput} // Застосовуємо стилі для інпуту.
      autoComplete="off" // Вимикаємо автозаповнення.
      placeholder="Search Contacts" // Текст підказки, що з'являється в полі вводу.
    />
  );
};

export default SearchBox; // Експортуємо компонент SearchBox для використання в інших частинах додатку.
