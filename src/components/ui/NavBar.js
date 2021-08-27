import React, {useContext} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import './Nav.css';

export const NavBar = () => {

    const {user:{name}} = useContext(AuthContext);
    

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" id="nav">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse ">
                <ul className="navbar-nav ">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </ul>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" >
                <ul className="navbar-nav ml-auto" id='login'>
                    <span
                        className="nav-link nav-item text-info"
                    >
                       {name}
                    </span>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
    
