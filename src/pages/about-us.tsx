import React from 'react';
import { observer } from 'mobx-react-lite';
import Header from '../components/helper-components/Header';

const AboutUs = () => {
  return (
    <div className='page about-us'>
      <Header activePageIndex={3} />
      <div className='page-content-wrapper'>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quos, numquam similique cupiditate sequi
          aperiam eaque fugiat eveniet impedit laudantium, ea earum nulla doloremque esse repellat eum? Nostrum, nihil
          culpa.
        </div>
      </div>
    </div>
  );
};

export default observer(AboutUs);
