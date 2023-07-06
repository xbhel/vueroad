import { chain } from 'lodash';
import { Mapper } from 'typings';

export const groupby = <T>(
  arr: T[],
  mapper: Mapper<T, string>
): Map<string, T[]> => {
  const state = chain(arr).groupBy(mapper).toPairs().value();
  return new Map(state);
};
