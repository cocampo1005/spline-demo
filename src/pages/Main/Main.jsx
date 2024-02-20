import Hero from "../../components/Hero/Hero";
import LightSwitch from "../../components/LightSwitch/LightSwitch";
import Spline from "@splinetool/react-spline";

function Main() {
    return (
        <>
            <Hero />
            <Spline scene="https://prod.spline.design/lu8sHaP7Uu8et83R/scene.splinecode" />
            <LightSwitch />
            <Spline scene="https://prod.spline.design/bo5jJl9HftOKccWY/scene.splinecode" />
        </>
    );
}

export default Main;
