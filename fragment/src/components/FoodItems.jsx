const foodItems = () => {

  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <li key={Item} class="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
};
export default foodItems;
