export interface Article {
  uri: string;
  url: string;
  id: number;
  asset_id: number;
  source: string;
  published_date: string;
  updated: string;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string;
  column: string;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet: Array<string>;
  org_facet: Array<string>;
  per_facet: Array<string>;
  geo_facet: Array<string>;
  media: Array<Media>;
  eta_id: number;
}

export interface Media {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  'media-metadata': Array<MediaMetaData>;
}

export interface MediaMetaData {
  url: string;
  format: string;
  height: number;
  width: number;
}
