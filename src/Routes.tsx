import { Routes, Route } from 'react-router-dom';
import HomePage from './containers/home';
import ArticleDetail from './containers/articleDetails';
import ErrorPage from './containers/errorPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail" element={<ArticleDetail />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
