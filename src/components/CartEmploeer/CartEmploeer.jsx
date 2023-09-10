import SocialLink from "../SocialLink/SocialLink";

// ui повертає
function CartEmploeer({ employeer }) {
  //   const [count, setCount] = useState(0);
  console.log(employeer);
  return (
    <li>
      <img src={employeer.images} alt={employeer.name} />
      <h3>{employeer.name}</h3>
      <p>{employeer.position}</p>
      <ul>
        {employeer.social.map((item) => (
          <SocialLink key={[item]} socialMedia={item} />
        ))}
      </ul>
    </li>
  );
}

export default CartEmploeer;
