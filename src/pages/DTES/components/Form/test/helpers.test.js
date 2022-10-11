import constants from '../constants';
import { getSum } from '../helpers';

const { threshold, definite, indefinite } = constants;

describe('Non_small_cell_lung_cancer ICI_chemotherapy', () => {
  const shared = {
    cancerType: 'Non_small_cell_lung_cancer',
    treatmentRegimen: 'ICI_chemotherapy',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(87);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(74);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(70);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(57);
    expect(status).toEqual(indefinite);
  });
});

describe('Non_small_cell_lung_cancer ICI_monotherapy', () => {
  const shared = {
    cancerType: 'Non_small_cell_lung_cancer',
    treatmentRegimen: 'ICI_monotherapy',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(123);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(110);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(106);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(93);
    expect(status).toEqual(indefinite);
  });
});

describe('Non_small_cell_lung_cancer ICI_ICI', () => {
  const shared = {
    cancerType: 'Non_small_cell_lung_cancer',
    treatmentRegimen: 'ICI_ICI',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(122);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(109);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(105);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(92);
    expect(status).toEqual(indefinite);
  });
});

describe('Non_small_cell_lung_cancer ICI_other', () => {
  const shared = {
    cancerType: 'Non_small_cell_lung_cancer',
    treatmentRegimen: 'ICI_other',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(113);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(100);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(96);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(83);
    expect(status).toEqual(indefinite);
  });
});

describe('Melanoma ICI_chemotherapy', () => {
  const shared = {
    cancerType: 'Melanoma',
    treatmentRegimen: 'ICI_chemotherapy',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(84);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(71);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(67);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(54);
    expect(status).toEqual(indefinite);
  });
});

describe('Melanoma ICI_monotherapy', () => {
  const shared = {
    cancerType: 'Melanoma',
    treatmentRegimen: 'ICI_monotherapy',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(120);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(107);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(103);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(90);
    expect(status).toEqual(indefinite);
  });
});

describe('Melanoma ICI_ICI', () => {
  const shared = {
    cancerType: 'Melanoma',
    treatmentRegimen: 'ICI_ICI',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(119);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(106);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(102);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(89);
    expect(status).toEqual(indefinite);
  });
});

describe('Melanoma ICI_other', () => {
  const shared = {
    cancerType: 'Melanoma',
    treatmentRegimen: 'ICI_other',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(110);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(97);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(93);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(80);
    expect(status).toEqual(indefinite);
  });
});

describe('Small_cell_lung_cancer ICI_chemotherapy', () => {
  const shared = {
    cancerType: 'Small_cell_lung_cancer',
    treatmentRegimen: 'ICI_chemotherapy',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(120);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(107);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(103);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(90);
    expect(status).toEqual(indefinite);
  });
});

describe('Small_cell_lung_cancer ICI_monotherapy', () => {
  const shared = {
    cancerType: 'Small_cell_lung_cancer',
    treatmentRegimen: 'ICI_monotherapy',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(156);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(143);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(139);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(126);
    expect(status).toEqual(indefinite);
  });
});

describe('Small_cell_lung_cancer ICI_ICI', () => {
  const shared = {
    cancerType: 'Small_cell_lung_cancer',
    treatmentRegimen: 'ICI_ICI',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(155);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(142);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(138);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(125);
    expect(status).toEqual(indefinite);
  });
});

describe('Small_cell_lung_cancer ICI_other', () => {
  const shared = {
    cancerType: 'Small_cell_lung_cancer',
    treatmentRegimen: 'ICI_other',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(146);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(133);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(129);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(116);
    expect(status).toEqual(indefinite);
  });
});

describe('Urothelial_cancer ICI_chemotherapy', () => {
  const shared = {
    cancerType: 'Urothelial_cancer',
    treatmentRegimen: 'ICI_chemotherapy',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(107);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(94);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(90);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(77);
    expect(status).toEqual(indefinite);
  });
});

describe('Urothelial_cancer ICI_monotherapy', () => {
  const shared = {
    cancerType: 'Urothelial_cancer',
    treatmentRegimen: 'ICI_monotherapy',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(143);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(130);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(126);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(113);
    expect(status).toEqual(indefinite);
  });
});

