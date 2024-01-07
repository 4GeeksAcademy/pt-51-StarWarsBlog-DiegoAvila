import React from "react";
import { Link } from "react-router-dom";

export const CharactersCard = () => {
	return (

        <div className="card" style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div className="card-body">
            <boton tipe="click" className="card-link">Card link</boton>
            <boton className="card-link">Another link</boton>
        </div>
        </div>
    )
}
export default CharactersCard