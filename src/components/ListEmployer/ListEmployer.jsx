import CartEmploeer from "../CartEmploeer/CartEmploeer";

const ListEmployer = ({ list }) => {
  return (
    <ul>
      {list.map((employeer) => (
        <CartEmploeer key={employeer.name} employeer={employeer} />
      ))}
    </ul>
  );
};

export default ListEmployer;
