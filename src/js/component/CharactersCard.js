import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const CharactersCard = () => {
    const { store, actions } = useContext(Context);
	const params = useParams();
	
    return (

        <div className="card" style={{width: "18rem;"}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div className="card-body">
            <link to="/">
                <boton tipe="click" className="card-link">Card link</boton>
            </link>
            <link to="/">
                <boton className="card-link">Another link</boton>
            </link>
            
        </div>
        </div>
    )
}
export default CharactersCard