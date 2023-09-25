import "./App.css";
// import FlowerCard from "./components/flowerCard";
import NavBar from "./components/navBar";
import { Switch, Route, Redirect } from "react-router-dom";
import Catalog from "./layouts/catalog";
import Delivery from "./layouts/delivery";
// import About from "./layouts/about";
import MainPage from "./components/pages/mainPage";
import Basket from "./layouts/basket";
import BasketProvider from "./hooks/useBasket";
import ModalProvider from "./hooks/useModal";
// import Favorites from "./layouts/favorites";
import AppLoader from "./components/hoc/appLoader";
import Login from "./layouts/login";
import LogOut from "./layouts/logOut";
import PersonalAccount from "./components/pages/personalAccount";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <div>
      <AppLoader>
        <BasketProvider>
          <ModalProvider>
            <NavBar />
            <Switch>
              <ProtectedRoute
                path="/users/:userId?"
                component={PersonalAccount}
              />
              <Route path="/catalog/:itemId?" component={Catalog} />
              <Route path="/delivery" component={Delivery} />
              {/* <Route path="/about" component={About} /> */}
              <ProtectedRoute path="/cart" component={Basket} />
              {/* <Route path="/favorites" component={Favorites} /> */}
              <Route path="/login" component={Login} />
              <Route path="/logout" component={LogOut} />
              <Route path="/" exact component={MainPage} />
              <Redirect to="/" />
            </Switch>
          </ModalProvider>
        </BasketProvider>
      </AppLoader>
    </div>
  );
}

export default App;
