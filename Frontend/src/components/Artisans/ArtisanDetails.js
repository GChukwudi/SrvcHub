import React from "react";
import './ArtisanDetails.css';

function ArtisanDetails({ artisan }) {
    return (
        <div className="artisan-detail">
            <h3>{artisan.name}</h3>
            <p>{artisan.bio}</p>
            <p>{artisan.category}</p>
            <p>{artisan.location}</p>
            <p>{artisan.email}</p>
            <p>{artisan.contact}</p>
        </div>
    );
}

export default ArtisanDetails;
