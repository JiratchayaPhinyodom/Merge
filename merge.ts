// merge.ts

export function merge(
    collection1: number[],
    collection2: number[],
    collection3: number[]
  ): number[] {
    const result: number[] = [];
  
    let i = 0;
    let j = 0;
    let k = 0;
  
    while (i < collection1.length || j < collection2.length || k < collection3.length) {
      const val1 = i < collection1.length ? collection1[i] : Number.MIN_SAFE_INTEGER;
      const val2 = j < collection2.length ? collection2[j] : Number.MIN_SAFE_INTEGER;
      const val3 = k < collection3.length ? collection3[k] : Number.MIN_SAFE_INTEGER;
      console.log(val1, val2, val3)
      const maxVal = Math.max(val1, val2, val3);
  
      if (val1 === maxVal) {
        result.push(val1);
        i++;
      } else if (val2 === maxVal) {
        result.push(val2);
        j++;
      } else {
        result.push(val3);
        k++;
      }
    }
  
    return result;
  }
  