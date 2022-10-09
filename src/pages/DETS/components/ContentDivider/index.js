/* eslint-disable react/prop-types */
import React from 'react';
import { Divider, Progress } from 'antd';

function ContentDivider({ isCompleted, percentage }) {
  return (
    <Divider plain style={{ color: 'rgba(0, 0, 0, 0.1)' }}>
      {isCompleted ? (
        'Result'
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
