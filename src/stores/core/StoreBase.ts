import { _RootStore } from "../Store";

export class StoreBase {
    protected rootStore: _RootStore;

    public constructor(rootStore: _RootStore){
        this.rootStore = rootStore;
    }
}