import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Acceuil from "./component/Acceuil/Acceuil";
import Client from "./component/Client/Client";
import Contact from "./component/Contact/Contact";
import Propos from "./component/Propos/Propos";
import Service from "./component/Service/Service";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Client" element={<Client />} />
          <Route path="/Propos" element={<Propos />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
