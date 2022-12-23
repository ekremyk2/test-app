import TextField, { BaseTextFieldProps } from '@mui/material/TextField';
import { observer } from 'mobx-react-lite';
import React, { useRef } from 'react';
import IGetterSetter from '../../helpers/interfaces/IGetterSetter';
import './Textarea.scss';

interface ITextarea extends BaseTextFieldProps {
  title: string;
  bind: IGetterSetter<string>;
  required?: boolean;
  type?: 'text' | 'tel' | 'email' | 'password';
  customRef?: React.Ref<any> | undefined;
}

const Textarea = (props: ITextarea) => {
  const reference = useRef(props.customRef);
  return (
    <div className='textarea-wrapper'>
      <TextField
        multiline
        minRows={4}
        maxRows={4}
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

export default observer(Textarea);
