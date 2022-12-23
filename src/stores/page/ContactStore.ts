import { navigate } from 'gatsby';
import { observable, action, makeObservable } from 'mobx';
import IGetterSetter from '../../helpers/interfaces/IGetterSetter';
import { IPageStore, PageStoreBase } from '../core/PageStoreBase';
import { _RootStore } from '../Store';

export class ContactStore extends PageStoreBase implements IPageStore {
  public constructor(rootStore: _RootStore) {
    super(rootStore);
    makeObservable(this);
  }

  @observable Form: {
    CompanyName: IGetterSetter<string>;
    NameSurname: IGetterSetter<string>;
    CompanyType: IGetterSetter<string>;
    EMail: IGetterSetter<string>;
    Message: IGetterSetter<string>;
    PhoneNumber: IGetterSetter<string>;
  } = {
    CompanyName: {
      get: '',
      set: (input) => {
        this.Form.CompanyName.get = input || '';
      },
    },
    NameSurname: {
      get: '',
      set: (input) => {
        this.Form.NameSurname.get = input || '';
      },
    },
    CompanyType: {
      get: '',
      set: (input) => {
        this.Form.CompanyType.get = input || '';
      },
    },
    EMail: {
      get: '',
      set: (input) => {
        this.Form.EMail.get = input || '';
      },
    },
    Message: {
      get: '',
      set: (input) => {
        this.Form.Message.get = input || '';
      },
    },
    PhoneNumber: {
      get: '',
      set: (input) => {
        this.Form.PhoneNumber.get = input || '';
      },
    },
  };

  @action OnSubmit: (event: React.FormEvent<HTMLDivElement>) => void = (event) => {};

  @action Load = () => {
    this.base.Load();
  };
  @action Reset = () => {
    this.base.Reset();
  };
}
