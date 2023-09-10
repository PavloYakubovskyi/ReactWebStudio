function CartOffer({ offer }) {
  //   const [count, setCount] = useState(0);
  console.log(offer);
  return (
    <li>
      <img src={offer.images} alt={offer.name} />
    </li>
  );
}

export default CartOffer;
