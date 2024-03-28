import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/common/Home";

import CreateBeat from "./components/admin/CreateBeat";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplaySpecificBeatList from "./components/user/DisplaySpecifcBeatList";
import Service from "./components/user/Service";
import BeatsPage from "./components/user/BeatsPage";
import Welcome from "./components/common/Welcome";

function App() {
  return (
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
          <Route
            path="/DisplaySpecificBeatList"
            element={<DisplaySpecificBeatList />}
          ></Route>
          <Route path="/CreateBeat" element={<CreateBeat />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/BeatsPage" element={<BeatsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
