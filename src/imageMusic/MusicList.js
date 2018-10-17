import React from 'react'
import MusicCard from './MusicCard'

export default props => (
    <div text-align='center'>
        {props.tracks.map((obj, index) => (
            <MusicCard key={index} track={obj} />
        ))}
    </div>
)