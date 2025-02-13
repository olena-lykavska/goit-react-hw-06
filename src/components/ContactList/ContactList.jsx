import React from "react"; // Імпортуємо React для роботи з JSX
import { useSelector, useDispatch } from "react-redux"; // Імпортуємо useSelector для отримання даних зі стору та useDispatch для відправки екшенів
import { deleteContact } from "../../redux/contactsSlice"; // Імпортуємо екшен для видалення контакту
import ContactItem from "../ContactItem/ContactItem"; // Імпортуємо компонент ContactItem для відображення окремого контакту
import css from "./ContactList.module.css"; // Імпортуємо файл зі стилями для компонента

const ContactList = () => {
  // Отримуємо список контактів зі стану Redux
  const contacts = useSelector((state) => state.contacts.items);
  // Отримуємо значення фільтра зі стану Redux
  const filter = useSelector((state) => state.filters.name);
  // Ініціалізуємо dispatch для відправки екшенів
  const dispatch = useDispatch();

  // Фільтруємо контакти відповідно до значення фільтра
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}> {/* Відображаємо список контактів */}
      {filteredContacts.map((contact) => (
        <ContactItem
          key={contact.id} // Унікальний ключ для кожного контакту
          contact={contact} // Передаємо контакт у компонент ContactItem
          onDelete={() => dispatch(deleteContact(contact.id))} // Видаляємо контакт при натисканні кнопки
        />
      ))}
    </ul>
  );
};

export default ContactList; // Експортуємо компонент для використання в інших частинах застосунку
