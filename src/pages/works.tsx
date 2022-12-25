import React from 'react';
import { observer } from 'mobx-react-lite';
import Header from '../components/helper-components/Header';
import Lorem from '../components/helper-components/Lorem';

const Works = () => {
  return (
    <div className='page work'>
      <Header activePageIndex={2} />
      <div className='page-content-wrapper'>
        <Lorem />
      </div>
    </div>
  );
};

export default observer(Works);
