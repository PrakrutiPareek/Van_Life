import React, { Suspense, useEffect, useState } from "react";
import {
  useParams,
  Link,
  Outlet,
  NavLink,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getVan } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ params, request }) {
  await requireAuth(request);
  return defer({ currentVan: getVan(params.id) });
}

function HostVanDetail() {
  const dataPromise = useLoaderData();

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  function renderHostVanElement(currentVan) {
    return (
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
        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photos
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Pricing
          </NavLink>
        </nav>
        <Outlet context={{ currentVan }} />
      </div>
    );
  }

  return (
    <section className="van-detail-container">
      <Link to=".." relative="path" className="back-button">
        <span>Back to all vans</span>
      </Link>
      <Suspense fallback={<h2>Loading van...</h2>}>
        <Await resolve={dataPromise.currentVan}>{renderHostVanElement}</Await>
      </Suspense>
    </section>
  );
}

export default HostVanDetail;
