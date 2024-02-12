import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Interactive from "./pages/Interactive/Interactive";
import Glow from "./pages/Glow/Glow";
import Games from "./pages/Games/Games";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/interactive" element={<Interactive />} />
                <Route path="/glow" element={<Glow />} />
                <Route path="/games" element={<Games />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
