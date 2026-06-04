import Navbar from "../components/Navbar";
import getProducts from "../services/api";

export default function Shop() {
  const (products, setProducts) = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);
  return (
    <>
      <Navbar />
      <main className="page">
        <h1>Shop</h1>
      </main>
      <getProducts />
    </>
  );
}
