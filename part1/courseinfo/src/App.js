import React from 'react'

const Header = (props) => {
  return (
    <div>
      {props.course}
    </div>
  )
}



const Content = (props) => {
  return (
    <>
      {props.name} {props.numberofexercises}
    </>
  )
}



const Total = (props) => {
  return (
    <>
      {parseInt(props.ex1) + parseInt(props.ex2) + parseInt(props.ex3)}
    </>
  )
}


const App = () => {

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <h1><Header course={course}/></h1>
      <p>
        <Content name={part1.name} numberofexercises={part1.exercises}/>
      </p>
      <p>
        <Content name={part2.name} numberofexercises={part2.exercises}/>
      </p>
      <p>
        <Content name={part3.name} numberofexercises={part3.exercises}/>
      </p>
      <p>Number of exercises <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises}/></p>
    </div>
  )
}

export default App