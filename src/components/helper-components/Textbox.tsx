import { TextField, BaseTextFieldProps } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { ClassAttributes, createRef, InputHTMLAttributes, useRef } from 'react';
import { Controls } from '../../helpers/functions/Controls';
import IGetterSetter from '../../helpers/interfaces/IGetterSetter';
import './Textbox.scss';

interface ITextbox extends BaseTextFieldProps {
  title: string;
  bind: IGetterSetter<string>;
  required?: boolean;
  type?: 'text' | 'tel' | 'email' | 'password';
  customRef?: React.Ref<any> | undefined;
}

const Textbox = (props: ITextbox) => {
  const reference = useRef(props.customRef);

  return (
    <div className='textbox-wrapper'>
      <TextField
        // variant='standard'
        label={props.title}
        required={props.required || false}
        inputRef={reference.current}
        value={props.bind.get}
        onChange={(e) => {
          props.bind.set(e.target.value);
        }}
      />
    </div>
  );
};

export default observer(Textbox);
