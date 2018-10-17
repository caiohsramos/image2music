import React from 'react'

export default props => (
    <iframe
        title={props.name}
        src={`https://open.spotify.com/embed/track/${props.track.id}`}
        width="300" height="80" frameBorder="0" allowtransparency="true"
        allow="encrypted-media"
        style={{ margin: 15 }} />
)