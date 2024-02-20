import Clones from "../../components/Clones/Clones";
import GlowOrb from "../../components/GlowOrb/GlowOrb";
import Spline from '@splinetool/react-spline';

function Glow() {
    return (
        <>
            <h1 className="heading">Glow</h1>
            <GlowOrb />
            <Spline scene="https://prod.spline.design/zE2JRTUCoHI6eOgj/scene.splinecode" />
            <Clones />
        </>
    );
}

export default Glow;
