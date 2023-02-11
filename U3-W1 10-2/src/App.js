import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavCustom from "./components/NavCustom";
import logo from "./assets/logo.png";
import SecondNavCustom from "./components/SecondNavCustom";
import FirstCard from "./components/FirstCard";
import SecondCard from "./components/SecondCard";
import ThirdCard from "./components/ThirdCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="mx-4">
        <NavCustom sorgente={logo} />
        <SecondNavCustom />
        <h4 className="my-4">Harry Potter Saga</h4>
        <div className="d-flex  flex-wrap flex-lg-nowrap justify-content-between  ">
          <FirstCard />
        </div>
        <h4 className="my-4">Marvel Saga</h4>
        <div className="d-flex  flex-wrap flex-lg-nowrap justify-content-between  ">
          <SecondCard />
        </div>
        <h4 className="my-4">Lo Hobbit Saga</h4>
        <div className="d-flex  flex-wrap flex-lg-nowrap justify-content-between  ">
          <ThirdCard />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
