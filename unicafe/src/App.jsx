import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticsLine = ({ text, value }) => {
  return (
    <div>{text}: {value}</div>
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
      <StatisticsLine text="Good" value={good}/>
      <StatisticsLine text="Neutral" value={neutral}/>
      <StatisticsLine text="Bad" value={bad}/>
      <StatisticsLine text="Average" value={(good - bad) / (good + neutral + bad)}/>
      <StatisticsLine text="Positive" value={(good / (good+neutral+bad))*100}/>
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