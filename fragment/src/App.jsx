import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
// "Fruits and berries", "Eggs", "Meats", "Chicken breasts", "Nuts and seeds" 
  let foodItems = [];

  if(foodItems === 0){
    return <h3>I am still hungry</h3>
  }
  return (
    <>
    <h1>Healty Foods</h1>
    <ul className="list-group">
      {foodItems.map((item) => (<li key={Item}class="list-group-item">{item}</li>))}
    </ul>
    </>
  );
}

export default App;
