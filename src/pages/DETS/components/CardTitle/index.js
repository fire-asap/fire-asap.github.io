/* eslint-disable react/prop-types */
import React from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

function CardTitle({ hintText, titleText }) {
  return (
    <Tooltip title={hintText} color="rgb(62, 122, 64)">
      <div className="toolTipText">
        <span>{titleText}</span>
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
  );
}

export default CardTitle;
