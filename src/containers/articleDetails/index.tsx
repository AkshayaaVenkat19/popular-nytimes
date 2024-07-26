import React from 'react';
import Header from '../../components/header';
import DetailPage from './detail';
import Footer from '../../components/footer';

const ArticleDetail = () => {
  return (
    <div className="m-5">
      <Header />
      <DetailPage />
      <Footer />
    </div>
  );
};

export default ArticleDetail;
