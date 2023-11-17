import Home from "./componets/Home/home";
import Carrito from "./componets/Carrito/Carrito";
import DataProvider from "./componets/Context/DataContext";
import Registrarse from "./componets/Registrarse/Registrarse";
import DashboardPage from "./componets/Ingresar/DashboardPage";
import { Login } from "./componets/Ingresar/ingresar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return(
    <DataProvider>
  <BrowserRouter basename="/repo_react">
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Carrito/>}/>
    <Route path='/registrarse' element={<Registrarse/>}/>
    <Route path='/registrarse/registrarse' element={<Registrarse/>}/>
    <Route path='/registrarse/ingresar' element={<Login/>}/>
    <Route path='/ingresar' element={<Login/>}/>
    <Route path='/ingresar/registrarse' element={<Registrarse/>}/>
    <Route path='/ingresar/ingresar' element={<Login/>}/>
    <Route path='/dashboard' element={<Home/>}/>
  </Routes>
  </BrowserRouter>
  </DataProvider>
  );
}

export default App;
