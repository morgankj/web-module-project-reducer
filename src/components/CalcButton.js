import React from 'react';
// DO NOT MODIFY THIS FILE!
// DO NOT MODIFY THIS FILE!
// DO NOT MODIFY THIS FILE!

const CalcButton = (props) => {
    const { value, onClick = (e)=>{}, size = 4} = props;

    return(<div className={`col-xs-${size}`}>
        <button value={value} type="button" onClick={(e)=>{onClick(e)}} className="btn">{value}</button>
    </div>);
}

export default CalcButton;