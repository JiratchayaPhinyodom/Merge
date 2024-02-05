// merge.test.ts
import { merge } from '../merge';

describe('merge function', () => {
    it('should merge sorted arrays correctly', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [2, 4, 6];
        const collection3 = [6, 4, 2];
        const result = merge(collection1, collection2, collection3);
        expect(result).toEqual(expect.arrayContaining([6, 6, 5, 4, 4, 3, 2, 2, 1]));
      });
      

  it('should handle empty arrays', () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const collection3: number[] = [];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual([]);
  });
  
  it('should handle arrays of different lengths', () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6];
    const collection3 = [6, 4];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expect.arrayContaining([6, 6, 5, 4, 4, 3, 2, 1]));
  });

  it('should handle arrays of different lengths and empty arrays.', () => {
    const collection1 = [1, 3, 5];
    const collection2: number[] = [];
    const collection3 = [6, 4];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expect.arrayContaining([6, 4, 5, 3, 1]));
  });
  
  
});
