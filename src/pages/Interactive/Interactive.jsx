import BabyYoda from "../../components/BabyYoda/BabyYoda";
import Clock from "../../components/Clock/Clock";
import Keyboard from "../../components/Keyboard/Keyboard";

function Interactive() {
    return (
        <>
            <h1 className="heading">Interactive</h1>
            <BabyYoda />
            <Clock />
            <Keyboard />
        </>
    );
}

export default Interactive;
