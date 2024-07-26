import React from 'react';

const ErrorPage = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden">
      <img
        src="/404-status-code.png"
        alt="pageNotFound"
        className="background-cover"
      />
    </div>
  );
};

export default ErrorPage;
