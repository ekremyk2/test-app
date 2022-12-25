import { LoginManager } from '../../helpers/LoginManager';
import { _RootStore } from '../Store';
import { StoreBase } from './StoreBase';

export interface IPageStore {
  Load?: () => Promise<any> | void | undefined;
  Reset?: () => void;
  readonly PageTitle: string;
}

export class PageStoreBase extends StoreBase implements IPageStore {
  public readonly PageTitle: string = 'Page title';

  public constructor(rootStore: _RootStore) {
    super(rootStore);
  }

  protected base: { Load: () => Promise<void>; Reset: () => Promise<void> } = {
    Load: async () => {
      debugger;
      if (LoginManager.IsLoginNeeded()) {
        LoginManager.LogOut();
      }
    },
    Reset: async () => {},
  };
}
