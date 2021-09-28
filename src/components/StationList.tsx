import React from 'react';
import stations from "../constants/stations";
import StationItem from "./StationItem";

interface StationListProps {

}

function StationList(props: StationListProps) {
  return (
    <div className="stationList">
      {stations.map(s => (
        <StationItem station={s} className="stationListItem" />
      ))}
    </div>
  );
}

export default StationList;
