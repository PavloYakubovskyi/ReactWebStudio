import axios from "axios";
import { useEffect, useState } from "react";

function About() {
  const [users, setUsers] = useState([]);
  // const URL = "https://api.escuelajs.co/api/v1/products";
  const URL = "https://jsonplaceholder.typicode.com/users";
  async function getProducts() {
    try {
      const response = await axios.get(URL);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </>
  );
}

export default About;
