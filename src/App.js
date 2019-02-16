import React, { Component } from 'react';
import ExerciseInput from './components/ExerciseInput/ExerciseInput';
import './App.css';

class App extends Component {  

  state = {
    exercisesCompleted: [],
    addExercise: false
  }

  addExerciseHandler = () => {
    this.state.addExercise ? this.setState({addExercise: false}) : this.setState({addExercise: true});
  }

  submitExerciseHandler = (exercise) => {
    console.log(exercise);
  }

  render() {   

    let showAddExercise = null;

    if (this.state.addExercise) {
      showAddExercise = <ExerciseInput
                           submit={this.submitExerciseHandler}
                           sets={0}
                           reps={0}
                           weight={0}/>;
    }

    return (
      <div className="App">
        {showAddExercise}
        <button onClick={this.addExerciseHandler}>Add Exercise</button>
      </div>
    );
  }
}

export default App;
