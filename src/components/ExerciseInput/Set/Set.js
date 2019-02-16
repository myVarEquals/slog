import React from 'react';
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome'
import classes from './Set.module.css';

const set = props => (
    <div className={classes.SetContainer}>
        <h2>{props.sets}</h2>
        <h2>x</h2>
        <h2>{props.reps}</h2>
        <h2>x</h2>
        <h2>{props.weight}</h2>
        <FontAwesomeIcon icon="ban" onClick={props.remove}/>
    </div>
);

export default set;