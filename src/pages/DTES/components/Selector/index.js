/* eslint-disable react/prop-types */
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

function Selector({ placeholder, onChange, optionList, value, testId }) {
  return (
    <Select
      style={{
        width: 300,
      }}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      data-testid={testId}
    >
      {optionList.map(item => (
        <Option key={item.key} value={item.key}>
          {item.label}
        </Option>
      ))}
    </Select>
  );
}

export default Selector;
