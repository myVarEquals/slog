import React from 'react';

const set = props => (
    <div>
        <h1>{props.sets}</h1>
        <h1>{props.reps}</h1>
        <h1>{props.weight}</h1>
    </div>
);

export default set;