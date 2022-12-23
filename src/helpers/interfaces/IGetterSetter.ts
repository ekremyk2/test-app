export default interface IGetterSetter<T, K = T> {
    get: T| undefined,
    set: (input?: K | undefined | null) => void;
}