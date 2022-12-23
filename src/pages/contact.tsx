import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Header from '../components/helper-components/Header';
import ContactForm from '../components/page-components/ContactForm';
import { RootStoreContext } from '../stores/Store';

const Contact = () => {
  const rootStore = useContext(RootStoreContext);
  const Store = rootStore.Page.ContactStore;

  useEffect(() => {
    Store.Load();
    return () => Store.Reset();
  });

  return (
    <div className='page contact'>
      <Header activePageIndex={5} />
      <div className='page-content-wrapper'>
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
    </div>
  );
};

export default observer(Contact);
