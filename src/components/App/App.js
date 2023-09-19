import React, { useEffect, useState } from 'react';
import { FeedbackOptions } from 'components/Feedback/Feedback';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { Container } from './AppStyled';
import { GlobalStyle } from 'components/GlobalStyles';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleIncrement = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const calculateTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, value) => acc + value, 0);
  };

  const total = calculateTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return total ? ((feedback.good * 100) / total).toFixed(1) : 0;
  };

  useEffect(() => {
    document.title = `Total feedback: ${total}`;
  }, [total]);

  return (
    <Container>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleIncrement}
        />
      </Section>

      <Section title={'Statistics'}>
        {total > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            percent={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
      <GlobalStyle />
    </Container>
  );
};

export default App;