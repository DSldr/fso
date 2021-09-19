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
      {props.exercise} {props.numberofexercises}
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

  return (
    <div>
      <h1><Header course="Half Stack application development"/></h1>
      <p>
        <Content exercise="Fundamentals of React" numberofexercises="10"/>
      </p>
      <p>
      <Content exercise="Fundamentals of React" numberofexercises="7"/>
      </p>
      <p>
       <Content exercise="Fundamentals of React" numberofexercises="14"/>
      </p>
      <p>Number of exercises <Total ex1="10" ex2="7" ex3="14"/></p>
    </div>
  )
}

export default App