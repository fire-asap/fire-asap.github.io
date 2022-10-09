/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'antd';
import CardTitle from '../CardTitle';

function ResultCard({ hintText, titleText, style, content }) {
  return (
    <div>
      <Card
        title={<CardTitle hintText={hintText} titleText={titleText} />}
        bordered
        style={style}
      >
        <div className="cardContent center">{content}</div>
      </Card>
    </div>
  );
}

export default ResultCard;
