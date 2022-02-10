import React, {useEffect, useRef, useState} from 'react';
import YouTube from 'react-youtube';
import Controls from "./Controls";
import Station from "../types/Station";
import styled from "@emotion/styled";
import {useHistory} from "react-router-dom";
import stations from "../constants/stations";

const Backdrop = styled.div`
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
            black,
            transparent,
            transparent,
            transparent,
            black
    );
    content: "";
    overflow: hidden;
    pointer-events: none; 
  }
  &::before {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, transparent 50%, transparent 100%);
    content: "";
    overflow: hidden;
  }
`;

const StyledVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
    
  iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    border: none;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
    
  @media (min-aspect-ratio: 16/9) {
    & iframe {
      height: 56.25vw;
    }
  }

  @media (max-aspect-ratio: 16/9) {
    & iframe {
      width: 177.78vh;
    }
  }
`

const ControlsContainer = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 10;
    overflow: hidden;

    margin-left: 36px;
    margin-right: 36px;
    width: calc(100% - 36px - 36px);
    margin-bottom: 12px;
`;

const NoPlayOverlay = styled.div`    
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.94);
  width: 100%;
  height: 100%;
`;

type PlayerProps = {
  activeStation: Station,
}

const Player: React.FC<PlayerProps> = ({activeStation}) => {
  const playerAPIRef = useRef<any>(null);

  const onReady = (event: any) => {
    if (!playerAPIRef.current) {
      playerAPIRef.current = event.target;
    }
    event.target.setVolume(100);
  };

  const onStateChange = (state: any) => {
    const playerState = state.target.getPlayerState();
    switch (playerState) {
      case 1:
        // playing
        setIsPlaying(true);
        setIsBuffering(false);
        break;
      case 2:
        // paused
        // setIsPlaying(false);
        // setIsBuffering(false);
        break;
      case 3:
        // buffering
        setIsBuffering(true);
        break;
    }
  };

  const onError = (err: any) => {
    console.log('ERR', err);
  }

  const history = useHistory();
  const [volumeLevel, setVolumeLevel] = useState(100);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.currentTarget.value);
    setVolumeLevel(val);
    if (playerAPIRef.current) {
      playerAPIRef.current.setVolume(val);
    }
  };

  const handleOpenPrevStationClick = () => {
    const activeStationIndex = stations.findIndex(s => s === activeStation);
    let nextStationIndex = activeStationIndex - 1;
    if (nextStationIndex < 0) {
      nextStationIndex = stations.length - 1;
    }

    const nextActiveStation = stations[nextStationIndex];
    if (!nextActiveStation) {
      return;
    }

    history.push(`/${nextActiveStation.slug}`);
  }

  const handleOpenNextStationClick = () => {
    const activeStationIndex = stations.findIndex(s => s === activeStation);
    let nextStationIndex = activeStationIndex + 1;
    if (nextStationIndex >= stations.length) {
      nextStationIndex = 0;
    }

    const nextActiveStation = stations[nextStationIndex];
    if (!nextActiveStation) {
      return;
    }

    history.push(`/${nextActiveStation.slug}`);
  }

  const handleToggleVolumeClick = () => {
    const newVolume = volumeLevel > 0 ? 0 : 100;
    setVolumeLevel(newVolume);
  };

  const handleTogglePlayClick = () => {
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    if (!playerAPIRef.current) {
      return;
    }

    if (isPlaying && !isBuffering) {
      playerAPIRef.current.playVideo();
    }

    if (!isPlaying && !isBuffering) {
      playerAPIRef.current.pauseVideo();
    }

    // else {
    //   playerAPIRef.current.pauseVideo();
    // }
  }, [isPlaying, isBuffering]);

  return (
    <Backdrop>
      <StyledVideo>
        <YouTube
          videoId={activeStation.id}
          opts={{
            height: '360',
            width: '640',
            playerVars: {
              autoplay: 1,
              controls: 0,
              disablekb: 1,
              enablejsapi: 1,
              fs: 0,
              modestbranding: 1,
              playsinline: 1,
              iv_load_policy: 3,
            },
          }}
          onStateChange={onStateChange}
          onError={onError}
          onReady={onReady}
        />
      </StyledVideo>
      {!isPlaying && !isBuffering && (
        <NoPlayOverlay />
      )}
      <ControlsContainer>
        <Controls
          isPlayed={isPlaying}
          volumeLevel={volumeLevel}
          onVolumeChange={handleVolumeChange}
          onPrevStationClick={handleOpenPrevStationClick}
          onNextStationClick={handleOpenNextStationClick}
          onToggleVolumeClick={handleToggleVolumeClick}
          onTogglePlayClick={handleTogglePlayClick}
        />
      </ControlsContainer>
    </Backdrop>
  );
}

export default Player;
