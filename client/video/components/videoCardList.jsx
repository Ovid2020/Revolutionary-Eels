import React from 'react';
import VideoCard from './videoCard.jsx';

// All the current videos from remote peers are contained here. 
const VideoCardList = ({connections, streams}) => {
  return (
    <div className="vid-scrollable-list">
      { connections.map( (connection) => {
        return (<VideoCard  stream={ streams[connection.pcKey] } 
                            pcKey={ connection.pcKey } 
                            hangupOnclick= { connection.hangupOnclick }
                            id={"vidBox___" + connection.pcKey} />)
      }) }
    </div>
  ); 
};

export default VideoCardList;
