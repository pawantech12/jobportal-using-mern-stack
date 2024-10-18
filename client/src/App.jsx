import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";

import "react-toastify/dist/ReactToastify.css";
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
