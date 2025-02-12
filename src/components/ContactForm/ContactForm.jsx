import React from "react"; // Імпортуємо React для використання JSX.
import { Formik, Form, Field, ErrorMessage } from "formik"; // Імпортуємо компоненти з Formik для роботи з формами.
import { nanoid } from "nanoid"; // Імпортуємо nanoid для генерації унікальних ідентифікаторів.
import * as Yup from "yup"; // Імпортуємо бібліотеку Yup для валідації форми.
import css from "./ContactForm.module.css"; // Імпортуємо стилі для ContactForm з CSS модуля.
import { useDispatch } from "react-redux"; // Імпортуємо хук useDispatch для відправки екшенів до Redux.
import { addContact } from "../../redux/contactsSlice"; // Імпортуємо екшен для додавання контакту.

const ContactForm = () => {
  // Використовуємо хук useDispatch для отримання функції відправки екшенів у Redux.
  const dispatch = useDispatch();

  // Описуємо схему валідації для форми за допомогою Yup.
  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required("Required"), // Валідація для поля "name": має бути рядком від 3 до 50 символів, обов'язкове.
    number: Yup.string().matches(/^\d+$/, "Only numbers").min(3).max(15).required("Required"), // Валідація для поля "number": має бути числом, від 3 до 15 символів, обов'язкове.
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }} // Початкові значення для полів форми.
      validationSchema={validationSchema} // Вказуємо схему валідації для форми.
      onSubmit={(values, { resetForm }) => {
        // Обробник на відправку форми:
        const contact = { id: nanoid(), ...values }; // Генеруємо унікальний id для контакту та створюємо новий об'єкт.
        dispatch(addContact(contact)); // Відправляємо екшен для додавання контакту в Redux.
        resetForm(); // Очищаємо форму після відправки.
      }}
    >
      <Form className={css.form}> {/* Основна форма, яка використовує стилі з CSS модуля */}
        <div className={css.formGroup}> {/* Група для елементів форми */}
          <label htmlFor="name">Name:</label> {/* Мітка для поля "name" */}
          <Field
            id="name"
            name="name"
            type="text"
            autoComplete="name" // Автозаповнення для поля "name"
            className={css.input} // Стилі для поля введення
          />
          {/* Відображення повідомлення про помилку, якщо є */}
          <ErrorMessage className={css.error} name="name" component="div" />
        </div>
        <div className={css.formGroup}> {/* Група для поля номеру */}
          <label htmlFor="number">Number:</label> {/* Мітка для поля "number" */}
          <Field
            id="number"
            name="number"
            type="text"
            autoComplete="tel" // Автозаповнення для поля "number"
            className={css.input} // Стилі для поля введення
          />
          {/* Відображення повідомлення про помилку для поля "number" */}
          <ErrorMessage className={css.error} name="number" component="div" />
        </div>
        <button type="submit" className={css.button}>Add Contact</button> {/* Кнопка для відправки форми */}
      </Form>
    </Formik>
  );
};

export default ContactForm; // Експортуємо компонент ContactForm для використання в інших частинах додатку.
