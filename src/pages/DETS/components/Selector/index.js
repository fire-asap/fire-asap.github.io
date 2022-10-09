/* eslint-disable react/prop-types */
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

function Selector({ placeholder, onChange, optionList }) {
  return (
    <Select
      style={{
        width: 370,
      }}
      placeholder={placeholder}
      onChange={onChange}
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
