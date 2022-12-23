import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import LoginForm from '../components/page-components/LoginForm';
import { Controls } from '../helpers/functions/Controls';
import { RootStoreContext } from '../stores/Store';

export default () => {
  const rootStore = useContext(RootStoreContext);
  const Store = rootStore.Page.LoginStore;

  useEffect(() => {
    Store.Load();
    return () => Store.Reset();
  });

  return (
    <div className='page login'>
      <LoginForm
        form={{
          UserName: Store.LoginForm.UserName,
          PassWord: Store.LoginForm.PassWord,
          RememberMe: Store.LoginForm.RememberMe,
        }}
        onSubmit={Store.OnSubmit}
      />
    </div>
  );
};
