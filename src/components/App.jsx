import style from './App.module.css';
import React from 'react';
import { useState } from 'react';
import { FeedBackOptions } from 'components/FeedBackButtons/FeedBackButtons';
import { Statistics } from 'components/StatisticSection/StatisticSection';
import { Notification } from 'components/Notification/Notification';
import { SectionTitle } from './SectionTitle/SectionTitle';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const keys = ['good', 'bad', 'neutral'];

  const handleClick = event => {
    const { name } = event.target;
    // console.log(event.currentTarget);
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  // console.log(this.state);
  const total = good + neutral + bad;
  const average = Math.floor((good / total) * 100);
  // console.log('average', average);
  return (
    <div className={style.component}>
      <SectionTitle title={'Please live your feedback'} />
      <>
        <FeedBackOptions name={keys} handleClick={handleClick} />
      </>
      <SectionTitle title={'Statistics'} />
      {total > 0 ? (
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={total}
          average={average}
        />
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </div>
  );
}
