import React from "react";
import ArtisanList from "../components/Artisans/Artisans";
import './Artisans.css';

function ArtisanPage() {
    const [artisans, setArtisans] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8000/api/artisans')
            .then(response => response.json())
            .then(data => setArtisans(data));
    }, []);

    return (
        <div className="artisans">
            <h1>Artisans</h1>
            <ArtisanList artisans={artisans} />
        </div>
    );
}

export default ArtisanPage;