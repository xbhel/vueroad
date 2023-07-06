export {};

declare global {
  // 获取数组元素的类型
  type ArrayElementType<T extends Array<E>> = T[number];

  // 获取对象属性的类型
  type PickPropertyType<T, K extends keyof T> = T[K];

  // 获取 Promise 函数返回值的类型
  type PromiseReturnType<T extends (...args: unknown) => unknown> =
    ReturnType<T> extends Promise<infer R> ? R : ReturnType<T>;

  // 排除 T 中与 U 相同的属性，并将 T 属性的类型置为 never
  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  // 要么是 T 要么是 U
  type XOR<T, U> = (Without<T, U> & U) | (Without<U, T> & T);
}
