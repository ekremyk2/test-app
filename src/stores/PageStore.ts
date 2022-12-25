import { StoreBase } from './core/StoreBase';
import { ContactStore } from './page/ContactStore';
import { IndexStore } from './page/IndexStore';
import { LoginStore } from './page/LoginStore';
import { HomeStore } from './page/HomeStore';

interface IStores {
  [key: string]: StoreBase;
}

export interface IStoreContainer {
  Stores: IStores;
}

export class PageStore extends StoreBase implements IStoreContainer {
  public Stores = {
    LoginStore: new LoginStore(this.rootStore),
    IndexStore: new IndexStore(this.rootStore),
    ContactStore: new ContactStore(this.rootStore),
    HomeStore: new HomeStore(this.rootStore),
  };
}
