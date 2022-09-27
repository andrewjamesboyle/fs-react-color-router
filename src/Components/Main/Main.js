import React from 'react';
import { useParams } from 'react-router-dom';

export default function Main() {
  const params = useParams();
  console.log('params', params);
  return (
    <div style={{ backgroundColor: `rgb(${params.red}, ${params.green}, ${params.blue})` }}>
      PICK A COLOR
    </div>
  );
}
