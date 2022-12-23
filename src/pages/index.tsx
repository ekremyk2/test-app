import React, { useContext, useEffect } from 'react';
import { RootStoreContext } from '../stores/Store';

export default () => {
  const rootStore = useContext(RootStoreContext);
  const Store = rootStore.Page.IndexStore;

  useEffect(() => {
    Store.Load();
    return () => Store.Reset();
  });
  return <div />;
};
