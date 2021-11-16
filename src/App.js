import Footer from "./components/Footer";
import HomePage from "./pages/Home"
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      <Provider store={store}>
        <Header title="simple todo app" />
          <Routes>
            <Route path="/" element={ <HomePage /> } />
          </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
