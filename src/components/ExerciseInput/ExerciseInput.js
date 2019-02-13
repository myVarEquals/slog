import React, { Component } from 'react';
import SetInput from './SetInput/SetInput';

import classes from './ExerciseInput.module.css';

class ExerciseInput extends Component {

    state = {
        addSets: false,
        setsPerformed: [],
        currSets: {
            sets: '',
            reps: '',
            weight: ''
        }    
      }
    
      addSetHandler = () => {
        this.state.addSets ? this.setState({addSets: false}) : this.setState({addSets: true});
      }

      updateSetHandler = (event) => {

        let oldState = {
            ...this.state.currSets
        }

        oldState[event.target.id] = event.target.value;
        this.setState({currSets: {oldState}})    
            
        console.log(this.state);
      }
    
      submitSetHandler = (event) => {

        console.log(event.target);
        
      }

    render () {

        let addSetInput = null;
        let buttonText = "Add Sets";
    
        if (this.state.addSets) {
          addSetInput = (
            <SetInput 
                submit={this.submitSetHandler} 
                change={this.updateSetHandler}
                sets={this.state.currSets.sets}
                reps={this.state.currSets.reps}
                weight={this.state.currSets.weight}/>
          );
          buttonText = "Finished";
        }

        return (
            <div className={classes.ExerciseInputBox}>
                {addSetInput}
                <button onClick={this.addSetHandler}>{buttonText}</button>                
            </div>
        );
    }

}

export default ExerciseInput;