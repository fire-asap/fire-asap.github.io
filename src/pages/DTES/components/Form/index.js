import React, { useState, useMemo } from 'react';
import { Radio, Space, Button } from 'antd';
import ResultCard from '../ResultCard';
import ContentDivider from '../ContentDivider';
import Selector from '../Selector';
import { getSum, isValid } from './helpers';
import constants from './constants';

const {
  cancerTypeOptions,
  treatmentRegimenOptions,
  controlRegimenOptions,
  descriptionDTEScore,
  descptionDTEStatus,
  threshold,
  definite,
  indefinite,
  labels,
} = constants;

function Form() {
  const [cancerType, setCancerType] = useState(undefined);
  const [isFirstLine, setIsFirstLine] = useState(undefined);
  const [hasAntiCTLA4, setHasAntiCTLA4] = useState(undefined);
  const [treatmentRegimen, setTreatmentRegimen] = useState(undefined);
  const [controlRegimen, setControlRegimen] = useState(undefined);
  const [isCalculateClicked, setIsCalculateClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const [sum, predictedDTEStatus] = useMemo(() => {
    if (
      isValid(
        cancerType,
        isFirstLine,
        hasAntiCTLA4,
        treatmentRegimen,
        controlRegimen,
      )
    ) {
      const score = getSum({
        cancerType,
        isFirstLine,
        hasAntiCTLA4,
        treatmentRegimen,
        controlRegimen,
      });
      const status = score >= threshold ? definite : indefinite;
      return [score, status];
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

  const handleFirstLineChange = e => {
    setIsFirstLine(e.target.value);
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
        <span className="label">{labels.two}</span>
        <Radio.Group onChange={handleFirstLineChange} value={isFirstLine}>
          <Space>
            <Radio value={1}>Yes</Radio>
            <Radio value={0}>No</Radio>
          </Space>
        </Radio.Group>
      </div>
      <br />

      <div className="chocieContainer">
        <span className="label">{labels.three}</span>
        <Radio.Group onChange={handleAntiCTLA4Change} value={hasAntiCTLA4}>
          <Space>
            <Radio value={1}>Yes</Radio>
            <Radio value={0}>No</Radio>
          </Space>
        </Radio.Group>
      </div>
      <br />

      <div className="chocieContainer">
        <span className="treatmentRegimenLabel label">{labels.four}</span>
        <Selector
          placeholder="Treatment arm regimen"
          optionList={treatmentRegimenOptions}
          onChange={handleTreatmentRegimenChange}
          value={treatmentRegimen}
        />
      </div>
      <br />

      <div className="chocieContainer">
        <span className="controlRegimenLabel label">{labels.five}</span>
        <Selector
          placeholder="Control arm regimen"
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
          <>
            <ResultCard
              hintText={descriptionDTEScore}
              titleText="DTE score"
              style={{ width: 150 }}
              content={sum}
            />

            <ResultCard
              hintText={descptionDTEStatus}
              titleText="Predicted DTE status"
              style={{ width: 232 }}
              content={predictedDTEStatus}
            />
          </>
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
