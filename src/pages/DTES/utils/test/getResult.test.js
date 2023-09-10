import resultJson from './test_data.json';
import getResult from '../getResult';
import { varNames } from '../../contants';

describe('all combo', () => {
  resultJson.forEach(item => {
    it(`case: ${item.key}`, () => {
      const testCaseData = varNames.map((i, idx) => ({
        name: i,
        val: item.key[idx],
      }));

      const { p1, p2, output } = getResult(testCaseData);
      const formattedP1 = parseFloat(item.p1).toFixed(13);
      const formattedP2 = parseFloat(item.p2).toFixed(13);

      expect(p1).toEqual(formattedP1);
      expect(p2).toEqual(formattedP2);
      expect(output).toEqual(item.output);
    });
  });
});
