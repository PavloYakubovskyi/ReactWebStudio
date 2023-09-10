import { Formik } from "formik";
import * as yup from "yup";
import { nanoid } from "nanoid";
import { AddButton, Error, FormStyled, Input } from "./Autorization.styled.jsx";
import UserList from "../../components/UserList/UserList.jsx";

import { useEffect, useState } from "react";

// huk залазить в долкал строыдж
const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

const schema = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().min(6).max(16).required(),
});
// ==================

const initialValues = {
  id: "",
  name: "",
  password: "",
};

const Autorization = () => {
  const [users, setUsers] = useLocalStorage("autorization", []);

  const addContact = (data) => {
    setUsers((prevState) => [...prevState, data]);
  };
  const handleSubmit = (values, { resetForm }) => {
    values.id = nanoid();
    addContact(values);
    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormStyled autoComplete="off">
          <label htmlFor="name">
            Name
            <Input
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            {/* <Error name="name" /> */}
          </label>
          <label htmlFor="password">
            Password
            <Input
              type="password"
              name="password"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              title="Password must be 6-16 symbols"
            />
            {/* <Error name="password" /> */}
          </label>
          <AddButton type="submit">Add contact</AddButton>
        </FormStyled>
      </Formik>
      <UserList users={users} />
    </>
  );
};

export default Autorization;
