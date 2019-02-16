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

  render() {   

    let showAddExercise = null;

    if (this.state.addExercise) {
      showAddExercise = <ExerciseInput />;
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
