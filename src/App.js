import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Header from './Component/Header';
import Addproduct from './Component/Addproduct';
import ProductList from './Component/ProductList';
import Editproduct from './Component/Editproduct';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addproduct" element={<Addproduct />} />
          <Route exact path="/productlist" element={<ProductList />} />
          <Route path="editproduct/:id/edit" element={<Editproduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
