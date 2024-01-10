import React, { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { CharactersCard } from "../component/CharactersCard.js";
import "../../styles/home.css";
import { library } from "webpack";

export const Home = () => {
	const [state, setState] = useState({});
    const { store, actions } = useContext(Context);
    console.log(state);
    useEffect(() => {
        actions.getAllCharacters();
        actions.getAllDetails();
        actions.getAllPlanets();
    }, []);
    console.log(store.characters);
    // let detail = store.details.map(x);
    console.log(store.details);
    return (
         <div className="container mt-5">
            {/* <div className="row">
                <h1 className="text-danger mb-3 p-3">Personajes</h1>
                        <ul className="flex-nowrap d-flex flex-row overflow-scroll list-unstyled gap-1 px-0">
                            {store.characters.map(item => (
                                <li className="col-4 px-0 w-auto my-2">
                                    <CharactersCard key={item.uid} name={item.name} />
                                    
                                </li>
                                ))}
                        </ul>
            </div> */}
            <h1 className="text-danger mb-3">Planets</h1> 
                <div className="row d-flex flex-row mb-3 ">
                    <div className="col-12">
                    <ul className="list-group d-flex flex-row">
                    {store.planets.map(item => (
                    <CharactersCard key={item.id} name={item.name} />
                    ))}
                    </ul>
                    </div>
                </div>
        </div>
        
	);
}
