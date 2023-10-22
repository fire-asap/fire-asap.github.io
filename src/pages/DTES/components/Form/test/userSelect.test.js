import React from 'react';

import Form from '../index';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import {
  treatmentStageOptions,
  cancerTypeOptions,
  experimentalArmOptions,
  controlRegimenOptions,
} from '../constants';
// 2*7*4*3
describe('test user interaction with keyPtn', () => {
  const testCases = [
    {
      selectedLabels:
        'First line, Gastroesophageal adenocarcinoma, ICI + ICI, ICI monotherapy/ICI + ICI',
      // 注意，对于最后一个选择，它的第一个和第二的值在计算中，即在 selectedKey 中的位置是颠倒的
      // 即，虽然这个我选择了 ICI monotherapy/ICI + ICI， 它是在 idx 0 的点击位置，但是被处理成数据的时候，它是 idx 1 的位置
      selectedKey: '1, 0100000, 0100, 010',
      clickOrder: [0, 1, 1, 0], // 按顺序依次选择第几个下拉框的第几个idx的item, start idx is 0
    },
    {
      selectedLabels:
        'Non-first line, Gastroesophageal adenocarcinoma, ICI + ICI, ICI monotherapy/ICI + ICI',
      selectedKey: '0, 0100000, 0100, 010',
      clickOrder: [1, 1, 1, 0],
    },
    {
      selectedLabels:
        'Non-first line, Non-small-cell lung cancer, ICI + ICI, ICI monotherapy/ICI + ICI',
      selectedKey: '0, 0001000, 0100, 010',
      clickOrder: [1, 3, 1, 0],
    },

    {
      selectedLabels:
        'Non-first line, Non-small-cell lung cancer, ICI + ICI, ICI monotherapy/ICI + ICI',
      selectedKey: '0, 0001000, 0100, 010',
      clickOrder: [1, 3, 1, 0],
    },

    {
      selectedLabels:
        'Non-first line, Non-small-cell lung cancer, Anti-PD-1 monotherapy, ICI monotherapy/ICI + ICI',
      selectedKey: '0, 0001000, 0000, 010',
      clickOrder: [1, 3, 4, 0],
    },

    {
      selectedLabels:
        'Non-first line, Non-small-cell lung cancer, Anti-CTLA-4 monotherapy, ICI monotherapy/ICI + ICI',
      selectedKey: '0, 0001000, 0000, 010',
      clickOrder: [1, 3, 5, 0],
    },

    {
      selectedLabels:
        'Non-first line, Non-small-cell lung cancer, Anti-CTLA-4 monotherapy, Chemotherapy involved',
      selectedKey: '0, 0001000, 0000, 100',
      clickOrder: [1, 3, 5, 1],
    },

    {
      selectedLabels:
        'Non-first line, Non-small-cell lung cancer, Anti-CTLA-4 monotherapy, Placebo/Best supportive care',
      selectedKey: '0, 0001000, 0000, 000',
      clickOrder: [1, 3, 5, 3],
    },
  ];

  testCases.forEach(({ selectedLabels, selectedKey, clickOrder }) => {
    test(`${selectedLabels}: ${selectedKey}`, async () => {
      const [one, two, four, five] = clickOrder;
      const selectionArr = [];
      const { getByText, getByTestId, findByText, findByRole } = render(
        <Form />,
      );
      const user = userEvent.setup();

      const treatmentSelectorElm = getByText('please select a treatment stage');
      await user.click(treatmentSelectorElm);
      selectionArr.push(treatmentStageOptions[one].label);
      await user.click(await findByText(treatmentStageOptions[one].label));
      let percentageTextElm = await findByText('25%');
      expect(percentageTextElm).toBeInTheDocument();

      const cancerSelectorElm = getByText('please select a cancer type');
      await user.click(cancerSelectorElm);
      selectionArr.push(cancerTypeOptions[two].label);
      await user.click(await findByText(cancerTypeOptions[two].label));
      percentageTextElm = await findByText('50%');
      expect(percentageTextElm).toBeInTheDocument();

      // const trialSelectorElm = getByText('please select a trial phase');
      // await user.click(trialSelectorElm);
      // selectionArr.push(trialPhaseOptions[three].label);
      // await user.click(await findByText(trialPhaseOptions[three].label));
      // percentageTextElm = await findByText('75%');
      // expect(percentageTextElm).toBeInTheDocument();

      const experimentalSelectorElm = getByText(
        'please select a experimental arm',
      );
      await user.click(experimentalSelectorElm);
      selectionArr.push(experimentalArmOptions[four].label);
      await user.click(await findByText(experimentalArmOptions[four].label));
      percentageTextElm = await findByText('75%');
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
