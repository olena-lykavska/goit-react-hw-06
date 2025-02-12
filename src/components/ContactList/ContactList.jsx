import React from "react"; // Імпортуємо React для використання JSX.
import ContactItem from "../ContactItem/ContactItem"; // Імпортуємо компонент ContactItem для відображення окремих контактів.
import css from "./ContactList.module.css"; // Імпортуємо стилі для ContactList з CSS модуля.

const ContactList = ({ contacts, onDeleteContact }) => {
  // Оголошуємо компонент ContactList, який приймає пропси: contacts (масив контактів) і onDeleteContact (функція для видалення контакту).

  return (
    <ul className={css.list}> {/* Створюємо список, у якому будуть відображені всі контакти */}
      {contacts.map((contact) => (
        // Для кожного контакту з масиву створюємо компонент ContactItem
        <ContactItem 
          key={contact.id}  // Використовуємо унікальний ключ для кожного елемента списку.
          contact={contact}  // Передаємо контакт як пропс.
          onDelete={onDeleteContact}  // Передаємо функцію видалення контакту як пропс.
        />
      ))}
    </ul>
  );
};

export default ContactList; // Експортуємо компонент ContactList для використання в інших частинах додатку.
