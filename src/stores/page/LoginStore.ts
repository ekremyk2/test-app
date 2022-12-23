import { navigate } from 'gatsby';
import { observable, action, makeObservable } from 'mobx';
import IGetterSetter from '../../helpers/interfaces/IGetterSetter';
import { IPageStore, PageStoreBase } from '../core/PageStoreBase';
import { _RootStore } from '../Store';

export class LoginStore extends PageStoreBase implements IPageStore {
  public constructor(rootStore: _RootStore) {
    super(rootStore);
    makeObservable(this);
  }

  @observable isLoggedin: IGetterSetter<boolean> = {
    get: false,
    set: (input) => {
      this.isLoggedin.get = input || false;
    },
  };

  @observable LoginForm: {
    UserName: IGetterSetter<string>;
    PassWord: IGetterSetter<string>;
    RememberMe: IGetterSetter<boolean>;
  } = {
    UserName: {
      get: '',
      set: (input) => {
        this.LoginForm.UserName.get = input || '';
      },
    },
    PassWord: {
      get: '',
      set: (input) => {
        this.LoginForm.PassWord.get = input || '';
      },
    },
    RememberMe: {
      get: false,
      set: (input) => {
        this.LoginForm.RememberMe.get = input || false;
      },
    },
  };

  @action OnSubmit: (event: React.FormEvent<HTMLFormElement>) => void = (event) => {
    if (this.LoginForm.UserName.get !== 'innovance' || this.LoginForm.PassWord.get !== '123')
      alert('Yanlış Kullanıcı Adı veya Şifre');
    else {
      this.isLoggedin.set(true);
      navigate('/home');
    }
  };

  @action Load = () => {
    this.base.Load();
  };
  @action Reset = () => {
    this.base.Reset();
  };
}
