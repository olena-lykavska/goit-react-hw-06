import React from "react"; // Імпортуємо React для використання JSX.
import css from "./ContactItem.module.css"; // Імпортуємо стилі для ContactItem з CSS модуля.

const ContactItem = ({ contact, onDelete }) => {
  // Оголошуємо компонент ContactItem, який приймає пропси: contact (дані контакту) і onDelete (функція для видалення контакту).

  return (
    <li className={css.listItem}> {/* Створюємо елемент списку для кожного контакту, застосовуючи відповідні стилі */}
      <div className={css.contactInfo}> {/* Контейнер для інформації про контакт */}
        <span className={css.contactName}>{contact.name}</span>: {/* Виводимо ім'я контакту */}
        <span className={css.contactNumber}>{contact.number}</span> {/* Виводимо номер телефону контакту */}
      </div>
      {/* Кнопка для видалення контакту, яка викликає функцію onDelete при натисканні */}
      <button onClick={() => onDelete(contact.id)} className={css.deleteButton}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem; // Експортуємо компонент ContactItem для використання в інших частинах додатку.
