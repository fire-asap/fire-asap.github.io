import {
  means,
  scalings,
  parx,
  dm,
  presentTxt,
  absenceTxt,
} from '../contants/index';

export default function getResult(selections) {
  const x = selections.reduce((prev, curr) => {
    const { name, val } = curr;
    const currMean = means[name];
    const currScaling = scalings[name];
    const currResult = (val - currMean) * currScaling;
    return prev + currResult;
  }, 0);

  const tmp = dm.map(item => item * x);
  const dist0 = parx.map((item, idx) => item - tmp[idx]);

  const minDist0Item = Math.min(...dist0);

  const dist1 = dist0.map(item => {
    const power = (item - minDist0Item) * -1; // result is <= -0
    return Math.exp(power);
  });

  const sumDist1 = dist1.reduce((prev, curr) => prev + curr, 0);

  const posterior = dist1.map(item => {
    const realResult = item / sumDist1;
    return realResult.toFixed(13);
  });

  const txt = posterior[0] > posterior[1] ? absenceTxt : presentTxt;

  return {
    p1: posterior[0],
    p2: posterior[1],
    output: txt,
  };
}
