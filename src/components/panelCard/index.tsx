interface SidePanelCardProps {
  author: string;
  title: string;
  mins: number;
  imgURL: string;
}

const SidePanelCard: React.FC<SidePanelCardProps> = ({
  author,
  title,
  mins,
  imgURL,
}) => {
  return (
    <div className="grid grid-cols-3 gap-2 mb-1 border-b border-gray-400 py-1 cursor-pointer ">
      <div className="col-span-2 py-4 pr-3">
        <div className="uppercase text-sm text-gray-500 mb-0.5">{author}</div>
        <div className=" text-md font-semibold font-serif mb-0.5">{title}</div>
        <div className="uppercase text-[0.6rem] text-gray-400">
          {mins} mins read
        </div>
      </div>
      <div className="m-auto">
        <img
          src={imgURL}
          className="rounded"
          width={50}
          height={50}
          alt="img"
        />
      </div>
    </div>
  );
};

export default SidePanelCard;
