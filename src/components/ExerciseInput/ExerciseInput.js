import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import SetInput from './SetInput/SetInput';
import Set from './Set/Set';

import classes from './ExerciseInput.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ExerciseInput extends Component {

    state = {
        id: this.props.id,
        named: this.props.named,
        exerciseName: this.props.name,
        addSets: false,
        setsPerformed: this.props.setsPerformed,
        currSets: {
            id: null,
            sets: this.props.sets,
            reps: this.props.reps,
            weight: this.props.weight
        },
        edit: this.props.edit    
    }

    updateNameHandler = (event) => {
        this.setState({exerciseName: event.target.value});
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

    submitExerciseHandler = () => {
        this.setState({edit: false});
        this.props.submit(this.state);
    }

    render () {

        let setsAdded = null;
        let addSetInput = null;
        let submitExercise = null;
        let editExercise = null;
        let removeExercise = null;

        let exerciseHeaderInput = null;
        let exerciseHeader = <h1>{this.state.exerciseName}</h1>;

        if(this.state.edit) {
            exerciseHeaderInput = (
                <form>
                    <input type="text" onChange={this.updateNameHandler} id="exerciseHeader" value={this.state.exerciseName}></input>
                </form>
            );

            addSetInput = (
                <SetInput 
                    submit={this.submitSetHandler} 
                    change={this.updateSetHandler}
                    sets={this.state.currSets.sets}
                    reps={this.state.currSets.reps}
                    weight={this.state.currSets.weight}
                    edit={this.state.edit}/>
            );
            submitExercise = <button onClick={this.submitExerciseHandler}>Finished</button>;
            if (this.state.id) {                
                removeExercise = <FontAwesomeIcon icon="ban" className={classes.RemoveBtn} onClick={() => this.props.remove(this.state.id)}/>;
            }
        } else {                          
            editExercise = <FontAwesomeIcon icon="pencil-alt" className={classes.EditBtn} onClick={() => this.setState({edit: true})}/>
        }       

        if (this.state.setsPerformed.length > 0) {
            setsAdded = this.state.setsPerformed.map(curr => {            
                return <Set
                    key={curr.id} 
                    sets={curr.sets}
                    reps={curr.reps}
                    weight={curr.weight}
                    edit={this.state.edit}
                    remove={() => this.removeSetHandler(curr.id)}/>
            });
        }

        if (this.state.edit) {
        }

        return (
            <div className={classes.ExerciseInputBox}>
                {removeExercise}
                {editExercise}
                {exerciseHeader}
                {exerciseHeaderInput}
                {setsAdded}
                {addSetInput}
                {submitExercise}               
            </div>
        );
    }

}

export default ExerciseInput;