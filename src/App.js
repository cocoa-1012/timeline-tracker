import logo from "./logo.svg";
import "./App.css";
import SpanGraph from "./pages/SpanGraph";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers";

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SpanGraph />
      </Provider>
    </div>
  );
}

export default App;
