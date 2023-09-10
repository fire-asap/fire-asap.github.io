import { varNames } from '../../contants';

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
  if (isFirstLine === 1) {
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
  if (hasAntiCTLA4 === 1) {
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
