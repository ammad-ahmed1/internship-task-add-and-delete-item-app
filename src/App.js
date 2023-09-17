import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";
import ItemsList from './components/ItemsList';
import { Button } from 'react-bootstrap/Button';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddItemForm from './components/AddItemForm';
import Navbar from './components/Navbar';

function App() {

  return (
    <div>
      <div>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element = {<ItemsList />}>
            </Route>
              <Route path='AddItemForm' element = {<AddItemForm />} />
          </Routes>
        </BrowserRouter>
        {/* <Router>
        <button className='btn btn-primary m-3'><Link to = "/AddItemForm">Add item</Link></button>
        </Router> */}
        
        {/*<ItemsList />*/}
        
      </div>

    </div>
  );
}

export default App;
