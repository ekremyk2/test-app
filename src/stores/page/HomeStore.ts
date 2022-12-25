import { observable, action, makeObservable } from 'mobx';
import { IPageStore, PageStoreBase } from '../core/PageStoreBase';
import { _RootStore } from '../Store';

interface IRandomFact {
  fact: string;
}
export class HomeStore extends PageStoreBase implements IPageStore {
  public constructor(rootStore: _RootStore) {
    super(rootStore);
    makeObservable(this);
  }

  private readonly randomFactApi: string = 'https://api.api-ninjas.com/v1/facts';

  //Very insecure way, I know.
  private readonly Headers = { 'X-Api-Key': 'tx1+ywHcWUqXEWqNG4ANvg==iS1bfD2mfOvMFcPC' };

  @observable randomFacts: IRandomFact[] = [];

  @action fetchRandomFact = (limit: number) => {
    fetch(this.randomFactApi + '?limit=' + limit, { headers: this.Headers })
      .then((response) => {
        return response.json();
      })
      .then((resultData) => {
        resultData.forEach((data: IRandomFact) => {
          this.randomFacts.push(data);
        });
      });
  };

  @action Load = () => {
    this.base.Load();
  };
  @action Reset = () => {
    this.base.Reset();
  };
}
