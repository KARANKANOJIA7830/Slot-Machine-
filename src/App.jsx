import React from "react";
import { Simulate } from "react-dom/test-utils";
import SlotM from "./SlotMach";



const App = () => {
    return (
        <>

            <h1 className="heading_style"> π°Welcome to Slot machine gameπ°</h1>
            <div className="slotmc">
                <div className="slotmachine">
                    <SlotM x='π' y='π' z='π' />
                    <SlotM x='ππ' y='π ' z='π' />
                    <hr />
                    <SlotM x='π' y='π' z='π' />
                    <hr />
                    <SlotM x='π' y='π' z='π' />
                </div>
            </div>
        </>
    );
};

export default App;