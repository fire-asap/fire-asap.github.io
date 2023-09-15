import React, { useState, useMemo } from 'react';
import { Radio, Space, Button } from 'antd';
import ResultCard from '../ResultCard';
import ContentDivider from '../ContentDivider';
import Selector from '../Selector';
import { isValid, populateSelections, getResult } from './helpers';
import {
  treatmentStageOptions,
  cancerTypeOptions,
  treatmentRegimenOptions,
  controlRegimenOptions,
  descptionDTEStatus,
  labels,
} from './constants';

function Form() {
  const [isFirstLine, setIsFirstLine] = useState(undefined);
  const [cancerType, setCancerType] = useState(undefined);
  const [hasAntiCTLA4, setHasAntiCTLA4] = useState(undefined);
  const [treatmentRegimen, setTreatmentRegimen] = useState(undefined);
  const [controlRegimen, setControlRegimen] = useState(undefined);
  const [isCalculateClicked, setIsCalculateClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [output, keysPtn] = useMemo(() => {
    if (
      isValid(
        cancerType,
        isFirstLine,
        hasAntiCTLA4,
        treatmentRegimen,
        controlRegimen,
      )
    ) {
      // populate the `selections`;
      const selections = populateSelections({
        cancerType,
        isFirstLine,
        hasAntiCTLA4,
        treatmentRegimen,
        controlRegimen,
      });

      const result = getResult(selections);

      return [result.output, result.keysPtn];
    }
    return [];
  }, [cancerType, controlRegimen, hasAntiCTLA4, isFirstLine, treatmentRegimen]);

  const percentage = useMemo(() => {
    const values = [
      cancerType,
      isFirstLine,
      hasAntiCTLA4,
      treatmentRegimen,
      controlRegimen,
    ];
    const count = values.filter(item => item !== undefined).length;
    return (count / 5) * 100;
  }, [cancerType, controlRegimen, hasAntiCTLA4, isFirstLine, treatmentRegimen]);

  const resetBtnStatus = () => {
    setLoading(false);
    setIsCalculateClicked(false);
  };

  const handleCancerTypeChange = value => {
    setCancerType(value);
    resetBtnStatus();
  };

  const handleTreatmentRegimenChange = value => {
    setTreatmentRegimen(value);
    resetBtnStatus();
  };

  const handleControlRegimenChange = value => {
    setControlRegimen(value);
    resetBtnStatus();
  };

  const handleFirstLineChange = value => {
    setIsFirstLine(value); // please note the `value` is of type string
    resetBtnStatus();
  };

  const handleAntiCTLA4Change = e => {
    setHasAntiCTLA4(e.target.value);
    resetBtnStatus();
  };

  const handleOnReset = () => {
    setCancerType(undefined);
    setIsFirstLine(undefined);
    setHasAntiCTLA4(undefined);
    setTreatmentRegimen(undefined);
    setControlRegimen(undefined);
    setIsCalculateClicked(false);
    setLoading(false);
  };

  const handleBtnClicked = () => {
    if (isCalculateClicked) return;
    if (
      isValid(
        cancerType,
        isFirstLine,
        hasAntiCTLA4,
        treatmentRegimen,
        controlRegimen,
      )
    ) {
      setLoading(true);
      setTimeout(() => {
        setIsCalculateClicked(true);
      }, 800);
    }
  };

  return (
    <>
      <div className="chocieContainer">
        <span className="label ">{labels.two}</span>
        {/* line2 */}
        <Selector
          placeholder="treatment stage"
          optionList={treatmentStageOptions}
          onChange={handleFirstLineChange}
          value={isFirstLine}
        />
        {/* <Radio.Group
          onChange={handleFirstLineChange}
          value={isFirstLine}
          className="secLabel"
        >
          <Space>
            <Radio value={1}>Yes</Radio>
            <Radio value={0}>No</Radio>
          </Space>
        </Radio.Group> */}
      </div>
      <br />

      <div className="chocieContainer">
        {/* cancer types */}
        <span className="cancerTypeLabel label">{labels.one}</span>
        <Selector
          placeholder="cancer types"
          optionList={cancerTypeOptions}
          onChange={handleCancerTypeChange}
          value={cancerType}
        />
      </div>
      <br />

      <div className="chocieContainer">
        <span className="label topLabel">3. Trial phase (Ref: Phase 2)</span>
        <span className="label secLabel">{labels.three}</span>
        {/* ph2 */}
        <Radio.Group
          onChange={handleAntiCTLA4Change}
          value={hasAntiCTLA4}
          className="secLabel"
        >
          <Space>
            <Radio value={1}>Yes</Radio>
            <Radio value={0}>No</Radio>
          </Space>
        </Radio.Group>
      </div>
      <br />

      <div className="chocieContainer">
        <span className="treatmentRegimenLabel label">{labels.four}</span>
        {/* Experimental arm */}
        <Selector
          placeholder="experimental arm"
          optionList={treatmentRegimenOptions}
          onChange={handleTreatmentRegimenChange}
          value={treatmentRegimen}
        />
      </div>
      <br />

      <div className="chocieContainer">
        <span className="controlRegimenLabel label">{labels.five}</span>
        {/* Control arm */}
        <Selector
          placeholder="control arm"
          optionList={controlRegimenOptions}
          onChange={handleControlRegimenChange}
          value={controlRegimen}
        />
      </div>
      <br />

      <ContentDivider
        isCompleted={isCalculateClicked}
        percentage={percentage}
        onReset={handleOnReset}
      />

      <div
        className="resultSection"
        style={{
          backgroundColor: isCalculateClicked
            ? 'rgba(0,0,0,0.02)'
            : 'transparent',
        }}
      >
        {isCalculateClicked ? (
          <ResultCard
            hintText={descptionDTEStatus}
            titleText="Predicted DTE status"
            style={{ width: 300 }}
            content={output}
          />
        ) : (
          <Button
            type="primary"
            size="large"
            shape="round"
            onClick={handleBtnClicked}
            loading={loading}
            disabled={percentage !== 100}
          >
            Calculate
          </Button>
        )}
      </div>
    </>
  );
}

export default Form;
