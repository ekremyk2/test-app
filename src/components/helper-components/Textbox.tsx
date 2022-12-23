import { observer } from 'mobx-react-lite';
import React, { ClassAttributes, createRef, InputHTMLAttributes, useRef } from 'react';
import { Controls } from '../../helpers/functions/Controls';
import IGetterSetter from '../../helpers/interfaces/IGetterSetter';

interface ITextbox extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  bind: IGetterSetter<string>;
  required?: boolean;
  type?: 'text' | 'tel' | 'email' | 'password';
  customRef?: React.LegacyRef<HTMLInputElement> | undefined;
}

const Textbox = (props: ITextbox) => {
  const reference = useRef(props.customRef);

  return (
    <div className='textbox-wrapper'>
      {Controls.IsStringEmptyNullOrUndefined(props.placeholder) ? (
        <div className='textbox-title-wrapper'>
          <label className='textbox-title'>{props.title}</label>
          {props.required ? <i className='required-star'>*</i> : <></>}
        </div>
      ) : (
        <></>
      )}
      <input
        type={props.type || 'text'}
        value={props.bind.get}
        onChange={(e) => {
          props.bind.set(e.target.value);
        }}
        ref={reference}
        required={props.required || false}
        {...{ props }}
      />
    </div>
  );
};

export default observer(Textbox);
