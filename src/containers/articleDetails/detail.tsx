import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const DetailPage = () => {
  const data = useSelector((state: RootState) => state.detail);

  const imgURL = data ? data?.media[0]?.['media-metadata'][2]?.url : null;
  const figCaption = data?.media[0]?.caption;

  return (
    <div className="mt-10 text-center lg:px-40 md:px-10 min-h-[80vh] mb-40">
      <div
        className="text-3xl italic font-semibold font-sans mb-3"
        data-testid="articleDetail"
      >
        {data.title}
      </div>
      <div className="text-xl font-sans mb-20" data-testid="articleSubHeader">
        {data.abstract}
      </div>
      {imgURL && (
        <figure>
          <img src={imgURL} alt={`${data.asset_id}`} className="w-full" />
          <figcaption className="text-xs text-gray-500 float-end mb-3">
            {figCaption}
          </figcaption>
        </figure>
      )}
    </div>
  );
};

export default DetailPage;
