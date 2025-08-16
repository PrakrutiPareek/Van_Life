import { Link } from "react-router-dom";
import bgImg from "../Images/about-hero.png";

function About() {
  return (
    <div className="about-page">
      <img src={bgImg} className="about-page-hero-img" />
      <div className="info-container">
        <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="sub-info">
          <h5>Your destination is waiting. Your van is ready.</h5>
          <Link to="/vans">Explore our vans</Link>
        </div>
      </div>
    </div>
  );
}

export default About;
