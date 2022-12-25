import React from 'react';
import { observer } from 'mobx-react-lite';
import Header from '../components/helper-components/Header';
import Lorem from '../components/helper-components/Lorem';

const Services = () => {
  return (
    <div className='page services'>
      <Header activePageIndex={1} />
      <div className='page-content-wrapper'>
        <Lorem />
      </div>
    </div>
  );
};

export default observer(Services);
