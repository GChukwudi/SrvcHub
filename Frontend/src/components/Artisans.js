import React from "react";
import ArtisanDetails from "./ArtisanDetails";
import './Artisans-err.css';


function Artisans({ artisans }) {
    return (
        <div className="artisans">
            {artisans.map(artisan => (
                <ArtisanDetails key={artisan.id} artisan={artisan} />
            ))}
        </div>
    );
}

export default Artisans;