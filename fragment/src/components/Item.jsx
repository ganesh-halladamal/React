const Item = ({ foodItem }) => {
  return (
    <li className="list-group-item gh-iem">
      <span className="gh-span">{foodItem}</span>
    </li>
  );
};

export default Item;
