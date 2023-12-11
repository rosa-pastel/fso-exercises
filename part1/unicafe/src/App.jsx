/* eslint-disable react/prop-types */
import { useState } from "react";
const Button = ({ name, handleClick }) => {
  return <button onClick={handleClick}>{name}</button>;
};
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all > 0)
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good}></StatisticLine>
          <StatisticLine text="bad" value={bad}></StatisticLine>
          <StatisticLine text="neutral" value={neutral}></StatisticLine>
          <StatisticLine text="all" value={all}></StatisticLine>
          <StatisticLine text="average" value={average}></StatisticLine>
          <StatisticLine text="positive" value={positive}></StatisticLine>
        </tbody>
      </table>
    );
  else return <p>No feedback given</p>;
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        name="good"
        handleClick={() => {
          setAverage((good + 1 - bad) / (all + 1));
          setAll(all + 1);
          setPositive((good + 1) / (good + 1 + bad + neutral));
          setGood(good + 1);
        }}
      ></Button>
      <Button
        name="neutral"
        handleClick={() => {
          setAverage((good - bad) / (all + 1));
          setAll(all + 1);
          setPositive(good / (good + bad + neutral + 1));
          setNeutral(neutral + 1);
        }}
      ></Button>
      <Button
        name="bad"
        handleClick={() => {
          setAverage((good - bad - 1) / (all + 1));
          setAll(all + 1);
          setPositive(good / (good + bad + 1 + neutral));
          setBad(bad + 1);
        }}
      ></Button>
      <h1>statistics</h1>
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        all={all}
        average={average}
        positive={positive}
      ></Statistics>
    </div>
  );
};

export default App;
