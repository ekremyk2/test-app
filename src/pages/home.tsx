import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Header from '../components/helper-components/Header';
import Lorem from '../components/helper-components/Lorem';
import { RootStoreContext } from '../stores/Store';
import { Button } from '@mui/material';

const Home = () => {
  const rootStore = useContext(RootStoreContext);
  const Store = rootStore.Page.HomeStore;

  useEffect(() => {
    Store.Load();
    return () => Store.Reset();
  });
  return (
    <div className='page home'>
      <Header activePageIndex={0} />
      <div className='page-content-wrapper'>
        <div className='content-card'>
          <div className='random-facts-label'>{`Here you can have a random fact, simply by clicking "Random Fact" button.`}</div>
          <div className='random-facts'>
            {Store.randomFacts.map((i) => (
              <div className='fact'>{'- ' + i.fact}</div>
            ))}
          </div>
          <Button
            onClick={() => {
              Store.fetchRandomFact(1);
            }}
          >
            Random Fact
          </Button>
          <Button
            onClick={() => {
              Store.randomFacts = [];
            }}
          >
            Clear Facts
          </Button>
        </div>
        <Lorem />
      </div>
    </div>
  );
};

export default observer(Home);
