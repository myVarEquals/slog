import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import ExerciseInput from './components/ExerciseInput/ExerciseInput';
import './App.css';

class App extends Component {  

  state = {
    exercisesCompleted: [],
    addExercise: false,
    activeEdit: false
  }

  addExerciseHandler = () => {
    this.state.addExercise ? this.setState({addExercise: false}) : this.setState({addExercise: true});
  }

  submitExerciseHandler = (exercise) => {

    let isUnique = true;
    console.log(exercise);

    this.state.exercisesCompleted.map(curr => {      
      console.log(curr.id);
      console.log(exercise.id)
      if (curr.id === exercise.id) {
        isUnique = false;
      }
    });
        
    if (isUnique) {

      let newExerciseInput = {
        id: uuidv1(),
        name: exercise.exerciseName,
        sets: [
          ...exercise.setsPerformed
        ]
      }

      let mergeExercises = [
        ...this.state.exercisesCompleted
      ]
      mergeExercises.push(newExerciseInput);
      this.setState({exercisesCompleted: mergeExercises});
             
    } 
    this.setState({addExercise: false})
  }

  render() {   

    let exercisesArray = null;
    let showAddExercise = null;

    if (this.state.exercisesCompleted.length > 0) {
      exercisesArray = this.state.exercisesCompleted.map(curr => {
        return <ExerciseInput
                  key={curr.id} 
                  id={curr.id}
                  submit={this.submitExerciseHandler}
                  name={curr.name}
                  named={true}
                  setsPerformed={curr.sets}
                  sets={null}
                  reps={null}
                  weight={null}
                  edit={false}/>
      });
    }

    if (this.state.addExercise) {
      showAddExercise = (
        <ExerciseInput
          submit={this.submitExerciseHandler}
          name=''
          named={false}
          setsPerformed={[]}
          sets={0}
          reps={0}
          weight={0}
          edit={true}/>);
    }

    return (
      <div className="App">
        {exercisesArray}
        {showAddExercise}
        <button onClick={this.addExerciseHandler}>Add Exercise</button>
      </div>
    );
  }
}

export default App;
