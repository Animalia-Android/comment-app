import { useFeedbackItemsStore } from '../../stores/feebackItemsStore';
import HashtagItem from './HashtagItem';
// import { useFeedbackItemsContext } from '../../library/hooks';

export default function HashtagList() {
  // const { companyList, handleSelectCompany } = useFeedbackItemsContext();
  const companyList = useFeedbackItemsStore((state) => state.getCompanyList());
  const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);

  return (
    <ul className="hashtags">
      <li>
        <button onClick={() => selectCompany('')}>All</button>
      </li>
      {companyList.map((company) => (
        <HashtagItem
          key={company}
          company={company}
          onSelectCompany={selectCompany}
        />
      ))}
    </ul>
  );
}
