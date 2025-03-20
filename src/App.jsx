import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet /> {/* The nested routes will be rendered here */}
    </>
  );
}

export default App;
