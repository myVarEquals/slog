import React, { Component } from 'react';
import SetInput from './SetInput/SetInput';
import Set from './Set/Set';

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

      updateSetHandler = event => {

        let oldState = {
            ...this.state.currSets
        }

        oldState[event.target.id] = event.target.value;
        this.setState({currSets: {...oldState}});    
            
        // console.log(this.state);
      }
    
      submitSetHandler = () => {

        let newSets = {...this.state.currSets};
        let mergeSets = [...this.state.setsPerformed]
        mergeSets.push(newSets);
        this.setState({setsPerformed: [...mergeSets]});
        console.log(this.state);        
      }

    render () {

        let setsAdded = null;
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
          // console.log(this.state);
        }

        if (this.state.setsPerformed.length > 0) {
            setsAdded = this.state.setsPerformed.map(curr => {
                return <Set 
                    sets={curr.sets}
                    reps={curr.reps}
                    weight={curr.weight}/>
            });
        }

        return (
            <div className={classes.ExerciseInputBox}>
                {setsAdded}
                {addSetInput}
                <button onClick={this.addSetHandler}>{buttonText}</button>                
            </div>
        );
    }

}

export default ExerciseInput;