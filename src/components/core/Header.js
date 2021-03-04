import React, {useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";

import { AuthContext } from '../../context/auth';

export default function Header() {

  const { user } = useContext(AuthContext);

  return (
    <nav className="header navbar navbar-dark roboto-mono-font">
        <div className="">
          <Link className="navbar-brand" to="/">
            Sistema Inventario
          </Link>
        </div>
       
        {user && (<form className="form-inline">
            <Link className="btn btn-outline-primary my-2 my-sm-0" to="/dashboard">
              Panel de administración
            </Link>
          </form>)}
       
      </nav>
  )
}

