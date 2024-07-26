import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from '../types';

const initialState: Article = {
  uri: '',
  url: '',
  id: 0,
  asset_id: 0,
  source: '',
  published_date: '',
  updated: '',
  section: '',
  subsection: '',
  nytdsection: '',
  adx_keywords: '',
  column: '',
  byline: '',
  type: '',
  title: '',
  abstract: '',
  des_facet: [],
  org_facet: [],
  per_facet: [],
  geo_facet: [],
  media: [],
  eta_id: 0,
};

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    setDetail(state, action: PayloadAction<Article>) {
      return action.payload;
    },
  },
});

export const { setDetail } = detailSlice.actions;

export default detailSlice.reducer;
