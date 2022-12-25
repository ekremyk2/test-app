import React, { useContext } from 'react';
import LoginForm from '../components/page-components/LoginForm';
import { RootStoreContext } from '../stores/Store';

export default () => {
  const rootStore = useContext(RootStoreContext);
  const Store = rootStore.Page.LoginStore;

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
