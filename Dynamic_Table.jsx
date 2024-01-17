
import React from 'react';

const DynamicTable = ({ data }) => {
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <table>
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
