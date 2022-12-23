import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Header from '../components/helper-components/Header';
import ContactForm from '../components/helper-components/ContactForm';
import { RootStoreContext } from '../stores/Store';

const Contact = () => {
  const rootStore = useContext(RootStoreContext);
  const Store = rootStore.Page.ContactStore;

  useEffect(() => {
    Store.Load();
    return () => Store.Reset();
  });

  return (
    <div className='page-wrapper'>
      <Header activePageIndex={5} />
      <ContactForm
        onSubmit={Store.OnSubmit}
        form={{
          CompanyName: Store.Form.CompanyName,
          NameSurname: Store.Form.NameSurname,
          CompanyType: Store.Form.CompanyType,
          EMail: Store.Form.EMail,
          Message: Store.Form.Message,
          PhoneNumber: Store.Form.PhoneNumber,
        }}
      />
    </div>
  );
};

export default observer(Contact);
