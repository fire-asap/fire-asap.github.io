import React, { useState, useMemo } from 'react';
import { Button } from 'antd';
import ResultCard from '../ResultCard';
import ContentDivider from '../ContentDivider';
import Selector from '../Selector';
import { isValid, populateSelections, getResult } from './helpers';
import {
  treatmentStageOptions,
  cancerTypeOptions,
  trialPhaseOptions,
  experimentalArmOptions,
  controlRegimenOptions,
  descptionDTEStatus,
  labels,
} from './constants';

function Form() {
  const [isFirstLine, setIsFirstLine] = useState(undefined);
  const [cancerType, setCancerType] = useState(undefined);
  const [trialPhase, setTrialPhase] = useState(undefined);
  const [experimentalArm, setExperimentalArm] = useState(undefined);
  const [controlRegimen, setControlRegimen] = useState(undefined);
  const [isCalculateClicked, setIsCalculateClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [output, keysPtn] = useMemo(() => {
    if (
      isValid(
        cancerType,
        isFirstLine,
        trialPhase,
        experimentalArm,
        controlRegimen,
      )
    ) {
      // populate the `selections`;
      const selections = populateSelections({
        cancerType,
        isFirstLine,
        hasAntiCTLA4: trialPhase,
        treatmentRegimen: experimentalArm,
        controlRegimen,
      });

      const result = getResult(selections);

      return [result.output, result.keysPtn];
    }
    return [];
  }, [cancerType, controlRegimen, trialPhase, isFirstLine, experimentalArm]);

  const percentage = useMemo(() => {
    const values = [
      cancerType,
      isFirstLine,
      trialPhase,
      experimentalArm,
      controlRegimen,
    ];
    const count = values.filter(item => item !== undefined).length;
    return (count / 5) * 100;
  }, [cancerType, controlRegimen, trialPhase, isFirstLine, experimentalArm]);

  const resetBtnStatus = () => {
    setLoading(false);
    setIsCalculateClicked(false);
  };

  const handleCancerTypeChange = value => {
    setCancerType(value);
    resetBtnStatus();
  };

  const handleTreatmentRegimenChange = value => {
    setExperimentalArm(value);
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

  const handleAntiCTLA4Change = value => {
    setTrialPhase(value); // please note the `value` is of type string
    resetBtnStatus();
  };

  const handleOnReset = () => {
    setCancerType(undefined);
    setIsFirstLine(undefined);
    setTrialPhase(undefined);
    setExperimentalArm(undefined);
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
        trialPhase,
        experimentalArm,
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
      <div data-testid="keyPtn" style={{ height: '0px', visibility: 'hidden' }}>
        {keysPtn}
      </div>
      <div className="chocieContainer">
        <span className="label">{labels.two}</span>
        {/* line2 */}
        <Selector
          placeholder="please select a treatment stage"
          optionList={treatmentStageOptions}
          onChange={handleFirstLineChange}
          value={isFirstLine}
          testId="treatmentSelector"
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
          placeholder="please select a cancer type"
          optionList={cancerTypeOptions}
          onChange={handleCancerTypeChange}
          value={cancerType}
          testId="cancerSelector"
        />
      </div>
      <br />

      <div className="chocieContainer">
        <span className="label">{labels.three}</span>
        {/* ph2 */}
        <Selector
          placeholder="please select a trial phase"
          optionList={trialPhaseOptions}
          onChange={handleAntiCTLA4Change}
          value={trialPhase}
          testId="trialSelector"
        />
      </div>
      <br />

      <div className="chocieContainer">
        <span className="treatmentRegimenLabel label">{labels.four}</span>
        {/* Experimental arm */}
        <Selector
          placeholder="please select a experimental arm"
          optionList={experimentalArmOptions}
          onChange={handleTreatmentRegimenChange}
          value={experimentalArm}
          testId="experimentalSelector"
        />
      </div>
      <br />

      <div className="chocieContainer">
        <span className="controlRegimenLabel label">{labels.five}</span>
        {/* Control arm */}
        <Selector
          placeholder="please select a control arm"
          optionList={controlRegimenOptions}
          onChange={handleControlRegimenChange}
          value={controlRegimen}
          testId="controlSelector"
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
