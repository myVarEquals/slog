import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExerciseInput from './components/ExerciseInput/ExerciseInput';
import './App.css';

// import Login from './components/Login/Login';

class App extends Component {  

  state = {
    exercisesCompleted: []
  }

  removeExerciseHandler = index => {

  }

  render() {   

    let exercisesArray = null;
    let showAddExercise = null;

    if (this.props.exerciseArray.length > 0) {
      exercisesArray = this.props.exerciseArray.map((curr, index) => {
        return <ExerciseInput
                  key={curr.id} 
                  id={curr.id}
                  submit={this.submitExerciseHandler}
                  remove={(index) => this.props.onSpliceExerciseArray(index)}
                  name={curr.name}
                  named={true}
                  setsPerformed={curr.sets}
                  sets={null}
                  reps={null}
                  weight={null}
                  edit={false}/>
      });
    }

    if (this.props.addExer) {
      showAddExercise = (
        <ExerciseInput
          submit={(exercise) => this.props.onConcatExerciseArray(exercise)}
          remove={(index) => this.props.onSpliceExerciseArray(index)}
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
        <button onClick={this.props.onAddExercise}>Add Exercise</button>
      </div>
    );

    // return (
    //   <Login />
    // );
  }
}

const mapStateToProps = state => {
  return {
    addExer: state.addExercise,
    exerciseArray: state.exerciseArray
  }  
}

const mapDispatchToProps = dispatch => {
  return {
    onAddExercise: () => dispatch({type: 'ADD_EXERCISE'}),
    onConcatExerciseArray: (exercise) => dispatch({type: 'CONCAT_EXERCISE_ARRAY', payload: {...exercise}}),
    onSpliceExerciseArray: (id) => dispatch({type: 'SPLICE_EXERCISE_ARRAY', payload: {id}})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
