import React from "react";
import ReactPlayer from "react-player";
import './Player.css';

class Player extends React.Component {
    render () {
      return (
          <div className='player-wrapper'>
          <ReactPlayer
            url={["../public/files/pexels-artem-podrez-5752729 (2160p).mp4"]}
            config={{
                file: {
                  playerVars: { showinfo: 1 }
                }
              }}
            className='react-player'
            playing='false'
            controls="true"
            light="true"
            width='100%'
            height='100%'
          />
        </div>
      )
    }
}

export default Player;
