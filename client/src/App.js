import "./App.scss";
import Head from "./Components/head/Head";
import Head2 from "./Components/head2/Head2";
import ShipNPay from "./Components/shipNpay/ShipNPay";
import Payment from "./Components/paymentMethod/Payment";
import Cart from "./Components/yourCart/Cart";
import Footer from "./Components/footer/Footer";
import { Switch, Route } from "react-router-dom";
import Login from "./Components/login/Login";
import Signup from "./Components/signup/Signup";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Head />
          <Head2 />
          <div className="MainDisplay">
            <ShipNPay />
            <Payment />
            <Cart />
          </div>
          <Footer />
        </Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={Signup}></Route>
      </Switch>
    </div>
  );
}

export default App;
