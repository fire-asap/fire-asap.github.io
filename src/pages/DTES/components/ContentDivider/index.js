/* eslint-disable react/prop-types */
import React from 'react';
import { Divider, Progress, Button } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';

function ContentDivider({ isCompleted, percentage, onReset }) {
  return (
    <Divider plain style={{ color: 'rgba(0, 0, 0, 0.1)' }}>
      {isCompleted ? (
        <div>
          <span style={{ paddingRight: '20px' }}>Result</span>
          <Button
            icon={<RollbackOutlined />}
            size="small"
            shape="round"
            onClick={onReset}
            id="dataLabResetBtn"
          />
        </div>
      ) : (
        <Progress
          percent={percentage}
          steps={5}
          strokeColor="rgb(62, 122, 64)"
        />
      )}
    </Divider>
  );
}

export default ContentDivider;
