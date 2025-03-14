import "./App.css";
import IngredientsPanel from "./components/IngredientsPanel";
import RecipesPanel from "./components/RecipesPanel";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <IngredientsPanel />
      <RecipesPanel />
    </div>
  );
}

export default App;
