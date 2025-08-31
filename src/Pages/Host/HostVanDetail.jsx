import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";

function HostVanDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);
  return (
    <>
      {currentVan ? (
        <section className="van-detail-container">
          <Link to=".." relative="path" className="back-button">
            <span>Back to all vans</span>
          </Link>

          <div className="host-van-detail-layout-container">
            <div className="host-van-detail">
              <img src={currentVan.imageUrl} />
              <div className="host-van-detail-info-text">
                <i className={`van-type van-type-${currentVan.type}`}>
                  {currentVan.type}
                </i>
                <h3>{currentVan.name}</h3>
                <h4>${currentVan.price}/day</h4>
              </div>
            </div>
            <Outlet />
          </div>
        </section>
      ) : (
        <h1>Loading..</h1>
      )}
    </>
  );
}

export default HostVanDetail;
