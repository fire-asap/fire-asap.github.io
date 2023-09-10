const cancerTypeOptions = [
  {
    label: 'Breast cancer',
    key: 'CA2BRCA',
  },
  {
    label: 'Gastroesophageal adenocarcinoma',
    key: 'CA2EGA',
  },
  {
    label: 'Head and neck cancer',
    key: 'CA2HNSC',
  },
  {
    label: 'Non-small-cell lung cancer',
    key: 'CA2NSCLC',
  },
  {
    label: 'Renal-cell carcinoma',
    key: 'CA2RCC',
  },
  {
    label: 'Small-cell lung cancer',
    key: 'CA2SCLC',
  },
  {
    label: 'Skin melanoma',
    key: 'CA2SKCM',
  },
  {
    label: 'Other',
    key: 'Other',
  },
];

const treatmentRegimenOptions = [
  {
    label: 'ICI + chemotherapy',
    key: 'trt_comboICI+chemo',
  },
  {
    label: 'Anti-PD-1 + anti-CTLA-4',
    key: 'trt_comboICI+ICI_PD1_CTLA4',
  },
  {
    label: 'Anti-PD-L1 + anti-CTLA-4',
    key: 'trt_comboICI+ICI_PDL1_CTLA4',
  },
  {
    label: 'ICI + other',
    key: 'trt_comboICI+other',
  },
  {
    label: 'Anti-PD-L1 monotherapy',
    key: 'trt_combomono_PDL1',
  },
  {
    label: 'Other',
    key: 'Other',
  },
];

const controlRegimenOptions = [
  {
    label: 'Chemotherapy involved',
    key: 'Combo_ctrlxchemo',
  },
  {
    label: 'ICI involved',
    key: 'Combo_ctrlxICI',
  },
  {
    label: 'Other active control',
    key: 'Combo_ctrlxother',
  },
  {
    label: 'Other',
    key: 'Other',
  },
];

const descptionDTEStatus =
  'DTE-definite suggests the need for alternative methods for handling DTE';

const labels = {
  one: ' 2. Cancer type:',
  two: 'First line:',
  three: 'Phase 3:',
  four: '4. Experimental arm (Ref: Anti-PD-1 monotherapy):',
  five: '5. Control arm (Ref: Placebo/Best supportive care):',
};

export default {
  cancerTypeOptions,
  treatmentRegimenOptions,
  controlRegimenOptions,
  descptionDTEStatus,

  labels,
};
