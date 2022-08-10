import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title}) => {
  return (
    <>
      <Helmet
        defaultTitle="Aniket Kesari, J.D. Ph.D."
        title={title}
        titleTemplate="Aniket Kesari | %s"
      />
    </>
  )
}

export default Head;