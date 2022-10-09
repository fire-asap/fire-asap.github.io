import React, { useState, useMemo } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import {
  Select,
  Divider,
  Radio,
  Space,
  Button,
  Card,
  Tooltip,
  Progress,
} from 'antd';

const { Option } = Select;

const descriptionDTEScore =
  'A higher DTE score indicates an increased magnitude of DTE';
const descptionDTEStatus =
  'DTE-definite suggests the need for alternative methods for handling DTE';

function isValid(...rest) {
  return rest.every(item => item !== undefined);
}

function getSum({
  cancerType,
  isFirstLine,
  hasAntiCTLA4,
  treatmentRegimen,
  controlRegimen,
}) {
  const cancerTypeMap = {
    Non_small_cell_lung_cancer: 57,
    Melanoma: 54,
    Small_cell_lung_cancer: 90,
    Urothelial_cancer: 77,
    Head_and_neck_cancer: 89,
    Gastric_cancer: 100,
    Renal_cell_carcinoma: 0,
    Other: 68,
  };

  const treatmentRegimenMap = {
    ICI_chemotherapy: 0,
    ICI_monotherapy: 36,
    ICI_ICI: 35,
    ICI_other: 26,
  };
  const controlRegimenMap = {
    Best_supportive_care: 0,
    Active_control_no_ICI: 32,
  };

  const doInFirstLine = 17;
  const doHasAntiCTLA4 = 13;

  let sum =
    cancerTypeMap[cancerType] +
    treatmentRegimenMap[treatmentRegimen] +
    controlRegimenMap[controlRegimen];
  if (isFirstLine) {
    sum += doInFirstLine;
  }
  if (hasAntiCTLA4) {
    sum += doHasAntiCTLA4;
  }
  return sum;
}

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
      const threshold = 136.5837;
      const definite = 'DTE-definite';
      const indefinite = 'DTE-indefinite';
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

  const cancerTypeOptions = useMemo(() => {
    const items = [
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
    return items;
  }, []);

  const treatmentRegimenOptions = useMemo(() => {
    const items = [
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
    return items;
  }, []);

  const controlRegimenOptions = useMemo(() => {
    const items = [
      {
        label: 'Best supportive care/placebo-only/Active control, ICI',
        key: 'Best_supportive_care',
      },
      {
        label: 'Active control, no ICI',
        key: 'Active_control_no_ICI',
      },
    ];
    return items;
  }, []);

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
      <div>
        <span className="cancerTypeLabel label">
          1. Please select a cancer type:
        </span>
        <Select
          style={{
            width: 360,
          }}
          placeholder="cancer types"
          onChange={handleCancerTypeChange}
        >
          {cancerTypeOptions.map(item => (
            <Option key={item.key} value={item.key}>
              {item.label}
            </Option>
          ))}
        </Select>
      </div>
      {/* <Divider dashed /> */}
      <br />

      <div>
        <span className="label">2. Whether in the first-line setting:</span>
        <Radio.Group onChange={handleFirstLineChange} value={isFirstLine}>
          <Space direction="vertical">
            <Radio value={1}>Yes</Radio>
            <Radio value={0}>No</Radio>
          </Space>
        </Radio.Group>
      </div>
      {/* <Divider dashed /> */}
      <br />

      <div>
        <span className="label">
          3. Whether anti-CTLA-4 involved in treatment arm:
        </span>
        <Radio.Group onChange={handleAntiCTLA4Change} value={hasAntiCTLA4}>
          <Space direction="vertical">
            <Radio value={1}>Yes</Radio>
            <Radio value={0}>No</Radio>
          </Space>
        </Radio.Group>
      </div>
      {/* <Divider dashed /> */}
      <br />

      <div>
        <span className="treatmentRegimenLabel label">
          4. Please select a treatment arm regimen:
        </span>
        <Select
          style={{
            width: 360,
          }}
          placeholder="Treatment arm regimen"
          onChange={handleTreatmentRegimenChange}
        >
          {treatmentRegimenOptions.map(item => (
            <Option key={item.key} value={item.key}>
              {item.label}
            </Option>
          ))}
        </Select>
      </div>
      {/* <Divider dashed /> */}
      <br />

      <div>
        <span className="controlRegimenLabel label">
          5. Please select a control arm regimen:
        </span>
        <Select
          style={{
            width: 500,
          }}
          placeholder="Control arm regimen"
          onChange={handleControlRegimenChange}
        >
          {controlRegimenOptions.map(item => (
            <Option key={item.key} value={item.key}>
              {item.label}
            </Option>
          ))}
        </Select>
      </div>
      <br />
      <Divider plain style={{ color: 'rgba(0, 0, 0, 0.1)' }}>
        {isCalculateClicked ? (
          'Result'
        ) : (
          <Progress
            percent={percentage}
            steps={5}
            strokeColor="rgb(62, 122, 64)"
          />
        )}
      </Divider>

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
            <div>
              <Card
                title={
                  <Tooltip title={descriptionDTEScore} color="rgb(62, 122, 64)">
                    <div className="toolTipText">
                      <span>DTE score</span>
                      <InfoCircleOutlined
                        style={{
                          color: 'rgb(62, 122, 64)',
                          position: 'relative',
                          top: '-3px',
                          paddingLeft: '3px',
                        }}
                      />
                    </div>
                  </Tooltip>
                }
                bordered
                style={{ width: 150 }}
              >
                <div className="cardContent center">{sum}</div>
              </Card>
            </div>
            <div>
              <Card
                title={
                  <Tooltip title={descptionDTEStatus} color="rgb(62, 122, 64)">
                    <div className="toolTipText left">
                      <span>Predicted DTE status</span>
                      <InfoCircleOutlined
                        style={{
                          color: 'rgb(62, 122, 64)',
                          position: 'relative',
                          top: '-3px',
                          paddingLeft: '3px',
                        }}
                      />
                    </div>
                  </Tooltip>
                }
                bordered
                style={{ width: 232 }}
              >
                <div className="cardContent center">{predictedDTEStatus}</div>
              </Card>
            </div>
          </>
        ) : (
          <Button
            type="primary"
            size="large"
            shape="round"
            onClick={handleBtnClicked}
            loading={loading}
            disabled={percentage !== 100}
            style={{
              marginTop: '20px',
              borderColor: 'rgb(62, 122, 64)',
              backgroundColor: 'rgb(62, 122, 64)',
            }}
          >
            Calculate
          </Button>
        )}
      </div>
    </>
  );
}

export default Form;
