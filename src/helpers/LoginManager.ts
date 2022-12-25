import { navigate } from 'gatsby';

const defaultLoginNeededAction = () => {
  navigate('/login');
};

class _LoginManager {
  private _HasLoggedIn: boolean = false;

  public LoginSuccess = () => {
    this._HasLoggedIn = true;
  };

  public LoginFailed = () => {
    this._HasLoggedIn = false;
  };

  public IsLoginNeeded = () => {
    return !this._HasLoggedIn;
  };

  public LogOut = () => {
    this._HasLoggedIn = false;
    defaultLoginNeededAction();
  };

  private static _instance: _LoginManager;

  public static Instance() {
    return this._instance || (this._instance = new this());
  }
}
export const LoginManager = _LoginManager.Instance();
