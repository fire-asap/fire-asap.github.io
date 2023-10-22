export const treatmentStageOptions = [
  {
    label: 'First line',
    key: '1', // value map to 1
  },
  {
    label: 'Non-first line',
    key: '0', // value map to 0
  },
];

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

// export const trialPhaseOptions = [
//   {
//     label: 'Phase 3',
//     key: '1', // value map to 1
//   },
//   {
//     label: 'Phase 2',
//     key: '0', // value map to 0
//   },
// ];

export const experimentalArmOptions = [
  {
    label: 'ICI + chemotherapy',
    key: 'trt_comboICI+chemo',
  },
  {
    label: 'ICI + ICI',
    key: 'trt_comboICI+ICI',
  },
  {
    label: 'ICI + other',
    key: 'trt_comboICI+other',
  },
  {
    label: 'Anti-PD-L1 monotherapy',
    key: 'trt_combomono_PDL1',
  },
  // 下面两个一个是ref的值，一个是不在变量列表的值
  {
    label: 'Anti-PD-1 monotherapy',
    key: 'Other_0',
  },
  {
    label: 'Anti-CTLA-4 monotherapy',
    key: 'Other_1',
  },
];

export const controlRegimenOptions = [
  {
    label: 'ICI monotherapy/ICI + ICI',
    key: 'Combo_ctrlxICI',
  },
  {
    label: 'Chemotherapy involved',
    key: 'Combo_ctrlxchemo',
  },
  {
    label: 'Other active control',
    key: 'Combo_ctrlxother',
  },
  {
    label: 'Placebo/Best supportive care',
    key: 'Other',
  },
];

export const descptionDTEStatus =
  'Presence of DTE suggests the need for alternative methods for handling DTE';

export const labels = {
  one: ' 2. Cancer type:',
  two: '1. Treatment stage: ',
  four: '3. Experimental arm:',
  five: '4. Control arm:',
};

export const varNamesAdjustToCalcOrder = [
  'line2',
  'CA2BRCA',
  'CA2EGA',
  'CA2HNSC',
  'CA2NSCLC',
  'CA2RCC',
  'CA2SCLC',
  'CA2SKCM',
  'trt_comboICI+chemo',
  'trt_comboICI+ICI',
  'trt_comboICI+other',
  'trt_combomono_PDL1',
  'Combo_ctrlxchemo',
  'Combo_ctrlxICI',
  'Combo_ctrlxother',
];

// 注意 'Combo_ctrlxchemo', 'Combo_ctrlxICI' 的顺序是按照 UI 的顺序调整过来
// 和 mean, scale 中的顺序不一样
// 当用来计算 seleciton 的时候，这两个key对应的顺序应该是反过来的
export const varNames = [
  'line2',
  'CA2BRCA',
  'CA2EGA',
  'CA2HNSC',
  'CA2NSCLC',
  'CA2RCC',
  'CA2SCLC',
  'CA2SKCM',
  'trt_comboICI+chemo',
  'trt_comboICI+ICI',
  'trt_comboICI+other',
  'trt_combomono_PDL1',
  'Combo_ctrlxICI',
  'Combo_ctrlxchemo',
  'Combo_ctrlxother',
];
export const means = {
  line2: 0.523364486,
  CA2BRCA: 0.046728972,
  CA2EGA: 0.074766355,
  CA2HNSC: 0.074766355,
  CA2NSCLC: 0.252336449,
  CA2RCC: 0.065420561,
  CA2SCLC: 0.102803738,
  CA2SKCM: 0.121495327,
  'trt_comboICI+chemo': 0.271028037,
  'trt_comboICI+ICI': 0.112149533,
  'trt_comboICI+other': 0.130841121,
  trt_combomono_PDL1: 0.130841121,
  Combo_ctrlxchemo: 0.710280374,
  Combo_ctrlxICI: 0.056074766,
  Combo_ctrlxother: 0.130841121,
};

export const scalings = {
  line2: 0.449833965,
  CA2BRCA: -0.160246881,
  CA2EGA: -0.258956343,
  CA2HNSC: 1.576396709,
  CA2NSCLC: -0.390353511,
  CA2RCC: -2.241324825,
  CA2SCLC: 1.920290189,
  CA2SKCM: 1.755220003,
  'trt_comboICI+chemo': -1.530967256,
  'trt_comboICI+ICI': 0.899004858,
  'trt_comboICI+other': -0.274963977,
  trt_combomono_PDL1: 0.64634196,
  Combo_ctrlxchemo: 1.53138489,
  Combo_ctrlxICI: -1.448887197,
  Combo_ctrlxother: 0.507076591,
};

export const parx = [1.4777089028643, 0.683247104169723];

export const dm = [-1.01828496513176, 0.632570963187914];

export const presentTxt = 'Presence of DTE';
export const absenceTxt = 'Absence of DTE';
