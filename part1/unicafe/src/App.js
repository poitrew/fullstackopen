import { calculateNewValue } from '@testing-library/user-event/dist/utils'
import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;

  if (all < 1) {
    return (
      <p>No feedback given</p>
    )
  }

  const calculations = {
    avg: all > 0 ? (props.good - props.bad) / all : 0,
    pos: all > 0 ? props.good / all : 0,
  }

  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={props.good} />
        <StatisticLine text='neutral' value={props.neutral} />
        <StatisticLine text='bad' value={props.bad} />
        <StatisticLine text='all' value={all} />
        <StatisticLine text='avg' value={calculations.avg} />
        <StatisticLine text='positive' value={calculations.pos * 100 + '%'} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 
  const handleClick = (type) => {
    switch(type) {
      case 'good':
        setGood(good + 1)
        break
      case 'neutral':
        setNeutral(neutral + 1)
        break
      case 'bad':
        setBad(bad + 1)
        break
      default:
        console.log('Unknown type')
    }
  } 

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => handleClick('good')} text='good'/>
      <Button handleClick={() => handleClick('neutral')} text='neutral'/>
      <Button handleClick={() => handleClick('bad')} text='bad'/>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App