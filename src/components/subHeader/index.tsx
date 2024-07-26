interface SubHeaderType {
  content: string;
  test?: string;
}
const SubHeader: React.FC<SubHeaderType> = ({ content, test }) => {
  return (
    <h4 className="text-md text-gray-600" data-testid={test}>
      {content}
    </h4>
  );
};

export default SubHeader;
