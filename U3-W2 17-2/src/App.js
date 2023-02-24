import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./assets/Logo.png";
import NavCustom from "./components/nav/NavCustom";

function App() {
  return (
    <>
      <NavCustom logo={logo} />
    </>
  );
}

export default App;
