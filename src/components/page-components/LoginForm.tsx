import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useContext, useEffect } from 'react';
import { Controls } from '../../helpers/functions/Controls';
import IGetterSetter from '../../helpers/interfaces/IGetterSetter';
import Textbox from '../helper-components/Textbox';

const LoginForm = ({
  form,
  onSubmit,
}: {
  form: { UserName: IGetterSetter<string>; PassWord: IGetterSetter<string>; RememberMe: IGetterSetter<boolean> };
  onSubmit: (event: React.FormEvent<HTMLDivElement>) => void;
}) => {
  const [userNameRef, setUserNameRef] = useState<HTMLInputElement | null>(null);
  const [passwordRef, setPasswordRef] = useState<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
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
      <div className='login-container' onSubmit={handleSubmit}>
        <form action='#'>
          <div className='login-header'>
            <p>{`Hoş Geldiniz!`}</p>
            <p>{`Lütfen Giriş Yapın`}</p>
          </div>
          <div className='login-input-field'>
            <Textbox
              type='text'
              customRef={(current) => setUserNameRef(current)}
              placeholder='Kullanıcı Adınız...'
              title={'Username'}
              bind={form.UserName}
            />
          </div>
          <div className='login-input-field'>
            <Textbox
              type='password'
              customRef={(current) => setPasswordRef(current)}
              placeholder='********'
              title={'Password'}
              bind={form.PassWord}
            />
          </div>
          <div className='login-remember-me'>
            <input
              type='checkbox'
              id='rememberMe'
              checked={form.RememberMe.get}
              onChange={(e) => form.RememberMe.set(e.target.checked)}
            />
            <label htmlFor='rememberMe'>{`Beni Hatırla`}</label>
          </div>
          <div className='login-submit'>
            <input type='submit' value={`Giriş`} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default observer(LoginForm);
