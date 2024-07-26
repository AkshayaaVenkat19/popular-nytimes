import { useEffect, useState } from 'react';
import { API_URL, PERIOD, API_KEY } from '../../../constants';
import ArticleCard from '../../../components/card';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDetail } from '../../../store/reducer';
import Loader from '../../../components/loader';
import { Article } from '../../../types';
import SubHeader from '../../../components/subHeader';
import ReduxProvider from '../../../components/reduxProvider';

interface StateDataType {
  items: Array<Article>;
  loading: boolean;
  error: unknown;
}

const initState: StateDataType = {
  items: [],
  loading: true,
  error: null,
};

const Articles = () => {
  const url = `${API_URL}${PERIOD}.json?api-key=${API_KEY}`;

  const [data, setData] = useState<StateDataType>(initState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setData({
        ...data,
        loading: false,
        items: json.results,
      });
    } catch (e) {
      console.error(e);
      console.log(e);
      setData({
        items: [],
        loading: false,
        error: e,
      });
    }
  };

  const setArticleData = (article: Article) => {
    dispatch(setDetail(article));
    navigate('/detail');
  };

  if (data.loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (data.error) return <p>Error: API failed</p>;
  return (
    <ReduxProvider>
      <SubHeader content="Most Popular Articles" test="popular" />
      {data.items?.map((article: Article) => {
        return (
          <div
            role="none"
            key={article.id}
            onClick={() => setArticleData(article)}
            data-testid="articleItem"
          >
            <ArticleCard {...article}></ArticleCard>
          </div>
        );
      })}
    </ReduxProvider>
  );
};

export default Articles;
