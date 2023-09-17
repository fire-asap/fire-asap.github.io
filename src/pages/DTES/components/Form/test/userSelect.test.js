import React from 'react';

import Form from '../index';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import {
  treatmentStageOptions,
  cancerTypeOptions,
  trialPhaseOptions,
  experimentalArmOptions,
  controlRegimenOptions,
} from '../constants';

describe('test user interaction with keyPtn', () => {
  // First line, Gastroesophageal adenocarcinoma, Phase 3, Anti-PD-1 + anti-CTLA-4, Chemotherapy involved
  // 10100000101000100

  const testCases = [
    {
      selectedLabels:
        'First line, Gastroesophageal adenocarcinoma, Phase 3, Anti-PD-1 + anti-CTLA-4, Chemotherapy involved',
      selectedKey: '1, 0100000, 1, 01000, 100',
      clickOrder: [0, 1, 0, 1, 0], // 按顺序依次选择第几个下拉框的第几个idx的item, start idx is 0
    },
    {
      selectedLabels:
        'Non-first line, Gastroesophageal adenocarcinoma, Phase 3, Anti-PD-1 + anti-CTLA-4, Chemotherapy involved',
      selectedKey: '0, 0100000, 1, 01000, 100',
      clickOrder: [1, 1, 0, 1, 0],
    },
    {
      selectedLabels:
        'Non-first line, Non-small-cell lung cancer, Phase 3, Anti-PD-1 + anti-CTLA-4, Chemotherapy involved',
      selectedKey: '0, 0001000, 1, 01000, 100',
      clickOrder: [1, 3, 0, 1, 0],
    },

    {
      selectedLabels:
        'Non-first line, Non-small-cell lung cancer, Phase 2, Anti-PD-1 + anti-CTLA-4, Chemotherapy involved',
      selectedKey: '0, 0001000, 0, 01000, 100',
      clickOrder: [1, 3, 1, 1, 0],
    },

    {
      selectedLabels:
        'Non-first line, Non-small-cell lung cancer, Phase 2, Anti-PD-1 monotherapy, Chemotherapy involved',
      selectedKey: '0, 0001000, 0, 00000, 100',
      clickOrder: [1, 3, 1, 5, 0],
    },

    {
      selectedLabels:
        'Non-first line, Non-small-cell lung cancer, Phase 2, Anti-CTLA-4 monotherapy, Chemotherapy involved',
      selectedKey: '0, 0001000, 0, 00000, 100',
      clickOrder: [1, 3, 1, 6, 0],
    },

    {
      selectedLabels:
        'Non-first line, Non-small-cell lung cancer, Phase 2, Anti-CTLA-4 monotherapy, ICI involved',
      selectedKey: '0, 0001000, 0, 00000, 010',
      clickOrder: [1, 3, 1, 6, 1],
    },

    {
      selectedLabels:
        'Non-first line, Non-small-cell lung cancer, Phase 2, Anti-CTLA-4 monotherapy, Placebo/Best supportive care',
      selectedKey: '0, 0001000, 0, 00000, 000',
      clickOrder: [1, 3, 1, 6, 3],
    },
  ];

  testCases.forEach(({ selectedLabels, selectedKey, clickOrder }) => {
    test(`${selectedLabels}: ${selectedKey}`, async () => {
      const [one, two, three, four, five] = clickOrder;
      const selectionArr = [];
      const { getByText, getByTestId, findByText, findByRole } = render(
        <Form />,
      );
      const user = userEvent.setup();

      const treatmentSelectorElm = getByText('please select a treatment stage');
      await user.click(treatmentSelectorElm);
      selectionArr.push(treatmentStageOptions[one].label);
      await user.click(await findByText(treatmentStageOptions[one].label));
      let percentageTextElm = await findByText('20%');
      expect(percentageTextElm).toBeInTheDocument();

      const cancerSelectorElm = getByText('please select a cancer type');
      await user.click(cancerSelectorElm);
      selectionArr.push(cancerTypeOptions[two].label);
      await user.click(await findByText(cancerTypeOptions[two].label));
      percentageTextElm = await findByText('40%');
      expect(percentageTextElm).toBeInTheDocument();

      const trialSelectorElm = getByText('please select a trial phase');
      await user.click(trialSelectorElm);
      selectionArr.push(trialPhaseOptions[three].label);
      await user.click(await findByText(trialPhaseOptions[three].label));
      percentageTextElm = await findByText('60%');
      expect(percentageTextElm).toBeInTheDocument();

      const experimentalSelectorElm = getByText(
        'please select a experimental arm',
      );
      await user.click(experimentalSelectorElm);
      selectionArr.push(experimentalArmOptions[four].label);
      await user.click(await findByText(experimentalArmOptions[four].label));
      percentageTextElm = await findByText('80%');
      expect(percentageTextElm).toBeInTheDocument();

      const controlSelectorElm = getByText('please select a control arm');
      await user.click(controlSelectorElm);
      selectionArr.push(controlRegimenOptions[five].label);
      await user.click(await findByText(controlRegimenOptions[five].label));
      percentageTextElm = await findByRole('img', { value: 'check-circle' });
      expect(percentageTextElm).toBeInTheDocument();
      expect(selectionArr.join(', ')).toEqual(selectedLabels);

      const keyPtn = getByTestId('keyPtn');
      expect(
        keyPtn.innerHTML.includes(selectedKey.replace(/,\s+/g, '')),
      ).toBeTruthy();
    });
  });
});
