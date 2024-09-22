import FoodItems from "./components/FoodItems";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import ErrorMessage from "./components/ErrorMessage";
function App() {

  let foodItems = ["Fruits and berries", "Eggs", "Meats", "Chicken breasts", "Nuts and seeds" ];

  return (
    <>
    <h1 className="food-heading">Healty Foods</h1>
    <ErrorMessage items={foodItems}></ErrorMessage>
    <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
