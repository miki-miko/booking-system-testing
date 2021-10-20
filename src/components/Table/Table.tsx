import React, { FC } from 'react';

interface tableI {
  id: number;
  name: string;
  capacity: number;
  isAvailable: boolean;
  location: string;
}

const Table: React.FC<tableI> = (table) => {
  //
  return (
    <div className="Card">
      <p className="table-name">{table.name}</p>
      <p className="table-capacity">
        This table is for {table.capacity} persons
      </p>
      <p className="table-availabilty"> {table.isAvailable}</p>
      <p className="table-location">Location: {table.location}</p>
    </div>
  );
};

export default Table;
