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
  const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]

  return (
    <div>
      <h1><Header course={course}/></h1>
      <p>
        <Content name={parts[0].name} numberofexercises={parts[0].exercises}/>
      </p>
      <p>
        <Content name={parts[1].name }numberofexercises={parts[1].exercises}/>
      </p>
      <p>
        <Content name={parts[2].name} numberofexercises={parts[2].exercises}/>
      </p>
      <p>Number of exercises <Total ex1={parts[0].exercises} ex2={parts[1].exercises} ex3={parts[2].exercises}/></p>
    </div>
  )
}

export default App