import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="intro-page">
      <h1>You got the travel plans, we got the travel vans.</h1>
      <p>
        Add adventure to your life by joining the #vanlife movement.
        <br />
        Rent the perfect van to make your perfect road trip.
      </p>
      <Link to="/vans">Find your van</Link>
    </main>
  );
}
export default Home;
