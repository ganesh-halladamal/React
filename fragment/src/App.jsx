import FoodItems from "./components/FoodItems";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import ErrorMessage from "./components/ErrorMessage";
function App() {

  let foodItems = ["Fruits and berries", "Eggs", "Meats", "Chicken breasts", "Nuts and seeds" ];

  return (
    <>
    <h1>Healty Foods</h1>
    <ErrorMessage></ErrorMessage>
    <FoodItems></FoodItems>
    </>
  );
}

export default App;
