import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="greeting">
          <h1>Need Cash?</h1>
          <Link to="/apply">Apply now!</Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
