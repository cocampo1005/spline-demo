import Hero from "../../components/Hero/Hero";
import LightSwitch from "../../components/LightSwitch/LightSwitch";
import Spline from "@splinetool/react-spline";

function Main() {
    return (
        <>
            <Hero />
            <LightSwitch />
            <Spline scene="https://prod.spline.design/bo5jJl9HftOKccWY/scene.splinecode" />
        </>
    );
}

export default Main;
