import React from 'react';
import classes from './SetInput.module.css';


console.log(classes);

const setInput = props => (
    <form onSubmit={props.submit} className={classes.SetInputForm}>
        <i className="far fa-check-circle"></i>
        <label>Sets</label>
        <input type="text" className={classes.InputStyle} onChange={props.change} value={props.sets} id="sets"></input>
        <label>Reps</label>
        <input type="text" className={classes.InputStyle} onChange={props.change} value={props.reps} id="reps"></input>
        <label>Weight</label>
        <input type="text" className={classes.InputStyle} onChange={props.change} value={props.weight} id="weight"></input>
        <button id="add">Add</button>
    </form>
);



export default setInput;