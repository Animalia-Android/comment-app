import { useEffect, useState } from 'react';
import FeedbackItem from './FeedbackItem';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchFeedbackItems = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'
        );

        if (!response.ok) {
          throw new Error();
          setIsLoading(false);
        }

        const data = await response.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setErrorMessage('Something went wrong. Please try again later.');
      }
      setIsLoading(false);
    };

    fetchFeedbackItems();

    //
    // setIsLoading(true);
    // fetch(
    //   'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'
    // )
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error();
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log('Data:', data.feedbacks);
    //     const items = data.feedbacks;
    //     setFeedbackItems(items);
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     //network error, not 2xx response, or JSON parsing error
    //     setErrorMessage('Something went wrong');
    //     setIsLoading(false);
    //   });
  }, []);

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}

      {errorMessage && <ErrorMessage error={errorMessage} />}

      {feedbackItems.map((feedbackItem) => {
        return (
          <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
        );
      })}
    </ol>
  );
}
