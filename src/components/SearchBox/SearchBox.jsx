import React from "react"; // Імпортуємо React для роботи з JSX
import { useSelector, useDispatch } from "react-redux"; // Імпортуємо useSelector для отримання даних зі стору та useDispatch для відправки екшенів
import { changeFilter } from "../../redux/filtersSlice"; // Імпортуємо екшен для зміни значення фільтра
import css from "./SearchBox.module.css"; // Імпортуємо файл зі стилями для компонента

const SearchBox = () => {
  // Отримуємо значення фільтра зі стану Redux
  const filter = useSelector((state) => state.filters.name);
  // Ініціалізуємо dispatch для відправки екшенів
  const dispatch = useDispatch();

  // Функція обробки зміни значення у полі введення
  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value)); // Відправляємо екшен для зміни фільтра
  };

  return (
    <input
      id="search" // Унікальний ідентифікатор для інпуту
      type="text" // Визначаємо тип поля введення як текстовий
      value={filter} // Значення поля введення отримується зі стану Redux
      onChange={handleChange} // Викликаємо функцію зміни фільтра при введенні
      className={css.searchInput} // Додаємо стилі до поля введення
      autoComplete="off" // Вимикаємо автозаповнення для інпуту
      placeholder="Search Contacts" // Підказка для користувача
    />
  );
};

export default SearchBox; // Експортуємо компонент для використання в інших частинах застосунку
