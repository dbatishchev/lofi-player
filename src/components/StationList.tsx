import React from 'react';
import stations from "../constants/stations";
import StationItem from "./StationItem";
import Station from "../types/Station";
import styled from "@emotion/styled";

const Container = styled.div`
  color: white;
  height: 100%;
  padding: 0 36px;
  margin-top: 120px;
`;

const StyledStationItem = styled(StationItem)`
`

type StationListProps = {
  activeStation: Station,
}

const StationList: React.FC<StationListProps> = ({activeStation}: StationListProps) => {
  return (
    <Container>
      {stations.map(s => (
        <StyledStationItem
          key={s.id}
          isActive={s === activeStation}
          station={s}
        />
      ))}
    </Container>
  );
}

export default StationList;
