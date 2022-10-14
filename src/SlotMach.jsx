import React from "react";


const SlotM = (props) => {
    // let x = '🙂';
    // let y = '🙂';
    // let z = '🙂';

    // let x = props.x;
    // let y = props.y;
    // let z = props.z;
// these lines can be written as --->

    let {x, y, z} = props;
    if ((props.x === props.y) && (props.y === props.z)) {
        return (
            <>
                <div className="slot_inner">
                    <h1>
                        {x} {y} {z}
                    </h1>
                    <h1> This is matching. </h1>
                    <hr />
                </div>
            </>
        );
    }
    else {
        return (
            <>
                <div className="slot_inner">
                    <h1>
                        {x} {y} {z}
                    </h1>
                    <h1> This is not matching. </h1>
                </div>
            </>
        );
    }
};

export default SlotM;