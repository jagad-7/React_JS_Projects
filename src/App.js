import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home";
import Customizable from "./Components/Customizable";
import Bookmarklet from "./Components/Bookmarklet";
import FAQComponets from "./Components/FAQComponets";
import 'bootstrap/dist/css/bootstrap.min.css'
import Calculator from "./Components/Calcultor";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="customizable" element={<Customizable/>} />
          <Route path="bookmarklet" element={<Bookmarklet />} />
          <Route path="faqcomponents" element={<FAQComponets />} />
          <Route path="calcultor" element={<Calculator />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
