import React, {useMemo} from 'react';
import styled from '@emotion/styled'
import Player from "./Player";
import StationList from "./StationList";
import {useParams} from "react-router-dom";
import stations from "../constants/stations";

const StationListContainer = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    height: 100%;
    min-height: 100%;
    max-height: 100%;
`

interface HomeScreenProps {

}

export default function HomeScreen(props: HomeScreenProps) {
  const { slug } = useParams<{ slug: string }>();
  const activeStation = useMemo(() => {
    const station = stations.find(s => s.slug === slug);
    return station ? station : stations[0];
  }, [slug]);

  return (
    <div>
      <Player activeStation={activeStation} />
      <StationListContainer>
        <StationList activeStation={activeStation} />
      </StationListContainer>
    </div>
  );
}
