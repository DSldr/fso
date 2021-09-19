import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>
      {props.course}
      </h1>
    </div>
  )
}


//{props.parts[0].name} {props.parts[0].exercises}
const Content = (props) => {

  let partsArray = props.parts

  return (
    <>
      <p>
        {partsArray[0].name} {partsArray[0].exercises}
      </p>
      <p>
      {partsArray[1].name} {partsArray[1].exercises}
      </p>
      <p>
      {partsArray[2].name} {partsArray[2].exercises}
      </p>
    </>
  )
}


const Total = (props) => {

  let partsArray = props.parts
  let sumResult = partsArray[0].exercises + partsArray[1].exercises + partsArray[2].exercises
  return (
    <>
      <p>Number of exercises {sumResult}</p>
    </>
  )
}

const App = () => {

  const course = {
  name: 'Half Stack application development',
  parts: [
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
}
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}
//
export default App