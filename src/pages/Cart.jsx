import Navbar from "../components/Navbar";

export default function Cart() {
  return (
    <>
      <Navbar />
      <main className="page">
        <h1>Cart</h1>
        <div>
          <p>added items</p>
          <ol></ol>
        </div>
      </main>
    </>
  );
}
