import React from 'react';
import Button from "./Button";
import Volume from "./Volume";
import Icon, {
  ICON_NAME_PAUSE,
  ICON_NAME_PLAY,
  ICON_NAME_SKIP_NEXT,
  ICON_NAME_SKIP_PREVIOUS, ICON_NAME_VOLUME_DOWN, ICON_NAME_VOLUME_MUTE,
  ICON_NAME_VOLUME_OFF,
  ICON_NAME_VOLUME_UP
} from "./Icon";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledVolume = styled(Volume)`
  width: 160px;
`

type ControlsProps = {
  isPlayed: boolean,
  volumeLevel: number,
  onVolumeChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onPrevStationClick: () => void,
  onNextStationClick: () => void,
  onToggleVolumeClick: () => void,
  onTogglePlayClick: () => void,
}

const Controls: React.FC<ControlsProps> = ({isPlayed, volumeLevel, onVolumeChange, onPrevStationClick, onNextStationClick, onToggleVolumeClick, onTogglePlayClick}) => {
  let volumeIcon = ICON_NAME_VOLUME_UP;

  if (volumeLevel < 60) {
    volumeIcon = ICON_NAME_VOLUME_DOWN;
  }
  if (volumeLevel < 40) {
    volumeIcon = ICON_NAME_VOLUME_MUTE;
  }
  if (volumeLevel === 0) {
    volumeIcon = ICON_NAME_VOLUME_OFF;
  }

  return (
    <Container>
      <Button onClick={onPrevStationClick}>
        <Icon name={ICON_NAME_SKIP_PREVIOUS} />
      </Button>
      <Button onClick={onNextStationClick}>
        <Icon name={ICON_NAME_SKIP_NEXT} />
      </Button>
      <Button size="lg" onClick={onTogglePlayClick}>
        <Icon name={isPlayed ? ICON_NAME_PAUSE : ICON_NAME_PLAY} />
      </Button>
      <Button onClick={onToggleVolumeClick}>
        <Icon name={volumeIcon} />
      </Button>
      <StyledVolume value={volumeLevel} onChange={onVolumeChange} />
    </Container>
  );
}

export default Controls;
