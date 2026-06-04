import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home">
        <div className="home-container">
          <h1>Ethio E-shopping</h1>
          <p>Welcome to our online store!</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </section>
    </>
  );
}
