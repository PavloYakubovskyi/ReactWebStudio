function CartAboutUs({ aboutus }) {
  //   const [count, setCount] = useState(0);
  console.log(aboutus);
  return (
    <li>
      <h3>{aboutus.thirdtitle}</h3>
      <p>{aboutus.description}</p>
    </li>
  );
}

export default CartAboutUs;
