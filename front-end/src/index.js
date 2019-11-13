import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import Spinner from "./Factory/Spinner";
import store from "./redux/store";
import checkTokenAuth from "./lib/checkTokenAuth";

const App = React.lazy(() => import("./App"));

checkTokenAuth(store);

const Application = () => {
  return (
    <Provider store={store}>
      <Router>
        <React.Suspense fallback={<Spinner />}>
          <App />
        </React.Suspense>
      </Router>
    </Provider>
  );
};

// console.log(Application)

ReactDOM.render(<Application />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
