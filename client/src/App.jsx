import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";

function App({ element }) {
  return (
    <>
      <Navbar />
      <div className="mt-10">{element}</div>
      <Footer />
    </>
  );
}

export default App;
