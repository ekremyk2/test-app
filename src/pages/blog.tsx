import React from 'react';
import { observer } from 'mobx-react-lite';
import Header from '../components/helper-components/Header';
import Lorem from '../components/helper-components/Lorem';

const Blog = () => {
  return (
    <div className='page blog'>
      <Header activePageIndex={4} />
      <div className='page-content-wrapper'>
        <Lorem />
      </div>
    </div>
  );
};

export default observer(Blog);
