import React from 'react';
import {Link} from 'react-router-dom';
import Station from "../types/Station";

interface StationItemProps {
  station: Station,
  className: string,
}

function StationItem({station, className}: StationItemProps) {
  return (
    <div className={className}>
      <Link to={`/${station.id}`}>
        {station.title}
      </Link>
    </div>
  );
}

export default StationItem;
