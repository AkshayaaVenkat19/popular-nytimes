import React from 'react';
import HeaderDescription from './description';
import PublishedDate from './publishedDate';

const Content = React.memo(() => {
  return (
    <div className="hidden lg:block">
      <PublishedDate />
      <HeaderDescription />
    </div>
  );
});

export default Content;
