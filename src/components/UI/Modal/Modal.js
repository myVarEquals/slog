import React from 'react';
import Overlay from '../Overlay/Overlay'
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome';
import classes from './Modal.module.css';

const modal = props => ( 
        <>
            <div className={classes.ModalBox}>        
                <p>Are you sure?</p>
                <FontAwesomeIcon icon="check-circle" onClick={props.confirm} className={classes.CheckCircle} />
                <FontAwesomeIcon icon="times-circle" onClick={props.cancel} className={classes.TimesCircle} />            
                
            </div>
            <Overlay />
        </>
);



export default modal;