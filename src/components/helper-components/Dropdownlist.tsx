import { BaseTextFieldProps, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useRef, useState} from 'react';
import { v4 } from 'uuid';
import { Controls } from '../../helpers/functions/Controls';
import IGetterSetter from '../../helpers/interfaces/IGetterSetter';
import './Dropdownlist.scss';

interface IDropDownItem {
  text: string;
  value: string;
}
interface IDropDownList extends BaseTextFieldProps {
  title: string;
  bind: IGetterSetter<string>;
  required?: boolean;
  data: IDropDownItem[];
  type?: 'text' | 'tel' | 'email' | 'password';
  customRef?: React.Ref<any> | undefined;
}
const Dropdownlist = (props: IDropDownList) => {
  const reference = useRef(props.customRef);
  return (
    <div className='dropdownlist-wrapper'>
      <TextField
        select
        label={props.title}
        required={props.required || false}
        inputRef={reference.current}
        value={props.bind.get}
        onChange={(e) => {
          props.bind.set(e.target.value);
        }}
      >
        <MenuItem value=''>{`Select...`}</MenuItem>        
        {props.data?.map((item) => (
          <MenuItem value={item.value}>{item.text}</MenuItem>
        ))}
        </TextField>
    </div>
  );
};

export default observer(Dropdownlist);
