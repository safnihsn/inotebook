import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NotesState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <div style={{ height: 100 }} className="mt-3">
            {alert && <Alert alert={alert} />}
          </div>
          <div className="">
            <Routes>
              <Route path="/" element={<div className="container"> <Home showAlert={showAlert} />  </div> } />
              <Route path="/about" element={<><About /> <Footer /></>}/>
              <Route path="/login" element={<Login showAlert={showAlert} />} />
              
              <Route
                path="/signup"
                element={<Signup showAlert={showAlert} />}
              />
              
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
