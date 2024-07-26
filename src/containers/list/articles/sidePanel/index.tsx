import SidePanelCard from '../../../../components/panelCard';
import SubHeader from '../../../../components/subHeader';
import dummyData from '../../../../mocks/dummyData.json'
interface SidePanelProps {
  id: number;
  author: string;
  title: string;
  mins: number;
  imgURL: string;
}

const SidePanel = () => {
  return (
    <>
      <SubHeader content="Opinion" />
      {dummyData.map((data: SidePanelProps) => {
        return <SidePanelCard key={data.id} {...data}></SidePanelCard>;
      })}
    </>
  );
};

export default SidePanel;
