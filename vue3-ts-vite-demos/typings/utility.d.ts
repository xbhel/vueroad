export {};

declare global {
  type ArrayElementType<T extends Array<E>> = T[number];
  type PickPropertyType<T, K extends keyof T> = T[K];
}
