import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Controls } from '../../helpers/functions/Controls';
import IGetterSetter from '../../helpers/interfaces/IGetterSetter';
import Textbox from '../helper-components/Textbox';

const LoginForm = ({
  form,
  onSubmit,
}: {
  form: { UserName: IGetterSetter<string>; PassWord: IGetterSetter<string>; RememberMe: IGetterSetter<boolean> };
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}) => {
  const [userNameRef, setUserNameRef] = useState<HTMLInputElement | null>(null);
  const [passwordRef, setPasswordRef] = useState<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (Controls.IsStringEmptyNullOrUndefined(form.UserName.get) && userNameRef) {
      userNameRef.focus();
    } else if (Controls.IsStringEmptyNullOrUndefined(form.PassWord.get) && passwordRef) {
      passwordRef.focus();
    } else {
      onSubmit(event);
    }
  };

  return (
    <div className='login-wrapper'>
      <div className='login-container'>
        <form action='#' onSubmit={handleSubmit}>
          <div className='login-header'>
            <p>{`Hoş Geldiniz!`}</p>
            <p>{`Lütfen Giriş Yapın`}</p>
          </div>
          <div className='login-input-field'>
            <Textbox
              type='text'
              customRef={(current) => setUserNameRef(current)}
              title={'Username'}
              bind={form.UserName}
            />
          </div>
          <div className='login-input-field'>
            <Textbox
              type='password'
              customRef={(current) => setPasswordRef(current)}
              title={'Password'}
              bind={form.PassWord}
            />
          </div>
          <div className='login-remember-me'>
            <FormControlLabel
              control={
                <Checkbox checked={form.RememberMe.get} onChange={(e) => form.RememberMe.set(e.target.checked)} />
              }
              label={`Beni Hatırla`}
              labelPlacement='end'
            />
          </div>
          <div className='login-submit'>
            <Button variant='contained' type='submit'>{`Giriş`}</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default observer(LoginForm);
