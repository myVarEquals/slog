import React from 'react';
import Overlay from '../Overlay/Overlay'
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome';
import classes from './Modal.module.css';

const modal = props => (
    <>
        <Overlay />
        <div className={classes.ModalBox}>        
            <p>Confirm removal</p>
            <FontAwesomeIcon icon="check-circle" onClick={props.confirm} />
            <FontAwesomeIcon icon="times-circle" onClick={props.cancel} />
        </div>
    </>
);



export default modal;