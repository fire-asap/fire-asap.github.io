export function isValid(...rest) {
  return rest.every(item => item !== undefined);
}

export function getSum({
  cancerType,
  isFirstLine,
  hasAntiCTLA4,
  treatmentRegimen,
  controlRegimen,
}) {
  const cancerTypeMap = {
    Non_small_cell_lung_cancer: 57,
    Melanoma: 54,
    Small_cell_lung_cancer: 90,
    Urothelial_cancer: 77,
    Head_and_neck_cancer: 89,
    Gastric_cancer: 100,
    Renal_cell_carcinoma: 0,
    Other: 68,
  };

  const treatmentRegimenMap = {
    ICI_chemotherapy: 0,
    ICI_monotherapy: 36,
    ICI_ICI: 35,
    ICI_other: 26,
  };
  const controlRegimenMap = {
    Best_supportive_care: 0,
    Active_control_no_ICI: 32,
  };

  const doInFirstLine = 17;
  const doHasAntiCTLA4 = 13;

  let sum =
    cancerTypeMap[cancerType] +
    treatmentRegimenMap[treatmentRegimen] +
    controlRegimenMap[controlRegimen];
  if (isFirstLine) {
    sum += doInFirstLine;
  }
  if (hasAntiCTLA4) {
    sum += doHasAntiCTLA4;
  }
  return sum;
}
