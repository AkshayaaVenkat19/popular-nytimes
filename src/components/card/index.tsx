import React from 'react';
import { Media } from '../../types';

interface CardProps {
  title: string;
  abstract: string;
  media: Array<Media>;
  asset_id: number;
}

const ArticleCard: React.FC<CardProps> = React.memo(
  ({ title, abstract, media, asset_id }) => {
    const imgURL =
      media?.length > 0 ? media[0]?.['media-metadata'][2]?.url : null;
    const figCaption = media.length > 0 ? media[0]?.copyright : '';

    return imgURL ? (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer border-b border-gray-400 pb-0.5 mb-2">
        <div className="py-4">
          <div className="text-lg font-bold mb-2 font-serif leading-6">
            {title}
          </div>
          <div className="text-sm mb-2 font-serif text-gray-600 leading-4">
            {abstract}
          </div>
        </div>
        <div className="md:col-span-1 lg:col-span-2 py-4 pl-3">
          <figure>
            <img src={imgURL} alt={`${asset_id}`} className="w-full" />
            <figcaption className="text-[0.6rem] text-gray-500 float-end ">
              {figCaption}
            </figcaption>
          </figure>
        </div>
      </div>
    ) : (
      <div className="grid grid-cols-1 gap-5 cursor-pointer border-b border-gray-400 pb-0.5 mb-2">
        <div className="py-4">
          <div className="text-lg font-bold mb-2 font-serif leading-6">
            {title}
          </div>
          <div className="text-xs text-gray-500 uppercase">5 min read</div>
        </div>
      </div>
    );
  },
);

export default ArticleCard;
