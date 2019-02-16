import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import SetInput from './SetInput/SetInput';
import Set from './Set/Set';

import classes from './ExerciseInput.module.css';

class ExerciseInput extends Component {

    state = {
        named: false,
        exerciseName: '',
        addSets: false,
        setsPerformed: [],
        currSets: {
            id: null,
            sets: null,
            reps: null,
            weight: null
        }    
    }

    updateNameHandler = (event) => {
        this.setState({exerciseName: event.target.value});
    }

    addNameHandler = () => {
        this.setState({named: true});
    }
    
    addSetHandler = () => {
        if(this.state.named && this.state.setsPerformed.length > 0) {

        }
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
            return null;
        })
        this.setState({setsPerformed: setsPerformed});
    }

    submitSetHandler = () => {
        if(!this.state.currSets.sets || !this.state.currSets.reps || !this.state.currSets.weight) {
            alert('Please fill out all fields!');
        } else {
            let setKey = uuidv1();                
            let newSets = {...this.state.currSets};
            newSets.id = setKey;
            let mergeSets = [...this.state.setsPerformed]
            mergeSets.push(newSets);
            this.setState({setsPerformed: [...mergeSets]});
        }
        
        console.log(this.state);        
    }

    render () {

        let setsAdded = null;
        let addSetInput = null;
        let buttonSetsText = "Add Sets";
        let buttonNameText = "Add Name";
        let exerciseHeader = (
            <form>
                <input type="text" onChange={this.updateNameHandler} id="exerciseHeader"></input>            
                <button type="button" onClick={this.addNameHandler}>{buttonNameText}</button>
            </form>
        );

        if(this.state.named) {
            exerciseHeader = <h1>{this.state.exerciseName}</h1>
        }        
    
        if (this.state.named && this.state.addSets) {
          addSetInput = (
            <SetInput 
                submit={this.submitSetHandler} 
                change={this.updateSetHandler}
                sets={this.state.currSets.sets}
                reps={this.state.currSets.reps}
                weight={this.state.currSets.weight}/>
          );
          buttonSetsText = "Finished";
          // console.log(this.state);
        }

        if (this.state.setsPerformed.length > 0) {
            setsAdded = this.state.setsPerformed.map(curr => (            
                <Set
                    key={curr.id} 
                    sets={curr.sets}
                    reps={curr.reps}
                    weight={curr.weight}
                    remove={() => this.removeSetHandler(curr.id)}/>
            ));
        }

        return (
            <div className={classes.ExerciseInputBox}>
                {exerciseHeader}
                {setsAdded}
                {addSetInput}
                <button onClick={this.addSetHandler}>{buttonSetsText}</button>                
            </div>
        );
    }

}

export default ExerciseInput;