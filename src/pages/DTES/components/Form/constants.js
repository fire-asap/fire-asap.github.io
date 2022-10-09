const cancerTypeOptions = [
  {
    label: 'Non-small-cell lung cancer',
    key: 'Non_small_cell_lung_cancer',
  },
  {
    label: 'Melanoma',
    key: 'Melanoma',
  },
  {
    label: 'Small-cell lung cancer',
    key: 'Small_cell_lung_cancer',
  },
  {
    label: 'Urothelial cancer',
    key: 'Urothelial_cancer',
  },
  {
    label: 'Head and neck cancer',
    key: 'Head_and_neck_cancer',
  },
  {
    label: 'Gastric cancer',
    key: 'Gastric_cancer',
  },
  {
    label: 'Renal-cell carcinoma',
    key: 'Renal_cell_carcinoma',
  },
  {
    label: 'Other',
    key: 'Other',
  },
];

const treatmentRegimenOptions = [
  {
    label: 'ICI + chemotherapy',
    key: 'ICI_chemotherapy',
  },
  {
    label: 'ICI monotherapy',
    key: 'ICI_monotherapy',
  },
  {
    label: 'ICI + ICI',
    key: 'ICI_ICI',
  },
  {
    label: 'ICI other',
    key: 'ICI_other',
  },
];

const controlRegimenOptions = [
  {
    label: 'Best supportive care/placebo-only/Active control, ICI',
    key: 'Best_supportive_care',
  },
  {
    label: 'Active control, no ICI',
    key: 'Active_control_no_ICI',
  },
];

const descriptionDTEScore =
  'A higher DTE score indicates an increased magnitude of DTE';
const descptionDTEStatus =
  'DTE-definite suggests the need for alternative methods for handling DTE';

const labels = {
  one: ' 1. Please select a cancer type:',
  two: '2. Whether in the first-line setting:',
  three: '3. Whether anti-CTLA-4 involved in treatment arm:',
  four: '4. Please select a treatment arm regimen:',
  five: '5. Please select a control arm regimen:',
};

const threshold = 136.5837;
const definite = 'DTE-definite';
const indefinite = 'DTE-indefinite';

export default {
  cancerTypeOptions,
  treatmentRegimenOptions,
  controlRegimenOptions,
  descriptionDTEScore,
  descptionDTEStatus,
  threshold,
  definite,
  indefinite,
  labels,
};
