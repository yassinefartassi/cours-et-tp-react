import App from "App";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "store";

const rootDiv = document.getElementById("root");
const reactRoot = ReactDom.createRoot(rootDiv);
reactRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);
