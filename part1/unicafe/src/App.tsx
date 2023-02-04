import React, {useState} from 'react';
import StatisticLine from './StatisticLine';
type StatisticsProps = {
  good: number;
  neutral: number;
  bad: number;
}
const Statistics = ({good, neutral, bad}: StatisticsProps) => {
  if(good === 0 && neutral === 0 && bad === 0) {
    return (<div>No feedback given</div>)
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <tr>
            <StatisticLine text="Good" value={good} />
          </tr>
          <tr>
            <StatisticLine text="Neutral" value={neutral} />
          </tr>
          <tr>
            <StatisticLine text="Bad" value={bad} />
          </tr>
          <tr>
            <StatisticLine text="All" value={good + neutral + bad} />
          </tr>
          <tr>
            <StatisticLine
              text="Average"
              value={(good - bad) / (good + neutral + bad)}
            />
          </tr>
          <tr>
            <StatisticLine
              text="Positive"
              value={(good / (good + neutral + bad)) * 100}
            />
          </tr>
        </tbody>
      </table>
    </div>
  ); 
  };
function App() {
   const [good, setGood] = useState<number>(0);
   const [neutral, setNeutral] = useState<number>(0);
   const [bad, setBad] = useState<number>(0);
  return (
    <div className="App">
        
        <h1>Give Feedback</h1>
        <button onClick={() => setGood(good + 1)}>Good</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>
        <Statistics good={good} neutral={neutral} bad={bad} />
        

    </div>
  );
}

export default App;
