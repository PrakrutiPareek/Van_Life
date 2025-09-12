import { Await, defer, Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";
import { Suspense } from "react";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
}

function renderHostVanElement(vans) {
  const HostVanElements = vans.map((van) => (
    <Link to={van.id} key={van.id} className="host-van-link-wrapper">
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));
  return (
    <div className="host-vans-list">
      <section>{HostVanElements}</section>
    </div>
  );
}

function HostVans() {
  const dataPromise = useLoaderData();

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <Suspense fallback={<h2 className="suspense-msg">Loading vans...</h2>}>
        <Await resolve={dataPromise.vans}>{renderHostVanElement}</Await>
      </Suspense>
    </section>
  );
}

export default HostVans;
