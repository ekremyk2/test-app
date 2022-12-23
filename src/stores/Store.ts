import { configure } from "mobx";
import { createContext } from "react";
import { PageStore } from "./PageStore";


configure({enforceActions: 'observed'})

export class _RootStore {
    public Page = new PageStore(this).Stores;

    private static _instance: _RootStore;
    public static Instance (){
        return this._instance || (this._instance = new this());
    }
}
export const RootStore = _RootStore.Instance();

export const RootStoreContext = createContext(RootStore);