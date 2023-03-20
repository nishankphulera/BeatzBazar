import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/common/Home";

import CreateBeat from "./components/admin/CreateBeat";
import "bootstrap/dist/css/bootstrap.min.css";

import Service from "./components/user/Service";
import BeatsPage from "./components/user/BeatsPage";
import Welcome from "./components/common/Welcome";
function App() {
  return (
    <div
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

        // backgroundPosition: "center",
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <BrowserRouter>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
          className="pages"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Welcome" element={<Welcome />} />

            <Route path="/CreateBeat" element={<CreateBeat />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/BeatsPage" element={<BeatsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
