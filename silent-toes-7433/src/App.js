import logo from './logo.svg';
import './App.css';
import AllRoutes from './Components/Routes/AllRoutes';
import Product from './Pages/Products/Product';

function App() {
  return (
    <div className="App">
      <AllRoutes/>
      <Product />
    </div>
  );
}

export default App;
