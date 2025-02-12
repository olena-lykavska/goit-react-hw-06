import React from "react";
import ReactDOM from "react-dom/client"; // Тепер потрібно імпортувати з 'react-dom/client'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import App from "./components/App/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> {/* Завантаження перед рендером */}
      <App />
    </PersistGate>
  </Provider>
);
