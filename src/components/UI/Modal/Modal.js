import React from 'react';
import Overlay from '../Overlay/Overlay'
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome';
import classes from './Modal.module.css';

const modal = props => ( 
        <>
            <div className={classes.ModalBox}>        
                {props.children}                
            </div>
            <Overlay />
        </>
);



export default modal;