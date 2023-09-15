import {
  means,
  scalings,
  parx,
  dm,
  presentTxt,
  absenceTxt,
  varNames,
} from './constants';

export function isValid(...rest) {
  return rest.every(item => item !== undefined);
}

export function populateSelections({
  cancerType,
  isFirstLine,
  hasAntiCTLA4,
  treatmentRegimen,
  controlRegimen,
}) {
  const OTHER = 'Other';
  const result = varNames.map(item => ({ name: item, val: 0 }));
  // isFirstLine => `line2`
  if (isFirstLine === '1') {
    result[0].val = 1;
  }

  // cancerType
  if (cancerType !== OTHER) {
    const cancerTypeTargetIdx = result.findIndex(
      item => item.name === cancerType,
    );
    result[cancerTypeTargetIdx].val = 1;
  }

  // hasAntiCTLA4  => `ph2`
  if (hasAntiCTLA4 === '1') {
    result[8].val = 1;
  }

  // experimental arm
  if (treatmentRegimen !== OTHER) {
    const treatmentRegimenTargetIdx = result.findIndex(
      item => item.name === treatmentRegimen,
    );
    result[treatmentRegimenTargetIdx].val = 1;
  }

  // Control arm
  if (controlRegimen !== OTHER) {
    const controlRegimenTargetIdx = result.findIndex(
      item => item.name === controlRegimen,
    );
    result[controlRegimenTargetIdx].val = 1;
  }
  return result;
}

export function getResult(selections) {
  const keysPtn = selections.reduce((prev, curr) => prev + curr.val, 'keys: ');

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
    keysPtn,
  };
}
