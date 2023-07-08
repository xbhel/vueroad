import { chain } from 'lodash';
import { Mapper } from 'typings';

export const groupBy = <T>(
  arr: T[],
  keyMapper: Mapper<T, string>
): Map<string, T[]> => {
  const state = chain(arr).groupBy(keyMapper).toPairs().value();
  return new Map(state);
};
