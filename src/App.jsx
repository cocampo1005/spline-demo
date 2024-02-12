import "./App.css";
import BabyYoda from "./components/BabyYoda/BabyYoda";
import Clock from "./components/Clock/Clock";
import Clones from "./components/Clones/Clones";
import GlowOrb from "./components/GlowOrb/GlowOrb";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Keyboard from "./components/Keyboard/Keyboard";
import LightSwitch from "./components/LightSwitch/LightSwitch";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <LightSwitch />
            <GlowOrb />
            <Clones />
            <BabyYoda />
            <Clock />
            <Keyboard />
        </>
    );
}

export default App;
