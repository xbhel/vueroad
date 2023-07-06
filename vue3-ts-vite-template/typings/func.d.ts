export type Mapper<T, R> = (value: T) => R;
export type Consumer<T> = (value: T) => void;
export type Supplier<T> = () => T;
export type Predicate<T> = (T) => boolean;
