export {};

declare global {
  // 获取数组元素的类型
  type ArrayElementType<T extends Array<E>> = T[number];
  // 获取对象属性的类型
  type PickPropertyType<T, K extends keyof T> = T[K];
  // 获取 Promise 函数返回值的类型
  type PromiseReturnType<T extends (...args: unknown) => unknown> =
    ReturnType<T> extends Promise<infer R> ? R : ReturnType<T>;
}
