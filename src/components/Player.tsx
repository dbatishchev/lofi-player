import React from 'react';
import YouTube from 'react-youtube';

interface PlayerProps {

}

let player: any = null;

function Player(props: PlayerProps) {
  const onReady = (event: any) => {
    // todo
    // p.setVolume(ctx, p.volume.Value)
    // p.play(ctx)

    // player = event.target;
    // event.target.pauseVideo();
  };

  const onClick = () => {
    console.log('1', player);
    player.loadVideoById("7NOSDKb0HlU");
    player.playVideo();
  };

  const onStateChange = (state: any) => {

    console.log('STATE', state);
  };

  const onError = (err: any) => {
    console.log('ERR', err);
  }

  // https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2
  //
  // return (
  //   <iframe id="youtube-player" className="unselectable" frameBorder="0" allowFullScreen="1"
  //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //           title="YouTube video player" width="640" height="360"
  //           src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1&amp;controls=0&amp;modestbranding=1&amp;disablekb=1&amp;iv_load_policy=3&amp;playsinline=1&amp;origin=https%3A%2F%2Flofimusic.app&amp;enablejsapi=1&amp;widgetid=1"></iframe>
  // );

  return (
    <div className="youtube" onClick={onClick}>
      <div className="youtube-video">
        <YouTube
          videoId="5qap5aO4i9A"
          opts={{
            height: '360',
            width: '640',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
              controls: 0,
              disablekb: 1,
              enablejsapi: 1,
              fs: 0,
              modestbranding: 1,
              playsinline: 1,
              iv_load_policy: 3,
              mute: 1 // todo
            },
          }}
          onStateChange={onStateChange}
          onError={onError}
          onReady={onReady}
        />
      </div>

    </div>
  );
}

export default Player;
