import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";


export const PlanetsCard = props => {
    
    const { store, actions } = useContext(Context);
	const params = useParams();
	
    return (

        <div className="card" style={{width: "18rem;"}}>
            <img src="https://www.servithermic.cl/images/400X200.gif" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
            </div>
            <div className="card-body">
                <Link to="/single">
                    <boton tipe="click" className="card-link">Detalles</boton>
                </Link>
                <Link to="/">
                    <boton className="card-link">favoritos</boton>
                </Link>
                
            </div>
        </div>
    )
}
export default PlanetsCard