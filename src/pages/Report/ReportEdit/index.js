import React from 'react';
import { useParams } from 'react-router-dom';

const ReportEdit = () => {
  const { id } = useParams();
  return (
    <div>
      <div>this is Reports Edit page {id}</div>
    </div>
  );
};

export default ReportEdit;
