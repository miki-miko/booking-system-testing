import React from 'react';

interface tableI {
  id: number;
  name: string;
  capacity: number;
  isAvailable: boolean;
  location: string;
}

const Table: React.FC<tableI> = (tableInfo) => {
  //
  return (
    <div className="Card">
      <p className="table-name">{tableInfo.name}</p>
      <p className="table-capacity">
        This table is for {tableInfo.capacity} persons
      </p>
      <p className="table-availabilty"> {tableInfo.isAvailable}</p>
      <p className="table-location">Location: {tableInfo.location}</p>
    </div>
  );
};

export default Table;
