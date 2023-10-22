import resultJson from './test_data.json';
import { varNamesAdjustToCalcOrder } from '../constants';
import { getResult } from '../helpers';

const floatCount = 6;

describe('all combo', () => {
  resultJson.forEach(item => {
    it(`case: ${item.key}`, () => {
      const testCaseData = varNamesAdjustToCalcOrder.map((i, idx) => ({
        name: i,
        val: item.key[idx],
      }));

      const { p1, p2, output } = getResult(testCaseData);
      const formattedP1 = parseFloat(item.p1).toFixed(floatCount);
      const formattedP2 = parseFloat(item.p2).toFixed(floatCount);

      expect(p1).toEqual(formattedP1);
      expect(p2).toEqual(formattedP2);
      expect(output).toEqual(item.output);
    });
  });
});
