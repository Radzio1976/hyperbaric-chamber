import { BrowserRouter, Route, Routes } from "react-router-dom";

import Wrapper from "./components/Wrapper";

const App = () => {
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Wrapper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
