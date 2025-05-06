import FeedbackItem from './FeedbackItem';
import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';
import { useFeedbackItemsContext } from '../../library/hooks';

export default function FeedbackList() {
  const { isLoading, errorMessage, filteredFeedbackItems } =
    useFeedbackItemsContext();
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}

      {errorMessage && <ErrorMessage error={errorMessage} />}

      {filteredFeedbackItems.map((feedbackItem) => {
        return (
          <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
        );
      })}
    </ol>
  );
}
