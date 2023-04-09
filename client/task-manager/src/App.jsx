import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import FullNav from "./components/FullNav";
import HomePage from "./components/HomePage";
import Members from "./components/Members";
import History from "./components/History";
import CreateNewTask from "./components/CreateNewTask";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FullNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/members" element={<Members />} />
        <Route path="/new" element={<CreateNewTask />} />

        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
}

export default App;
