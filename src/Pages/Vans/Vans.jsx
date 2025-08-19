import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vandetails = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={`/vans/${van.id}`}
        aria-label={`view details for ${van.name}, priced at $${van.price} per day`}
      >
        <img src={van.imageUrl} alt={`image of ${van.name}`} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));
  return (
    <div className="vans-page">
      <h1>Explore our van options</h1>
      <div className="van-option-wrapper">
        <div className="van-options">
          <Link>Simple</Link>
          <Link>Luxury</Link>
          <Link>Rugged</Link>
        </div>
        <button>Clear filters</button>
      </div>
      <div className="vans-wrapper">{vandetails}</div>
    </div>
  );
}

export default Vans;
