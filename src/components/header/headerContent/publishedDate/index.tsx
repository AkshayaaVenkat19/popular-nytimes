import { getTodayDetails } from '../../../../utils';

const PublishedDate = () => {
  const today = getTodayDetails();
  return <div className="text-sm font-sans">{today}</div>;
};

export default PublishedDate;
