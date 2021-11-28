import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div>
        <h2>Hello again</h2>

        <h1>Need Cash?</h1>
        <Link to="/apply">Apply now!</Link>
      </div>
    </section>
  );
}

export default Home;
