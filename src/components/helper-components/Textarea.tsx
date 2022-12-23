import { observer } from 'mobx-react-lite';
import React from 'react';
import IGetterSetter from '../../helpers/interfaces/IGetterSetter';

const Textarea = ({ title, bind, required }: { title: string; bind: IGetterSetter<string>; required?: boolean }) => {
  return (
    <div className='textarea-wrapper'>
      <div className='textarea-title-wrapper'>
        <label className='textarea-title'>{title}</label>
        {required ? <i className='required-star'>*</i> : <></>}
      </div>
      <textarea
        value={bind.get}
        onChange={(e) => {
          bind.set(e.target.value);
        }}
        {...{ required }}
      />
    </div>
  );
};

export default observer(Textarea);
