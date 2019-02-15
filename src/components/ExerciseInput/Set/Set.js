import React from 'react';
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome'
import classes from './Set.module.css';

const set = props => (
    <div className={classes.SetContainer}>
        <h1>{props.sets}</h1>
        <h1>{props.reps}</h1>
        <h1>{props.weight}</h1>
        <FontAwesomeIcon icon="ban" onClick={props.remove}/>
    </div>
);

export default set;