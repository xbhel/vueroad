import { groupby } from '@/utils';

describe('groupby', () => {
  it('should be divided into 2 groups', () => {
    const map = groupby(
      [
        { id: '1', name: 'jack' },
        { id: '2', name: 'tom' },
      ],
      (item) => item.id
    );
    expect(map.size).toBe(2);
  });
});
