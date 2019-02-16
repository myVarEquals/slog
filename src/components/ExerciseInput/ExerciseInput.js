import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import SetInput from './SetInput/SetInput';
import Set from './Set/Set';

import classes from './ExerciseInput.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ExerciseInput extends Component {

    state = {
        named: false,
        exerciseName: '',
        addSets: false,
        setsPerformed: [],
        currSets: {
            id: null,
            sets: this.props.sets,
            reps: this.props.reps,
            weight: this.props.weight
        },
        edit: true    
    }

    updateNameHandler = (event) => {
        this.setState({exerciseName: event.target.value});
    }

    addNameHandler = () => {
        this.setState({named: true});
    }
    
    addSetHandler = () => {
        this.state.addSets ? this.setState({addSets: false}) : this.setState({addSets: true});
    }

    updateSetHandler = event => {

        let oldState = {
            ...this.state.currSets
        }

        oldState[event.target.id] = event.target.value;
        this.setState({currSets: {...oldState}});    
            
        // console.log(this.state);
    }

    removeSetHandler = setKey => {
        console.log(setKey);
        const setsPerformed = [...this.state.setsPerformed];
        setsPerformed.map((curr, index) => {
            if(curr.id === setKey) {
                setsPerformed.splice(index, 1);
            }
        })
        this.setState({setsPerformed: setsPerformed});
    }

    submitSetHandler = () => {
        let setKey = uuidv1();                
        let newSets = {...this.state.currSets};
        newSets.id = setKey;
        let mergeSets = [...this.state.setsPerformed]
        mergeSets.push(newSets);
        this.setState({setsPerformed: [...mergeSets]});
        console.log(this.state);        
    }

    render () {

        let setsAdded = null;
        let addSetInput = null;
        let submitExercise = null;
        let editExercise = null;

        let buttonNameText = "Add Name";

        let exerciseHeader = (
            <form>
                <input type="text" onChange={this.updateNameHandler} id="exerciseHeader"></input>            
                <button type="button" onClick={this.addNameHandler}>{buttonNameText}</button>
            </form>
        );

        if(this.state.named) {
            exerciseHeader = <h1>{this.state.exerciseName}</h1>
            addSetInput = (
                <SetInput 
                    submit={this.submitSetHandler} 
                    change={this.updateSetHandler}
                    sets={this.state.currSets.sets}
                    reps={this.state.currSets.reps}
                    weight={this.state.currSets.weight}
                    edit={this.state.edit}/>
              );
              submitExercise = <button onClick={() => this.props.submit(this.state)}>Finished</button>;
        }        

        if (this.state.setsPerformed.length > 0) {
            setsAdded = this.state.setsPerformed.map(curr => {            
                return <Set
                    key={curr.id} 
                    sets={curr.sets}
                    reps={curr.reps}
                    weight={curr.weight}
                    remove={() => this.removeSetHandler(curr.id)}/>
            });
        }

        if (!this.state.edit) {
            editExercise = <FontAwesomeIcon icon="pencil-alt" className={classes.EditBtn}/>
        }

        return (
            <div className={classes.ExerciseInputBox}>
                {editExercise}
                {exerciseHeader}
                {setsAdded}
                {addSetInput}
                {submitExercise}               
            </div>
        );
    }

}

export default ExerciseInput;