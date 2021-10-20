import React from 'react';

interface tableI {
  table: {
    id: number;
    name: string;
    capacity: number;
    isAvailable: boolean;
    location: string;
  };
}

const Table: React.FC<tableI> = (tableInfo) => {
  //
  return (
    <div className="table-wrapper">
      <p className="table-name">{tableInfo.table.name}</p>
      <p className="table-capacity">
        This table is for {tableInfo.table.capacity} persons
      </p>
      <p className="table-availabilty"> {tableInfo.table.isAvailable}</p>
      <p className="table-location">Location: {tableInfo.table.location}</p>
    </div>
  );
};

export default Table;
