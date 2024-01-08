import React, { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { CharactersCard } from "../component/CharactersCard.js";
import "../../styles/home.css";
import { Navbar } from "../component/navbar.js";

export const Home = () => {
	const [state, setState] = useState({});
    const { store, actions } = useContext(Context);
    console.log(state);
    useEffect(() => {
        actions.getAllCharacters();
    }, []);
    console.log(store.characters);
    return (
        <div className="container mt-5">
            <h1 className="text-danger mb-3">Characters</h1>
            <ul className="list-group pull-down">
                {store.characters.map(item => (
                <CharactersCard key={item.id} name={item.name}/>
                ))}
            </ul>
        </div>
	);
}
