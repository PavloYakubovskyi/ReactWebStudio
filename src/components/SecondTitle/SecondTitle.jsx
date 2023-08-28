function SecondTitle({ title }) {
  console.log(title);
  //   const [count, setCount] = useState(0);

  return <>{title && <h2 className="title_employeers">{title}</h2>}</>;
}

export default SecondTitle;
