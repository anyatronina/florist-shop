import "./App.css";
// import FlowerCard from "./components/flowerCard";
import NavBar from "./components/navBar";
import { Switch, Route, Redirect } from "react-router-dom";
import Catalog from "./layouts/catalog";
import Delivery from "./layouts/delivery";
import About from "./layouts/about";
import MainPage from "./components/pages/mainPage";
import Basket from "./layouts/basket";
import BasketProvider from "./hooks/useBasket";
import ModalProvider from "./hooks/useModal";

function App() {
  return (
    <>
      <BasketProvider>
        <ModalProvider>
          <NavBar />
          <Switch>
            <Route path="/catalog/:itemId?" component={Catalog} />
            <Route path="/delivery" component={Delivery} />
            <Route path="/about" component={About} />
            <Route path="/cart" component={Basket} />
            <Route path="/" exact component={MainPage} />
            <Redirect to="/" />
          </Switch>
        </ModalProvider>
      </BasketProvider>
    </>
  );
}

export default App;
