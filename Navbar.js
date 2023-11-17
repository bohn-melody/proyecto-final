import "./Navbar.css";
import {Link, Navigate, useLocation, useNavigate} from "react-router-dom";
const Navbar = () => {

  const {state} = useLocation()
  const navigate = useNavigate()
  
  console.log(state);

  const onLogout = () =>{
    navigate('/', { replace: true}
    );
  };


  return (
    <header>
     
      <h1 >
        <Link className='Navbar-logo' to='/'>Shop.</Link>
      </h1>
      
      

      {
        state?.logged ? (
          <div className='user'>
        <span className='username'> {state?.name} </span>
        <button className='btn-logout'onClick={onLogout}>Cerrar Sesion</button>
      </div>

      ) : (
        <nav className='Navbar'>
      <Link className='Registrarse' to={"./registrarse"}>Registrarse</Link>
      <Link className='Login' to={"./ingresar"}>Ingresar</Link>
      <Link className='seeCarrito' to={"./cart"}>🛒</Link>
      </nav>

      )
      }

      
      
    </header>  
  )
}

export default Navbar