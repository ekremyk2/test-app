import { action, makeObservable } from 'mobx';
import { IPageStore, PageStoreBase } from '../core/PageStoreBase';
import { _RootStore } from '../Store';

export class IndexStore extends PageStoreBase implements IPageStore {
  public constructor(rootStore: _RootStore) {
    super(rootStore);
    makeObservable(this);
  }
  @action Load = () => {
    this.base.Load();
  };
  @action Reset = () => {
    this.base.Reset();
  };
}
