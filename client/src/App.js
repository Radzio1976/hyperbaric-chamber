import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";

const App = () => {
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
