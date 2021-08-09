import React from 'react';
import { Link } from 'react-router-dom';
import './herolist.css';

export const HeroCard = ({ 
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div className="card animate__animated animate__zoomIn" style={{maxWidth: 540}}>
           <div className="row no-gutters grid-item">
                <div className="col-md-4 image">
                    <img 
                    src = {`./assets/heroes/${id}.jpg`} 
                    className="card-img" 
                    alt = {superhero} 
                    />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{superhero}</h5>
                    <p className="card-text">{alter_ego}</p>
                    {
                        (alter_ego !== characters)
                        && <p className="card-text">{characters}</p>
                    }

                    <p className="card-text">
                        <small className="text-muted">{first_appearance}</small>
                    </p>

                    <Link to= {`./hero/${id}`} >
                        Más...
                    </Link>
                </div>
           </div>
        </div>
    )
}
