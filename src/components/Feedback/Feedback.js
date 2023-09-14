import PropTypes from 'prop-types';
import { Container, FeedbackButton } from './FeedbackStyled';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container>
      {options.map(option => (
        <FeedbackButton
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeedbackButton>
      ))}
    </Container>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
