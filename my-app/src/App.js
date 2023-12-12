import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pre-recorded/Main";
import AddTag from "./components/pre-recorded/AddTag";
import Login from "./components/login/Login";
import Authentication from "./Authentication";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Authentication />}>
            <Route path="/PreRecorded" element={<Main />} />
            <Route path="/AddTag" element={<AddTag />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
