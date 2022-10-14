import React from "react";
import { Simulate } from "react-dom/test-utils";
import SlotM from "./SlotMach";



const App = () => {
    return (
        <>

            <h1 className="heading_style"> 🎰Welcome to Slot machine game🎰</h1>
            <div className="slotmc">
                <div className="slotmachine">
                    <SlotM x='🙂' y='🙂' z='🙂' />
                    <SlotM x='🎄🎏' y='🎠' z='😎' />
                    <hr />
                    <SlotM x='🍎' y='🍕' z='🍎' />
                    <hr />
                    <SlotM x='🍄' y='🍄' z='🍄' />
                </div>
            </div>
        </>
    );
};

export default App;