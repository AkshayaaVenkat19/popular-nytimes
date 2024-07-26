import Articles from './articles';
import SidePanel from './articles/sidePanel';

const List = () => {
  return (
    <div className="grid grid-cols-3 gap-2 min-h-[70vh]">
      <div className="col-span-2 py-4 pr-3">
        <Articles />
      </div>
      <div className="border-l border-gray-400 py-4 pl-3">
        <SidePanel />
      </div>
    </div>
  );
};

export default List;
