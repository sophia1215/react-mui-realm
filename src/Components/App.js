import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises"
import { muscles, exercises } from "../store.js"

class App extends Component {
  state = {
    exercises,
    // category: "arms"
    exercise: {}
  }

  getExercisesByMuscles() {
    // return this.state.exercises.reduce((exercises, exercise) => {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = exercises[muscles] 
          ? [...exercises[muscles], exercise]
          : [exercise]

        return exercises
      }, {})
    )  
  }

  handleCategorySelect = category => {
    this.setState({
      category
    })
  }

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }))
  }

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))
  }

  render() {
    // console.log(this.getExercisesByMuscles())
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state

    return (
      <Fragment>
        <Header 
          muscles = { muscles }
          onExerciseCreate = { this.handleExerciseCreate }
        />

        <Exercises 
          exercise = { exercise }
          category = { category }
          exercises = { exercises }
          onSelect = { this.handleExerciseSelect }
        />

        <Footer 
          category = { category }
          muscles = { muscles }
          onSelect={ this.handleCategorySelect }
        />
      </Fragment>
    );
  }
}

export default App;