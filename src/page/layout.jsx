import { Outlet } from "react-router-dom";
import Footer from "../components/common/footer.jsx";
import Navbar from "../components/common/navbar.jsx";
function App() {
  return (
    <div className="relative flex flex-col min-h-screen max-w-screen">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
