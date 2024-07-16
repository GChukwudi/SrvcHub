import React from "react";
import Artisans from "../components/Artisans/Artisans";
import './Artisans.css';

function Artisans() {
    const [artisans, setArtisans] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8000/api/artisans')
            .then(response => response.json())
            .then(data => setArtisans(data));
    }, []);

    return (
        <div className="artisans">
            <h1>Artisans</h1>
            <Artisans artisans={artisans} />
        </div>
    );
}

export default Artisans;