import React from 'react';
import classes from './Set.module.css';

const set = props => (
    <div className={classes.SetContainer}>
        <h1>{props.sets}</h1>
        <h1>{props.reps}</h1>
        <h1>{props.weight}</h1>
    </div>
);

export default set;