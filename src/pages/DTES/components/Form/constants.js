export const cancerTypeOptions = [
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

export const treatmentRegimenOptions = [
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

export const controlRegimenOptions = [
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

export const descptionDTEStatus =
  'DTE-definite suggests the need for alternative methods for handling DTE';

export const labels = {
  one: ' 2. Cancer type:',
  two: 'First line:',
  three: 'Phase 3:',
  four: '4. Experimental arm (Ref: Anti-PD-1 monotherapy):',
  five: '5. Control arm (Ref: Placebo/Best supportive care):',
};

export const varNames = [
  'line2',
  'CA2BRCA',
  'CA2EGA',
  'CA2HNSC',
  'CA2NSCLC',
  'CA2RCC',
  'CA2SCLC',
  'CA2SKCM',
  'ph2',
  'trt_comboICI+chemo',
  'trt_comboICI+ICI_PD1_CTLA4',
  'trt_comboICI+ICI_PDL1_CTLA4',
  'trt_comboICI+other',
  'trt_combomono_PDL1',
  'Combo_ctrlxchemo',
  'Combo_ctrlxICI',
  'Combo_ctrlxother',
];
export const means = {
  line2: 0.52336449,
  CA2BRCA: 0.04672897,
  CA2EGA: 0.07476636,
  CA2HNSC: 0.07476636,
  CA2NSCLC: 0.25233645,
  CA2RCC: 0.06542056,
  CA2SCLC: 0.10280374,
  CA2SKCM: 0.12149533,
  ph2: 0.91588785,
  'trt_comboICI+chemo': 0.27102804,
  'trt_comboICI+ICI_PD1_CTLA4': 0.06542056,
  'trt_comboICI+ICI_PDL1_CTLA4': 0.04672897,
  'trt_comboICI+other': 0.13084112,
  trt_combomono_PDL1: 0.13084112,
  Combo_ctrlxchemo: 0.71028037,
  Combo_ctrlxICI: 0.05607477,
  Combo_ctrlxother: 0.13084112,
};

export const scalings = {
  line2: 0.40877576,
  CA2BRCA: -0.21281123,
  CA2EGA: -0.27786485,
  CA2HNSC: 1.59909552,
  CA2NSCLC: -0.3871628,
  CA2RCC: -2.28170714,
  CA2SCLC: 1.80928865,
  CA2SKCM: 1.76156542,
  ph2: -0.01602277,
  'trt_comboICI+chemo': -1.52013442,
  'trt_comboICI+ICI_PD1_CTLA4': 1.28577542,
  'trt_comboICI+ICI_PDL1_CTLA4': 0.46699858,
  'trt_comboICI+other': -0.20313531,
  trt_combomono_PDL1: 0.61760728,
  Combo_ctrlxchemo: 1.56300638,
  Combo_ctrlxICI: -1.57000944,
  Combo_ctrlxother: 0.4563368,
};

export const parx = [1.4858645, 0.6863944];

export const dm = [-1.0262629, 0.6375269];

export const presentTxt = 'Presence of DTE';
export const absenceTxt = 'Absence of DTE';
