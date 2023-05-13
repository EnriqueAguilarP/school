import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import store from "store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Engineering from "containers/pages/Engineering";
import About from "containers/pages/About";
import Admission from "containers/pages/Admission";
import Contact from "containers/pages/Contact";
import Languages from "containers/pages/Languages";

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Routes>
            <Route path="*" element={ <Error404 />} />
            <Route path="/engineering" element= { <Engineering /> } />
            <Route path="/about" element= { <About /> } />
            <Route path="/admission" element= { <Admission /> } />
            <Route path="/contact" element= { <Contact /> } />
            <Route path="/courses" element= { <Courses /> } />
            <Route path="/languages" element= { <Languages /> } />
            <Route path="/" element= { <Home /> } />
          </Routes>
        </Router>
    </Provider>
  
  );
}

export default App;
