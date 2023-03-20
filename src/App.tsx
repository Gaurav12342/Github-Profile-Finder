import { FC } from "react";
import "./App.css";
import Root from "./views/index";
import { Provider } from "react-redux";
import { store } from "store";

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Root />
        </Provider>
      </header>
    </div>
  );
};

export default App;
