import React from 'react';
import pause from './../assets/icons/pause.svg';
import play from './../assets/icons/play.svg';
import skipNext from './../assets/icons/skip-next.svg';
import skipPrevious from './../assets/icons/skip-previous.svg';
import volumeDown from './../assets/icons/volume-down.svg';
import volumeMute from './../assets/icons/volume-mute.svg';
import volumeOff from './../assets/icons/volume-off.svg';
import volumeUp from './../assets/icons/volume-up.svg';
import styled from "@emotion/styled";

export const ICON_NAME_PAUSE = 'pause';
export const ICON_NAME_PLAY = 'play';
export const ICON_NAME_SKIP_NEXT = 'skipNext';
export const ICON_NAME_SKIP_PREVIOUS = 'skipPrevious';
export const ICON_NAME_VOLUME_DOWN = 'volumeDown';
export const ICON_NAME_VOLUME_MUTE = 'volumeMute';
export const ICON_NAME_VOLUME_OFF = 'volumeOff';
export const ICON_NAME_VOLUME_UP = 'volumeUp';

const ICON_MAP : { [key: string]: string } = {
  [ICON_NAME_PAUSE]: pause,
  [ICON_NAME_PLAY]: play,
  [ICON_NAME_SKIP_NEXT]: skipNext,
  [ICON_NAME_SKIP_PREVIOUS]: skipPrevious,
  [ICON_NAME_VOLUME_DOWN]: volumeDown,
  [ICON_NAME_VOLUME_MUTE]: volumeMute,
  [ICON_NAME_VOLUME_OFF]: volumeOff,
  [ICON_NAME_VOLUME_UP]: volumeUp,
};

const StyledIcon = styled.img`
  filter: invert(100%) sepia(1%) saturate(3740%) hue-rotate(328deg) brightness(128%) contrast(91%);
`;

interface IconProps {
  name: string,
  className?: string,
}

function Icon({className, name}: IconProps) {
  return (
    <StyledIcon
      className={className}
      src={ICON_MAP[name]}
    />
  );
}

export default Icon;
