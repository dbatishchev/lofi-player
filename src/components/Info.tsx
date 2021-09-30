import React from 'react';
import styled from '@emotion/styled'
import Station from "../types/Station";
import Icon, {ICON_NAME_SPOTIFY, ICON_NAME_YOUTUBE} from "./Icon";

const StyledInfo = styled.div`
  color: white;
  padding: 0 36px;
  
  h1 {
    padding: 12px 20px; 
    margin: 0 0 24px 0;
    border-bottom: thin solid white;
    letter-spacing: 12px;
    font-weight: 300;
    font-size: 48px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  }
`;

const IconsList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  > * {
    margin: 0 6px;
    cursor: pointer;
  }
`

interface InfoProps {
  activeStation: Station,
}

function Info({activeStation}: InfoProps) {
  return (
    <StyledInfo>
      <h1>{activeStation.title}</h1>
      <IconsList>
        <Icon name={ICON_NAME_SPOTIFY} />
        <Icon name={ICON_NAME_YOUTUBE} />
      </IconsList>
    </StyledInfo>
  );
}

export default Info;