describe('Urothelial_cancer ICI_ICI', () => {
  const shared = {
    cancerType: 'Urothelial_cancer',
    treatmentRegimen: 'ICI_ICI',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(142);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(129);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(125);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(112);
    expect(status).toEqual(indefinite);
  });
});

describe('Urothelial_cancer ICI_other', () => {
  const shared = {
    cancerType: 'Urothelial_cancer',
    treatmentRegimen: 'ICI_other',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(133);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(120);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(116);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(103);
    expect(status).toEqual(indefinite);
  });
});

describe('Head_and_neck_cancer ICI_chemotherapy', () => {
  const shared = {
    cancerType: 'Head_and_neck_cancer',
    treatmentRegimen: 'ICI_chemotherapy',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(119);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(106); // 94
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(102);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(89);
    expect(status).toEqual(indefinite);
  });
});

describe('Head_and_neck_cancer ICI_monotherapy', () => {
  const shared = {
    cancerType: 'Head_and_neck_cancer',
    treatmentRegimen: 'ICI_monotherapy',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(155);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(142);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(138);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(125);
    expect(status).toEqual(indefinite);
  });
});

describe('Head_and_neck_cancer ICI_ICI', () => {
  const shared = {
    cancerType: 'Head_and_neck_cancer',
    treatmentRegimen: 'ICI_ICI',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(154);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(141);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(137);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(124);
    expect(status).toEqual(indefinite);
  });
});

describe('Head_and_neck_cancer ICI_other', () => {
  const shared = {
    cancerType: 'Head_and_neck_cancer',
    treatmentRegimen: 'ICI_other',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(145);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(132);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(128);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(115);
    expect(status).toEqual(indefinite);
  });
});

describe('Gastric_cancer ICI_chemotherapy', () => {
  const shared = {
    cancerType: 'Gastric_cancer',
    treatmentRegimen: 'ICI_chemotherapy',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(130);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(117);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(113);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(100);
    expect(status).toEqual(indefinite);
  });
});

describe('Gastric_cancer ICI_monotherapy', () => {
  const shared = {
    cancerType: 'Gastric_cancer',
    treatmentRegimen: 'ICI_monotherapy',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(166);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(153);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(149);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(136);
    expect(status).toEqual(indefinite);
  });
});

describe('Gastric_cancer ICI_ICI', () => {
  const shared = {
    cancerType: 'Gastric_cancer',
    treatmentRegimen: 'ICI_ICI',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(165);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(152);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(148);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(135);
    expect(status).toEqual(indefinite);
  });
});

describe('Gastric_cancer ICI_other', () => {
  const shared = {
    cancerType: 'Gastric_cancer',
    treatmentRegimen: 'ICI_other',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(156);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(143);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(139);
    expect(status).toEqual(definite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(126);
    expect(status).toEqual(indefinite);
  });
});

describe('Renal_cell_carcinoma ICI_chemotherapy', () => {
  const shared = {
    cancerType: 'Renal_cell_carcinoma',
    treatmentRegimen: 'ICI_chemotherapy',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(30);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(17);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(13);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(0);
    expect(status).toEqual(indefinite);
  });
});

describe('Renal_cell_carcinoma ICI_monotherapy', () => {
  const shared = {
    cancerType: 'Renal_cell_carcinoma',
    treatmentRegimen: 'ICI_monotherapy',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(66);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(53);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(49);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(36);
    expect(status).toEqual(indefinite);
  });
});

describe('Renal_cell_carcinoma ICI_ICI', () => {
  const shared = {
    cancerType: 'Renal_cell_carcinoma',
    treatmentRegimen: 'ICI_ICI',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(65);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(52);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(48);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(35);
    expect(status).toEqual(indefinite);
  });
});

describe('Renal_cell_carcinoma ICI_other', () => {
  const shared = {
    cancerType: 'Renal_cell_carcinoma',
    treatmentRegimen: 'ICI_other',
  };
  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(56);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-true doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: true,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(43);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-true', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: true,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(39);
    expect(status).toEqual(indefinite);
  });

  it('Best_supportive_care  doInFirstLine-false doHasAntiCTLA4-false', () => {
    const score = getSum({
      ...shared,
      isFirstLine: false,
      hasAntiCTLA4: false,
      controlRegimen: 'Best_supportive_care',
    });
    const status = score >= threshold ? definite : indefinite;

    expect(score).toEqual(26);
    expect(status).toEqual(indefinite);
  });
});
