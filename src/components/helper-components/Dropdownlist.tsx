import { observer } from 'mobx-react-lite';
import React from 'react';
import IGetterSetter from '../../helpers/interfaces/IGetterSetter';

interface IDropDownItem {
  text: string;
  value: string;
}
const Dropdownlist = ({
  title,
  bind,
  data,
  required,
}: {
  title: string;
  bind: IGetterSetter<string>;
  data?: IDropDownItem[];
  required?: boolean;
}) => {
  return (
    <div className='dropdownlist-wrapper'>
      <div className='dropdownlist-title-wrapper'>
        <label className='dropdownlist-title'>{title}</label>
        {required ? <i className='required-star'>*</i> : <></>}
      </div>
      <select
        value={bind.get}
        onChange={(e) => {
          bind.set(e.target.value);
        }}
        {...{ required }}
      >
        <option value=''>{`Select...`}</option>
        {data?.map((item) => (
          <option value={item.value}>{item.text}</option>
        ))}
      </select>
    </div>
  );
};

export default observer(Dropdownlist);
