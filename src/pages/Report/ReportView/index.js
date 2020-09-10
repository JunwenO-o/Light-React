import React from 'react';
import { useParams } from 'react-router-dom';

const ReportView = () => {
  const { id } = useParams();
  return <div>this is Reports page id: {id}</div>;
};

export default ReportView;
