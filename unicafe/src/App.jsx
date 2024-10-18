import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({ good, bad, neutral }) => {
  if (good === 0 && bad === 0 && neutral === 0){
    return (
      <>
      <h2> Statistics </h2>
      No feedback given.
      </>
    )
  }
  return (
    <>
      <h2> Statistics</h2>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>Average: {(good - bad) / (good + neutral + bad)}</div>
      <div>Positive: {(good / (good + neutral + bad)) * 100} %</div>
    </>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='Good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='Bad' />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App