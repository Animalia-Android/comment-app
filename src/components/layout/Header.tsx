// import { useFeedbackItemsContext } from '../../library/hooks';
import { useFeedbackItemsStore } from '../../stores/feebackItemsStore';
import FeedbackForm from '../feedback/FeedbackForm';
import Logo from '../Logo';
import PageHeading from '../PageHeading';
import Pattern from '../Pattern';

export default function Header() {
  // const { handleAddToList } = useFeedbackItemsContext();
  const addItemToList = useFeedbackItemsStore((state) => state.addItemToList);
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={addItemToList} />
    </header>
  );
}
